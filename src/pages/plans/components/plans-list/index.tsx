import { useAppSelector } from '../../../../store/hooks';
import type { PlanInterface } from '../../../../store/slices/plans/plan.interface';
import PlanItem from './card';
import './style.scss';

const PlansList = () => {
    const { list }: PlanInterface = useAppSelector(state => state.plan);

    return (
        <div className='planslist'>
            <div className='planslist_wrapper'>
                {list.map((item, index: number) => {
                    return <PlanItem {...item} key={index} />;
                })}
            </div>
        </div>
    );
};

export default PlansList;
