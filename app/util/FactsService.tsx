import axios from "axios";

export interface FactItem {
  id: number;
  statement: string; // Pernyataan
  factCard: string; // Ringkas untuk kartu
  factContent: string; // Konten lengkap untuk modal
  thumbnailImg?: string; // Optional URL/file name
  links?: string | null; // optional CSV or JSON array string
  createdAt?: string;
  updatedAt?: string;
}

export const getFacts = async (): Promise<FactItem[]> => {
  try {
    const response = await axios.get("/api/v1/facts", {
      headers: {
        "x-api-key": (process.env.NEXT_PUBLIC_X_API_KEY as string) || "",
      },
    });
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching facts:", error);
    throw error;
  }
};