import type { ReactNode } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface DetailValidations {
    state: boolean;
    message: string;
}

interface DetailValidationsNumber {
    length: number;
    state: boolean;
    message: string;
}

export interface Validations {
    type: 'string' | 'number' | 'array';
    required: DetailValidations;
    min?: DetailValidationsNumber;
    max?: DetailValidationsNumber;
    email?: DetailValidations;
}

interface ElementsList {
    id: string;
    value: string;
}

export interface FormControlInterface {
    type:
        | 'text'
        | 'number'
        | 'date'
        | 'email'
        | 'password'
        | 'select'
        | 'checkbox'
        | 'radio';
    id: string;
    controller?: any;
    values?: any;
    fieldPlaceholder?: string;
    group?: boolean;
    groupItem?: number;
    label?: string;
    validations?: Validations;
    elements?: ElementsList[];
}

interface Button {
    component: ReactNode;
    controller: any;
}

export interface FormStructureInterface {
    initialValues: any;
    formStructure: FormControlInterface[];
    sendButton: Button;
}

export interface FormikInterface {
    handleSubmit?: any;
    handleChange?: any;
    handleBlur?: any;
    values?: any;
    errors?: any;
    resetForm?: any;
    isSubmitting?: any;
}
