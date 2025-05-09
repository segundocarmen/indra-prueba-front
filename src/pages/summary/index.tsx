import { useDispatch } from 'react-redux';
import { setApplicationStep } from '../../store/slices/application';
import SummaryHeader from './components/head';
import SummaryBody from './components/body';
import './style.scss';

const Summary = () => {
    const dispatch = useDispatch();
    dispatch(setApplicationStep(2));

    return (
        <div className='summarypage'>
            <SummaryHeader />
            <SummaryBody />
        </div>
    );
};

export default Summary;
