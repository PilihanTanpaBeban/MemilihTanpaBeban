import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../app/config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.X_API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  let connection;
  try {
    connection = await connectToDatabase();

    const tableName = process.env.FACTS_TABLE_NAME || "Tbl_Facts";
    const sql = `
      SELECT 
        id,
        statement,
        factCard,
        factContent,
        thumbnailImg,
        links,
        createdAt,
        updatedAt
      FROM ${tableName}
      ORDER BY id ASC`;

    const [rows] = await connection.query(sql);
    res.status(200).json({ status: 200, data: rows });
  } catch (error: any) {
    const details = {
      message: error?.message,
      code: error?.code,
      sqlMessage: error?.sqlMessage,
    };
    console.error("Facts API error:", details);
    res.status(500).json({ error: "Internal server error.", details });
  }
}