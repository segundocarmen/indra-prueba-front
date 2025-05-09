import { useAppSelector } from '../../../../store/hooks';
import type { UserInterface } from '../../../../store/slices/user/user.interface';
import PlanHeader from './head';
import PlanSelector from './selector';
import './style.scss';

const Contractor = () => {
    const { name }: UserInterface = useAppSelector(state => state.user);
    return (
        <div className='planpage_contractor'>
            <PlanHeader name={name} />
            <PlanSelector />
        </div>
    );
};

export default Contractor;
