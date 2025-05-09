/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../../../hooks/useApi';
import { SendData } from '../../../../hooks/useApi/fetcher';
import { Methods } from '../../../../services/methods';
import { ApiUsers } from '../../../../services/rimac';
import FormBottom from './form-bottom';
import FormComponent from './form-component';
import FormHead from './form-head';
import './style.scss';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../../store/slices/user';

const Home = () => {
    const dispatch = useDispatch();
    const { FetchData, LoaderElement, LoadingData } = useApi();
    const navigate = useNavigate();

    const OnSubmit = async (data: any) => {
        const response = await SendData(FetchData, ApiUsers, Methods.GET);
        dispatch(setUserData({ ...data, ...response }));
        if (response) {
            navigate('/plan');
        }
    };

    return (
        <div className='homeform'>
            <div className='homeform_wrapper'>
                <FormHead />
                <FormComponent OnSubmit={OnSubmit} />
                <FormBottom />
            </div>

            {LoadingData && <LoaderElement />}
        </div>
    );
};
export default Home;
