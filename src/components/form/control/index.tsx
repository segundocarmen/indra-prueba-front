/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field } from 'formik';
import type { FormControlInterface } from '../form-control-interface';

const RenderControl = (props: FormControlInterface) => {
    const { type, label, fieldPlaceholder, id, controller, values, elements } =
        props;

    switch (type) {
        case 'select':
            return (
                <select
                    onChange={e => {
                        controller(e);
                    }}
                    id={id}
                    name={id}
                    className='form-control'
                    value={values[id]}
                >
                    <option value=''>{fieldPlaceholder}</option>
                    {elements?.map((element: any) => {
                        return (
                            <option key={element.id} value={element.id}>
                                {element.value}
                            </option>
                        );
                    })}
                </select>
            );
        case 'checkbox':
            return (
                <>
                    {/* <input
                        id={id}
                        name={id}
                        className='form-control-check'
                        type={type}
                        value={id}
                        onChange={(e: any) => {
                            console.log(e.target.value);
                            controller(e.target.value);
                        }}
                    /> */}
                    <Field
                        type='checkbox'
                        id={id}
                        name={id}
                        className='form-control-check'
                        value='Three'
                    />
                    <label htmlFor={id} className='form-label'>
                        {label}
                    </label>
                </>
            );
        default:
            return (
                <input
                    id={id}
                    name={id}
                    className='form-control'
                    type={type}
                    placeholder={fieldPlaceholder}
                    onChange={(e: any) => {
                        controller(e);
                    }}
                />
            );
    }
};

const ControlComponent = ({
    type,
    label,
    controller,
    fieldPlaceholder,
    id,
    values,
    elements
}: FormControlInterface) => {
    return (
        <>
            {RenderControl({
                type,
                label,
                fieldPlaceholder,
                id,
                controller,
                values,
                elements
            })}
        </>
    );
};

export default ControlComponent;
