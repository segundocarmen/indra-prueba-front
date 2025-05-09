import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const Page404 = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(-1);
        }, 2000);
    }, []);

    return (
        <div className='container'>
            <p>La página que estas buscando no existe</p>
        </div>
    );
};

export default Page404;
