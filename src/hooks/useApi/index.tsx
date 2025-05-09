/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import type { RequestInterface } from '../../interface/api.interface';
import { type AxiosResponse } from 'axios';
import Loader from './Loader';
import { Fetcher } from './fetcher';

interface State {
    LoadingData: boolean;
    OnError?: any;
    Data?: any;
}

export function useApi() {
    const [status, setStatus] = useState<State>({
        LoadingData: false
    });

    const FetchData = async ({ path, method, data }: RequestInterface) => {
        setStatus({ LoadingData: true, Data: {} });
        try {
            const response: AxiosResponse = await Fetcher({
                method,
                path,
                data
            });
            setStatus({ LoadingData: false, Data: response.data });
            return response.data;
        } catch (error) {
            setStatus({ LoadingData: false, OnError: error });
        }
    };

    const LoaderElement = () => {
        return <Loader />;
    };

    return { ...status, FetchData, LoaderElement };
}
