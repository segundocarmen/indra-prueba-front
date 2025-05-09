import type { ReactNode } from 'react';
import './style.scss';

interface Props {
    children: ReactNode;
}

const CardComponent = ({ children }: Props) => {
    return <div className='card'>{children}</div>;
};

export default CardComponent;
