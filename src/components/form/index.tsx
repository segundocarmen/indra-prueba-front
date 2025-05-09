/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
    FormControlInterface,
    FormikInterface,
    FormStructureInterface
} from './form-control-interface';
import { Form, Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import ControlComponent from './control';
import { object, string, number, array } from 'yup';
let schema = object();

const FormComponent = ({
    formStructure,
    initialValues,
    sendButton
}: FormStructureInterface) => {
    const ref: any = useRef(null);
    const [ready, setReady] = useState<boolean>(false);
    const [form, setForm] = useState<FormikInterface>({});
    const [newFormStructure, setNewFormStructure] = useState<
        FormControlInterface[]
    >([]);

    useEffect(() => {
        setForm(initialValues);
    }, [initialValues]);

    useEffect(() => {
        for (let i = 0; i < formStructure.length; i++) {
            setNewFormStructure(formStructure);
        }
    }, [formStructure]);

    useEffect(() => {
        if (newFormStructure.length > 0) {
            for (let i = 0; i < newFormStructure.length; i++) {
                const item = newFormStructure[i];
                if (item.validations) {
                    const {
                        validations: { type, required, min, max, email }
                    } = item;
                    const obj: any = {};
                    if (type === 'string') {
                        obj[item.id] = string().required(required.message);
                        min &&
                            (obj[item.id] = obj[item.id].min(
                                min.length,
                                min.message
                            ));
                        max &&
                            (obj[item.id] = obj[item.id].max(
                                max.length,
                                max.message
                            ));
                        email &&
                            (obj[item.id] = obj[item.id].email(email.message));
                    } else if (type === 'array') {
                        obj[item.id] = array().required(required.message);
                    } else {
                        obj[item.id] = number().required(required.message);
                    }
                    schema = object({ ...schema.fields, ...obj });
                }
            }
            setReady(true);
        }
    }, [newFormStructure]);

    const Submit = (dataForm: any) => {
        sendButton.controller(dataForm);
    };

    return ready ? (
        <div className='formbuilder'>
            <Formik
                innerRef={ref}
                validationSchema={schema}
                onSubmit={(dataForm: any) => {
                    Submit(dataForm);
                }}
                initialValues={form}
                validateOnChange={false}
                validateOnBlur={false}
                enableReinitialize={true}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors
                }: FormikInterface) => (
                    //  eslint-disable-next-line no-sequences

                    <Form className='formbuilder__form' onSubmit={handleSubmit}>
                        {newFormStructure.map((item: FormControlInterface) => {
                            const { id, type, label, fieldPlaceholder, group } =
                                item;
                            const props = {
                                values,
                                controller: handleChange,
                                id,
                                type,
                                label,
                                fieldPlaceholder,
                                elements: item?.elements
                            };
                            return (
                                <div
                                    className={`form-group ${group ? 'group' : ''}`}
                                    key={item.id}
                                >
                                    <div>
                                        <ControlComponent {...props} />
                                        <span className='invalid-feedback'>
                                            {errors[item.id]}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                        {sendButton.component}
                    </Form>
                )}
            </Formik>
        </div>
    ) : (
        <>
            <span>{/* rdy formik {ready.toString()} */} </span>
        </>
    );
};

export default FormComponent;
