import { useState } from 'react';

function ItemCount(props) {
    const [contador, setContador] = useState(props.initial);

    const handleClick = () => {
        setContador(contador + 1);
    };

    const restar = () => {
        setContador(contador - 1);
    };

    const resetear = () => {
        setContador(0);
    };

    const miOnAdd = () => {};

    return (
        <>
            <main className="container">
                <p>Mi contador actual: {contador}</p>
                <button onClick={handleClick}>AUMENTAR</button>
                <button onClick={restar}>RESTAR</button>
                <button onClick={resetear}>RESETEAR</button>
                <button onClick={miOnAdd}>Agregar</button>
            </main>
        </>
    );
}

export default ItemCount;
