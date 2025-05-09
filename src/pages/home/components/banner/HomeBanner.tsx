import HomeImage from '../../../../assets/Frame_1000004298.png';
import './style.scss';

const HomeBanner = () => {
    return (
        <div className='homebanner'>
            <img
                className='homebanner_image'
                src={HomeImage}
                alt='Home image'
            />
        </div>
    );
};

export default HomeBanner;
