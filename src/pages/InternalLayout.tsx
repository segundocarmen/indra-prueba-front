import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Navigation from '../components/navigation';

const InternalLayout = () => {
    return (
        <>
            <Header />
            <Navigation />
            <div className='page'>
                <Outlet />
            </div>
        </>
    );
};

export default InternalLayout;
