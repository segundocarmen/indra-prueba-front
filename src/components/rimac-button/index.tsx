import { GetDesignSystem } from '../../common/designSystem';
import type { RimacButtonVariants } from './interface';
import './style.scss';

const RimacButton = ({
    variant = 'black',
    padding = 'lg',
    text,
    controller,
    isSubmit
}: RimacButtonVariants) => {
    return (
        <div className='rimacbutton'>
            <button
                onClick={controller}
                className={`rimacbutton_button`}
                style={GetDesignSystem([
                    `button.variant.${variant}`,
                    `button.padding.${padding}`
                ])}
                type={isSubmit ? 'submit' : 'button'}
            >
                {text}
            </button>
        </div>
    );
};

export default RimacButton;
