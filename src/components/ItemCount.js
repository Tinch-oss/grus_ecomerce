import { useState } from 'react';

function ItemCount(props) {
    const [contador, setContador] = useState(props.initial);
    const [stock, setStock] = useState(props.stockInicial);
    const mostrar = document.querySelector('.mostrarCompra');

    const sumar = () => {
        if (contador < props.stock) {
            setContador(contador + 1);
            setStock(stock - 1);
        }
    };

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
            setStock(stock + 1);
        }
    };

    const miOnAdd = () => {
        if (stock > 0) {
            mostrar.style.display = 'block';
        }
    };

    return (
        <>
            <main className="container">
                <div className="miniCarrito">
                    <p>Monopatín Xiomi 1s</p>
                    <div className="carrito">
                        <button className="simbol" onClick={sumar}>
                            +
                        </button>
                        <p className="compra">{contador}</p>
                        <button className="simbol" onClick={restar}>
                            -
                        </button>
                    </div>
                    <button className="agregar" onClick={miOnAdd}>
                        Agregar
                    </button>
                    <p className="mostrarCompra">
                        Agregaste al carrito: {contador} monopatines.
                    </p>
                </div>
            </main>
        </>
    );
}

export default ItemCount;
