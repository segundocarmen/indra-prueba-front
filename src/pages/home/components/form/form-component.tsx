/* eslint-disable @typescript-eslint/no-explicit-any */
import RimacButton from '../../../../components/rimac-button';
import {
    InitialValues,
    ValidationsShema,
    type FormInterface
} from './formUtils';
import { Field, Form, Formik } from 'formik';

const FormComponent = ({ OnSubmit }: FormInterface) => {
    return (
        <Formik
            validationSchema={ValidationsShema}
            initialValues={InitialValues}
            onSubmit={(dataForm: any) => {
                OnSubmit(dataForm);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <p> {JSON.stringify(errors)} </p>
                    <div className='homeform_wrapper_form'>
                        <div className='form-group dflex first-group'>
                            <div>
                                <Field
                                    as='select'
                                    className='form-control'
                                    id={'docType'}
                                    name={'docType'}
                                >
                                    <option value=''>Documento</option>
                                    <option value='DNI'>DNI</option>
                                    <option value='RUC'>RUC</option>
                                </Field>
                                {errors.docType && touched.docType ? (
                                    <span className='invalid-feedback'>
                                        {`${errors.docType}`}
                                    </span>
                                ) : null}
                            </div>
                            <div>
                                <Field
                                    type='number'
                                    id={'doi'}
                                    name={'doi'}
                                    className='form-control'
                                    placeholder='Nro. de documento'
                                />
                                {errors.doi && touched.doi ? (
                                    <span className='invalid-feedback'>
                                        {`${errors.doi}`}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                        <div className='form-group'>
                            <div>
                                <Field
                                    type='number'
                                    id={'phone'}
                                    name={'phone'}
                                    className='form-control'
                                    placeholder='Teléfono'
                                />
                                {errors.phone && touched.phone ? (
                                    <span className='invalid-feedback'>
                                        {`${errors.phone}`}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                        <div className='form-group'>
                            <div>
                                <Field
                                    type='checkbox'
                                    id={'privacyPolicy'}
                                    name={'privacyPolicy'}
                                    className='form-control-check'
                                    value='Three'
                                />
                                <label
                                    htmlFor='privacyPolicy'
                                    className='form-label'
                                >
                                    Acepto la política de privacidad
                                </label>
                                {errors.privacyPolicy ? (
                                    <span className='invalid-feedback'>
                                        {`${errors.privacyPolicy}`}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                        <div className='form-group'>
                            <div>
                                <Field
                                    type='checkbox'
                                    id={'comunicationPolicy'}
                                    name={'comunicationPolicy'}
                                    className='form-control-check'
                                    value='Three'
                                />
                                <label
                                    htmlFor='comunicationPolicy'
                                    className='form-label'
                                >
                                    Acepto la Política Comunicaciones
                                    Comerciales
                                </label>
                                {errors.comunicationPolicy ? (
                                    <span className='invalid-feedback'>
                                        {`${errors.comunicationPolicy}`}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                        <div className='form-group'>
                            <a href='#'>Aplican Términos y Condiciones.</a>
                        </div>
                        <RimacButton
                            text='Cotiza aquí'
                            isSubmit={true}
                            controller={() => {}}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FormComponent;
