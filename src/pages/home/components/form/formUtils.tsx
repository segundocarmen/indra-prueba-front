/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { array, number, object, string } from 'yup';

export const InitialValues = {
    docType: '',
    doi: '',
    phone: ''
};

export const ValidationsShema = object().shape({
    docType: string().required('Este campo es requerido'),
    doi: string()
        .min(8, 'Mínimo 8')
        .max(11, 'Máximo 11')
        .required('Este campo es requerido'),
    phone: number().min(7, 'Mínimo 7').required('Este campo es requerido'),
    privacyPolicy: array().required('Este campo es requerido'),
    comunicationPolicy: array().required('Este campo es requerido')
});

export interface FormInterface {
    OnSubmit: (data: any) => void;
}
