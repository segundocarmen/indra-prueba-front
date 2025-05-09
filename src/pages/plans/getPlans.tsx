/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import { SendData } from '../../hooks/useApi/fetcher';
import { ApiPlans } from '../../services/rimac';
import { Methods } from '../../services/methods';
import { setPlansList } from '../../store/slices/plans';
import { useDispatch } from 'react-redux';

export function GetPlans() {
    const dispatch = useDispatch();
    const { FetchData } = useApi();

    const GetPlans = async () => {
        const response = await SendData(FetchData, ApiPlans, Methods.GET);
        dispatch(setPlansList(response.list));
    };

    useEffect(() => {
        GetPlans();
    }, []);

    return <></>;
}
