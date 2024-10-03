import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../app/config/db";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
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
    await limiter(req, res, () => {});

    // Apply security headers
    helmet()(req, res, () => {});

    const apiKey = req.headers['x-api-key'];

    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    if (!apiKey || apiKey !== process.env.X_API_KEY) {
        console.log(apiKey);
        console.log(process.env.X_API_KEY);
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        const connection = await connectToDatabase();

        console.log('Request body: '+req.body.toString());

        const sql = new StringBuilder();
        sql.append('select tp.Pejabat_id, t.Alignment_Name, tt.Pejabat_Type_Name, tpp.Partai_Name, ti.Insight_Desc, tq.Quote_Desc from tbl_pejabat tp');
        sql.append(' left join tbl_pejabatalignment t on tp.Alignment_id = t.Alignment_id');
        sql.append(' left join tbl_pejabattype tt on tp.Pejabat_type_id = tt.Pejabat_type_id');
        sql.append(' left join tbl_pejabatinsight ti on tp.Pejabat_id = ti.Pejabat_id');
        sql.append(' left join tbl_pejabatquote tq on tp.Pejabat_id = tq.Pejabat_id');
        sql.append(' left join tbl_province tpv on tp.Province_id = tpv.Province_id');
        sql.append(' left join tbl_partai tpp on tp.Partai_id = tpp.Partai_id');

        if(req.body.pejabat_type_id || req.body.province_id || req.body.pejabat_alignment_id) {
            sql.append(' where');

            if(req.body.pejabat_type_id)
                sql.append(' tp.Pejabat_type_id = ?');

            if(req.body.province_id) {
                if(req.body.pejabat_type_id)
                    sql.append(' AND');
                sql.append(' tp.Province_id = ?');
            }

            if(req.body.pejabat_alignment_id)
                if(req.body.pejabat_type_id || req.body.province_id)
                    sql.append(' AND');
                sql.append(' t.Alignment_id = ?');
        }

        sql.append(' ORDER BY tp.Pejabat_id ASC');
        // Extract limit and offset from the request
        const page = parseInt( req.query.page as string) || 1; // Default page to 1
        const offset = page > 0 ? (page - 1)*15 : 0; // Default offset to 0

        sql.append(' LIMIT 15 OFFSET ?');

        const queryString = sql.toString(); // Convert StringBuilder to string

        const [rows] = await connection.query(queryString, [offset]);

        // Process the Insight_Desc field
        const processedRows = rows.map((row: any) => {
            if (row.Insight_Desc) {
                row.Insight_Desc = row.Insight_Desc.split(';');
            }
            return row;
        });

        res.send({
            status: 200,
            page: offset+1,
            data: processedRows
        });
        
    } catch (error: any) {
        console.error("Error:", error.response ? error.response.data : error.message); // Log error details

        res.status(500).send({
            error: "Internal server error.",
        });
    }
}