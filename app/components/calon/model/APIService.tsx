import axios from "axios";
import { API_ALL, API_DETAIL_PEJABAT, API_SEARCH } from "./api";
import { AllRequestBody, DetailRequestBody, SearchRequestBody } from "./Requests";

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
        console.error('Error fetching local data:', error);
        throw error;
    }
};

export const getSearchResult = async (page: number, searchRequestBody: SearchRequestBody) => {
    try {
        const request = {
            ...Object.fromEntries(Object.entries(searchRequestBody).filter(([_, value]) => value !== null && value !== undefined))
        }
        console.log(request.toString())
        const response = await axios.post(`${API_SEARCH}?page=${page}`, request, {
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

export const getDetailPejabat = async (detailRequestBody: DetailRequestBody) => {
    try {
        console.log('detailRequestBody:', detailRequestBody);
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