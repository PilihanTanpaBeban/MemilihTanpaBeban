import axios from "axios";

export interface DisclaimerItem {
  id: number;
  title: string;
  description: string; // HTML content
  iconUrl: string;
  created_at?: string;
  updated_at?: string;
}

export const getDisclaimers = async (): Promise<DisclaimerItem[]> => {
  try {
    const response = await axios.get("/api/v1/disclaimer", {
      headers: {
        "x-api-key": process.env.X_API_KEY as string,
      },
    });
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching disclaimers:", error);
    throw error;
  }
};