import { useDispatch } from 'react-redux';
import { ContractorSelector } from '../../../../common/constants';
import CardComponent from '../../../../components/card';
import RimacButton from '../../../../components/rimac-button';
import { useAppSelector } from '../../../../store/hooks';
import { setPlanSelected } from '../../../../store/slices/plans';
import PlanIcon from '../../../../assets/IcHomeLight.png';
import type {
    PlanInterface,
    PlansList
} from '../../../../store/slices/plans/plan.interface';
import { useNavigate } from 'react-router-dom';

const PlanItem = ({ age, description, name, price }: PlansList) => {
    const { contractor }: PlanInterface = useAppSelector(state => state.plan);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const UpdatePrice =
        contractor !== null
            ? ContractorSelector[contractor].title === 'Para mí'
                ? price
                : (price - price * 0.05).toFixed(2)
            : 0;

    const SelectPlan = (plan: PlansList) => {
        dispatch(setPlanSelected(plan));
        navigate('/summary');
    };

    return (
        <CardComponent>
            <div className='planslist_item'>
                <div className='planslist_item_title'>
                    <h3> {name} </h3>
                    <img src={PlanIcon} alt='Plan icon' />
                </div>
                <span>Costo del plan</span>
                <p className='price'>
                    ${UpdatePrice}
                    al mes
                </p>
                <ul>
                    {description.map((element, idx: number) => {
                        return <li key={idx}> {element} </li>;
                    })}
                </ul>
                <RimacButton
                    text='Selecionar plan'
                    variant='red'
                    padding='xs'
                    controller={() => {
                        SelectPlan({
                            age,
                            description,
                            name,
                            price: parseFloat(UpdatePrice.toString())
                        });
                    }}
                />
            </div>
        </CardComponent>
    );
};

export default PlanItem;
