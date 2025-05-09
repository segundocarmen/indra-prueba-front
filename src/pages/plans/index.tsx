import { useDispatch } from 'react-redux';
import { setApplicationStep } from '../../store/slices/application';
import Contractor from './components/contractor';
import { useApi } from '../../hooks/useApi';
import './style.scss';
import PlansList from './components/plans-list';
import { useAppSelector } from '../../store/hooks';
import type { PlanInterface } from '../../store/slices/plans/plan.interface';
import { GetPlans } from './getPlans';

const Plans = () => {
    const dispatch = useDispatch();
    const { LoaderElement, LoadingData } = useApi();
    dispatch(setApplicationStep(1));
    const { contractor }: PlanInterface = useAppSelector(state => state.plan);

    return (
        <div className='planpage'>
            <Contractor />
            <GetPlans />
            {contractor !== null && <PlansList />}
            {LoadingData && <LoaderElement />}
        </div>
    );
};

export default Plans;
