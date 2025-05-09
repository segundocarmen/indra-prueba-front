import { useDispatch } from 'react-redux';
import { ContractorSelector } from '../../../../common/constants';
import CardComponent from '../../../../components/card';
import { setContractor } from '../../../../store/slices/plans';
import { useAppSelector } from '../../../../store/hooks';
import type { PlanInterface } from '../../../../store/slices/plans/plan.interface';

const PlanSelector = () => {
    const dispatch = useDispatch();
    const { contractor }: PlanInterface = useAppSelector(state => state.plan);

    const SelectContractor = (index: number) => {
        dispatch(setContractor(index));
    };

    return (
        <div className='planselector'>
            {ContractorSelector.map((item, index: number) => {
                return (
                    <CardComponent key={index}>
                        <div
                            className='planselector_item'
                            onClick={() => {
                                SelectContractor(index);
                            }}
                        >
                            <span
                                className={`check ${index === contractor ? 'active' : ''}`}
                            ></span>
                            <img src={item.icon} alt={item.title} />
                            <h3> {item.title} </h3>
                            <p> {item.description} </p>
                        </div>
                    </CardComponent>
                );
            })}
        </div>
    );
};

export default PlanSelector;
