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

  try {
    const pool = await connectToDatabase();
    const [rows]: any = await pool.query("SELECT 1 AS ok");
    const ok = Array.isArray(rows) && rows.length > 0 ? rows[0].ok === 1 : false;

    return res.status(200).json({
      status: 200,
      ok,
      info: {
        host: process.env.MYSQL_HOST || "127.0.0.1",
        port: process.env.MYSQL_PORT || "3306",
        user: process.env.MYSQL_USER || "",
        database: process.env.MYSQL_DATABASE || "",
      },
    });
  } catch (error: any) {
    const details = {
      message: error?.message,
      code: error?.code,
      sqlMessage: error?.sqlMessage,
    };
    console.error("DB Ping error:", details);
    return res.status(500).json({ error: "Internal server error.", details });
  }
}