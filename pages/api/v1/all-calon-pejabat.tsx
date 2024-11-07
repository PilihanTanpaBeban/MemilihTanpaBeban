import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../app/config/db";
const StringBuilder = require("string-builder");


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {

    const apiKey = req.headers['x-api-key'];

    if (req.method !== 'GET') {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    if (!apiKey || apiKey !== process.env.X_API_KEY) {
        console.log(apiKey);
        console.log(process.env.X_API_KEY);
        return res.status(401).json({ error: "Unauthorized" });
    }

    let connection;

    try {
        connection = await connectToDatabase();
        const sql = new StringBuilder();
        sql.append('select tp.Pejabat_id, tp.Pejabat_Name, t.Alignment_Name, tpp.Partai_Name, tpv.Province_Name, tp.Dapil_id from Tbl_Pejabat tp');

        const countSql = new StringBuilder();
        countSql.append('SELECT COUNT(*) as total FROM Tbl_Pejabat tp');

        const joinSql = new StringBuilder();
        joinSql.append(' left join Tbl_PejabatAlignment t on tp.Alignment_id = t.Alignment_id');
        joinSql.append(' left join Tbl_Province tpv on tp.Province_id = tpv.Province_id');
        joinSql.append(' left join Tbl_Partai tpp on tp.Partai_id = tpp.Partai_id');

        const whereSql = new StringBuilder();
        if (req.query.pejabat_type_id == '1')
            whereSql.append(` where tp.Pejabat_type_id = ${req.query.pejabat_type_id}`);

        const orderOffsetSql = new StringBuilder();
        orderOffsetSql.append(' ORDER BY tp.Pejabat_id ASC');
        // Extract limit and offset from the request
        const page = parseInt(req.query.page as string) || 1; // Default page to 1
        const offset = page > 0 ? (page - 1) * 16 : 0; // Default offset to 0

        orderOffsetSql.append(' LIMIT 16 OFFSET ?');

        const formattedQuery = sql + joinSql + orderOffsetSql;

        const [rows] = await connection.query(sql + joinSql + orderOffsetSql, [offset]);

        const [totalData] = await connection.query(countSql + joinSql);

        res.send({
            status: 200,
            page: offset + 1,
            totalData: totalData[0].total,
            data: rows
        });

    } catch (error: any) {
        console.error("Error:", error.response ? error.response.data : error.message); // Log error details

        console.error('Stack trace:', error.stack);
        res.status(500).send({
            error: "Internal server error.",
        });
    }
}