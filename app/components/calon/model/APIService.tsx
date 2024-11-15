import axios from "axios";
import { API_ALL, API_ALL_V2, API_DETAIL_PEJABAT, API_DETAIL_PEJABAT_V2, API_SEARCH, API_SEARCH_V2 } from "./api";
import { AllRequestBody, AllRequestBodyV2, DetailRequestBody, DetailRequestBodyV2, SearchRequestBody, SearchRequestBodyV2 } from "./Requests";

export const getAllData = async (params: AllRequestBody) => {
    try {
        const response = await axios.get(API_ALL, {
            params,
            headers: {
                'x-api-key': process.env.X_API_KEY
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllDataV2 = async (allRequestBody: AllRequestBodyV2) => {
    try {
        const request = {
            ...Object.fromEntries(Object.entries(allRequestBody).filter(([_, value]) => value !== null && value !== undefined))
        }
        const response = await axios.post(API_ALL_V2, request,
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY
                }
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getSearchResult = async (page: number, searchRequestBody: SearchRequestBody) => {
    try {
        const request = {
            ...Object.fromEntries(Object.entries(searchRequestBody).filter(([_, value]) => value !== null && value !== undefined))
        }
        const response = await axios.post(`${API_SEARCH}?page=${page}`, request, {
            headers: {
                'x-api-key': process.env.X_API_KEY
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getSearchResultV2 = async (page: number, searchRequestBody: SearchRequestBodyV2) => {
    try {
        const request = {
            ...Object.fromEntries(Object.entries(searchRequestBody).filter(([_, value]) => value !== null && value !== undefined))
        }
        const response = await axios.post(API_SEARCH_V2, request, {
            headers: {
                'x-api-key': process.env.X_API_KEY
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getDetailPejabat = async (detailRequestBody: DetailRequestBody) => {
    try {
        const response = await axios.post(API_DETAIL_PEJABAT, detailRequestBody, {
            headers: {
                'x-api-key': process.env.X_API_KEY
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching local data:', error);
        throw error;
    }
}

export const getDetailPejabatV2 = async (detailRequestBody: DetailRequestBodyV2) => {
    try {
        const response = await axios.post(API_DETAIL_PEJABAT_V2, detailRequestBody, {
            headers: {
                'x-api-key': process.env.X_API_KEY
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching local data:', error);
        throw error;
    }
}