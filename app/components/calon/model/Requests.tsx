export interface AllRequestBody {
    page: number;
}

export interface SearchRequestBody {
    pejabat_type_id?: number | null;
    province_id?: string | null;
}

export interface DetailRequestBody {
    pejabat_id: number;
}