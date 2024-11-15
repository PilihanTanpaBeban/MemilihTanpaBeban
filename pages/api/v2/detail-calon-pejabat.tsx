import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../app/config/db";
const StringBuilder = require("string-builder");

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {

    const apiKey = req.headers['x-api-key'];

    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    if (!req.body.pejabat_id) {
        return res.status(400).json({ error: "Bad Request" });
    }

    if (!apiKey || apiKey !== process.env.X_API_KEY) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    let connection

    try {
        connection = await connectToDatabase();
        const sql = new StringBuilder();
        sql.append('select tp.Pejabat_id, tp.Pejabat_Name, t.Alignment_Name, tpt.Pejabat_Type_Name as Pejabat_Type, tpv.Province_Name, tp.Dapil_id, tq.Quote_Desc from Tbl_Pejabat tp');

        const queryParams: any[] = [];

        const joinSql = new StringBuilder();
        joinSql.append(' left join Tbl_PejabatAlignment t on tp.Alignment_id = t.Alignment_id');
        joinSql.append(' left join Tbl_PejabatType tt on tp.Pejabat_type_id = tt.Pejabat_type_id');
        joinSql.append(' left join Tbl_PejabatQuote tq on tp.Pejabat_id = tq.Pejabat_id');
        joinSql.append(' left join Tbl_Province tpv on tp.Province_id = tpv.Province_id');
        joinSql.append(' left join Tbl_PejabatType tpt on tpt.Pejabat_Type_id = tp.Pejabat_Type_id');

        const whereSql = new StringBuilder();

        whereSql.append(' where tp.Pejabat_id in (?) ')
        queryParams.push(req.body.pejabat_id);

        const [rows] = await connection.query(sql + joinSql + whereSql, queryParams);

        res.send({
            status: 200,
            data:
                rows

        });

    } catch (error: any) {
        console.error("Error:", error.response ? error.response.data : error.message); // Log error details

        console.error('Stack trace:', error.stack);
        res.status(500).send({
            error: "Internal server error.",
        });
    }
}