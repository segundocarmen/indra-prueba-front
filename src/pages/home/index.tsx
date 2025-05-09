import './home.scss';
import HomeBanner from './components/banner/HomeBanner';
import HomeForm from './components/form/HomeForm';
import useCheckMobileScreen from '../../hooks/useIsMobile';
import { useDispatch } from 'react-redux';
import { setApplicationStep } from '../../store/slices/application';

const Home = () => {
    const isMobile = useCheckMobileScreen();
    const dispatch = useDispatch();
    dispatch(setApplicationStep(0));

    return (
        <div className='homepage'>
            {!isMobile ? <HomeBanner /> : <></>}
            <HomeForm />
        </div>
    );
};

export default Home;
