import ForMyIcon from '../assets/IcProtectionLight.png';
import ForOtherIcon from '../assets/IcAddUserLight.png';

export interface ContractorSelector {
    icon: string;
    title: string;
    description: string;
}

export interface DoiInterface {
    id: string;
    value: string;
}

export const DOI_COLLECTION: DoiInterface[] = [
    { id: 'DNI', value: 'DNI' },
    { id: 'RUC', value: 'RUC' },
    { id: 'CEX', value: 'CEX' }
];

export const NavigationList: string[] = ['Planes y coberturas', 'Resumen'];

export const ContractorSelector: ContractorSelector[] = [
    {
        icon: ForMyIcon,
        title: 'Para mí',
        description:
            'Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
    },
    {
        icon: ForOtherIcon,
        title: 'Para alguien más',
        description:
            'Realiza una cotización para uno de tus familiares o cualquier persona.'
    }
];
