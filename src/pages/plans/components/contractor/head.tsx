interface props {
    name: string;
}

const PlanHeader = ({ name }: props) => {
    return (
        <div className='planhead'>
            <h1>{name} ¿para quién deseas cotizar? </h1>
            <p>Selecciona la opción que se ajuste más a tus necesidades</p>
        </div>
    );
};

export default PlanHeader;
