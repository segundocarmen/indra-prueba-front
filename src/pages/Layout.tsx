import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = () => {
    return (
        <>
            <Header />
            <div className='page'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
