/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequestInterface } from '../../interface/api.interface';
import axios from 'axios';

export const Fetcher = async ({
    method = '',
    path = '',
    data
}: RequestInterface) => {
    return await axios.request({
        method,
        baseURL: `${path}`,
        headers: {
            'Content-type': 'application/json'
        },
        data
    });
};

export const SendData = async (
    fetchData: any,
    path: string,
    method: string,
    payload?: any
) => {
    const response = await fetchData({
        path,
        method,
        data: payload
    });
    return response;
};
