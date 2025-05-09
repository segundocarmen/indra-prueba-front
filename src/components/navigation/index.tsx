import { NavigationList } from '../../common/constants';
import { useAppSelector } from '../../store/hooks';
import type { ApplicationInterface } from '../../store/slices/application/application.interface';
import './style.scss';

const Navigation = () => {
    const { step: stepStored }: ApplicationInterface = useAppSelector(
        state => state.application
    );
    return (
        <div className='navigation'>
            <div className='navigation_steps'>
                {NavigationList.map((step: string, index: number) => {
                    return (
                        <div
                            className={`navigation_steps_step ${stepStored === index + 1 ? 'active' : ''}`}
                            key={index}
                        >
                            <div className='number'> {index + 1} </div>
                            <div className='description'> {step} </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Navigation;
