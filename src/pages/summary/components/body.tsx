import CardComponent from '../../../components/card';
import FamilyIcon from '../../../assets/gl_family-24x24.png';
import { useAppSelector } from '../../../store/hooks';
import type { UserInterface } from '../../../store/slices/user/user.interface';
import type { PlanInterface } from '../../../store/slices/plans/plan.interface';

const SummaryBody = () => {
    const { name, lastName, docType, doi, phone }: UserInterface =
        useAppSelector(state => state.user);
    const { selected }: PlanInterface = useAppSelector(state => state.plan);

    return (
        <div className='summarypage_detail'>
            <CardComponent>
                <div className='summary_card_head'>
                    <p className='title'>PRECIOS CALCULADOS PARA:</p>
                    <div className='summary_name'>
                        <img src={FamilyIcon} alt='Family icon' />
                        <p>{`${name} ${lastName}`}</p>
                    </div>
                </div>
                <div className='summary_card_body'>
                    <div className='summary_card_body_item'>
                        <p className='subtitle'>Responsable de pago</p>
                        <p>
                            {docType}: {doi}{' '}
                        </p>
                        <p>Celular: {phone} </p>
                    </div>
                    <div className='summary_card_body_item'>
                        <p className='subtitle'>Plan elegido</p>
                        <p>{selected?.name} </p>
                        <p>Costo del Plan: ${selected?.price} al mes</p>
                    </div>
                </div>
            </CardComponent>
        </div>
    );
};

export default SummaryBody;
