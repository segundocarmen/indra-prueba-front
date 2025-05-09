import './style.scss';
import LogoFooter from '../../assets/Vector.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_logo'>
                <img
                    className='footer_logo_img'
                    src={LogoFooter}
                    alt='Footer logo'
                />
            </div>
            <div className='footer_info'>
                <p>© 2023 RIMAC Seguros y Reaseguros.</p>
            </div>
        </div>
    );
};

export default Footer;
