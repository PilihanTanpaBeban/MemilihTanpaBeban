import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../app/config/db";
const StringBuilder = require("string-builder");

interface GubernurResponseInterface {
    Province_Name: string;
    Dapil_id: number;
    data: any[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {

    const apiKey = req.headers['x-api-key'];

    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    if (!apiKey || apiKey !== process.env.X_API_KEY) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    if (!req.body.pejabat_type) {
        
        return res.status(400).json({ error: "Bad Request" });
    }

    let connection;

    try {
        const pool = await connectToDatabase();
        connection = await pool.getConnection();

        if (!connection)
            throw new Error('Failed to connect to the database');

        const sql = `
            select tp.Pejabat_id, 
            case 
                when tp.Pejabat_type_id = 1
                    then 'DPR-RI'
                when tp.Pejabat_type_id = 2
                    then 'Gubernur'
                when tp.Pejabat_type_id = 3
                    then 'Wakil Gubernur'
            end as Pejabat_type, 
            tpp.Partai_Name, tp.Pejabat_Name, t.Alignment_Name, tpv.Province_Name, tp.Dapil_id from Tbl_Pejabat tp `;

        const countSql = 'SELECT COUNT(*) as total FROM Tbl_Pejabat tp ';

        const joinSql = `	
            left join Tbl_PejabatAlignment t on tp.Alignment_id = t.Alignment_id
	        left join Tbl_Province tpv on tp.Province_id = tpv.Province_id
	        left join Tbl_Partai tpp on tp.Partai_id = tpp.Partai_id `;

        // id=1 for DPR, id=2 for gubernur, id=3 for wakil gubernur
        const pejabatTypeSql = req.body.pejabat_type == 'DPR' ? ' tp.Pejabat_type_id = 1' : ' (tp.Pejabat_type_id = 2 or tp.Pejabat_type_id = 3)';
        const whereSql = `
        where ${pejabatTypeSql} and deletedOn is null`;

        const orderOffsetSql = new StringBuilder();
        orderOffsetSql.append(' ORDER BY tp.Pejabat_id ASC');
        // Extract limit and offset from the request
        const page = parseInt(req.body.page as string) || 1; // Default page to 1
        const offset = page > 0 ? (page - 1) * 16 : 0; // Default offset to 0

        orderOffsetSql.append(' LIMIT 16 OFFSET ?');

        const formattedQuery = sql + joinSql + whereSql + orderOffsetSql;
        console.log(formattedQuery)
        
        const [rows] = await connection.query(formattedQuery, [offset]);

        const [totalData] = await connection.query(countSql + joinSql + whereSql);

        if (rows.length > 0 && req.body.pejabat_type != 'DPR') {
            let result: any[] = [];
            const groupedData: { [key: string]: GubernurResponseInterface } = {};

            rows.forEach((row: any) => {
                const key = `${row.Province_Name}-${row.Dapil_id}`;
                if (!groupedData[key]) {
                    groupedData[key] = {
                        Dapil_id: row.Dapil_id,
                        Province_Name: row.Province_Name,
                        data: []
                    };
                }
                const { Dapil_id, Province_Name, ...dataWithoutDapilAndProvince } = row;
                groupedData[key].data.push(dataWithoutDapilAndProvince);
            });

            result = Object.values(groupedData);

            res.send({
                status: 200,
                page: offset + 1,
                totalData: (totalData[0].total) / 2,
                data: result
            });
        }

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
    } finally {
        if (connection) {
            
            await connection.release();
        }
    }
}