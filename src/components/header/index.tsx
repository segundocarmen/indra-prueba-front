import './style.scss';
import LogoImg from '../../assets/Logo.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img
                    className='header_logo_img'
                    src={LogoImg}
                    alt='Header logo'
                />
            </div>
            <div className='header_info'>
                <span className='header_info_desktop'>
                    ¡Compra por este medio!
                </span>
                <div className='header_info_phone'>{`(01) 411 6001`} </div>
            </div>
        </div>
    );
};

export default Header;
