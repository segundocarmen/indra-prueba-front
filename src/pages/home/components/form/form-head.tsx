/* eslint-disable @typescript-eslint/no-explicit-any */
import useCheckMobileScreen from '../../../../hooks/useIsMobile';
import HomeBanner from '../banner/HomeBanner';
import TagPromo from '../../../../assets/tag-promo.png';

const FormHead = () => {
    const isMobile = useCheckMobileScreen();

    return (
        <div className='homeform_wrapper_head'>
            <div className='homeform_wrapper_head_title'>
                <img src={TagPromo} alt='Tag promo' />
                <h1>Creado para ti y tu familia</h1>
            </div>
            {isMobile ? (
                <div className='homeform_wrapper_head_banner'>
                    <HomeBanner />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default FormHead;
