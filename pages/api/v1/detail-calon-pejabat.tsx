import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../app/config/db";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { constants } from "buffer";
const StringBuilder = require("string-builder");

// Rate limiter middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // limit each IP to 50 requests per windowMs
    message: "Too many requests, please try again later.",
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    // Apply rate limiting
    // await limiter(req, res, () => {});

    // Apply security headers
    // helmet()(req, res, () => {});

    const apiKey = req.headers['x-api-key'];

    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    if (!apiKey || apiKey !== process.env.X_API_KEY) {
        console.log(apiKey);
        console.log(process.env.X_API_KEY);
        return res.status(401).json({ error: "Unauthorized" });
    }
    const connection = await connectToDatabase();

    try {
        const sql = new StringBuilder();
        sql.append('select tp.Pejabat_id, tp.Pejabat_Name, t.Alignment_Name, tpp.Partai_Name, tpv.Province_Name, ti.Insight_Desc, tq.Quote_Desc from Tbl_Pejabat tp');

        const queryParams: any[] = [];

        const joinSql = new StringBuilder();
        joinSql.append(' left join Tbl_PejabatAlignment t on tp.Alignment_id = t.Alignment_id');
        joinSql.append(' left join Tbl_PejabatType tt on tp.Pejabat_type_id = tt.Pejabat_type_id');
        joinSql.append(' left join Tbl_PejabatInsight ti on tp.Pejabat_id = ti.Pejabat_id');
        joinSql.append(' left join Tbl_PejabatQuote tq on tp.Pejabat_id = tq.Pejabat_id');
        joinSql.append(' left join Tbl_Province tpv on tp.Province_id = tpv.Province_id');
        joinSql.append(' left join Tbl_Partai tpp on tp.Partai_id = tpp.Partai_id');

        const whereSql = new StringBuilder();
        whereSql.append(' where tp.Pejabat_id = ? ');
        queryParams.push(req.body.pejabat_id);

        console.log(sql + joinSql + whereSql)

        const [rows] = await connection.query(sql + joinSql + whereSql, queryParams);

        const processedRows = rows.map((row: any) => {
            if (row.Insight_Desc) {
                row.Insight_Desc = row.Insight_Desc.split(';');
            }
            if (row.Quote_Desc) {
                row.Quote_Desc = row.Quote_Desc.split(';');
            }
            return row
        })

        res.send({
            status: 200,
            data: processedRows
        });

    } catch (error: any) {
        console.error("Error:", error.response ? error.response.data : error.message); // Log error details

        console.error('Stack trace:', error.stack);
        res.status(500).send({
            error: "Internal server error.",
        });
    }
}