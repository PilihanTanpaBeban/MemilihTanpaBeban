export interface AllRequestBody {
    page: number;
}
export interface AllRequestBodyV2 {
    page: number;
    pejabat_type: string | null;
}

export interface SearchRequestBody {
    pejabat_type_id: string | undefined;
    province_id?: string | null;
}

export interface SearchRequestBodyV2 {
    page?: number;
    pejabat_type: string | null;
    province_id?: string | null;
    alignment_type?: string | null;
}

export interface DetailRequestBody {
    pejabat_id: number;
}

export interface DetailRequestBodyV2 {
    pejabat_id: number[];
}