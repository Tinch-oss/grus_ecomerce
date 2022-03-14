import { useState } from 'react';
import { useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

let productosIniciales = [
    {
        id: 1,
        marca: 'Xiomi',
        modelo: '1s',
        precio: 92999,
        Stock: 8,
    },
    {
        id: 2,
        marca: 'Philco',
        modelo: 'S90',
        precio: 59999,
        Stock: 4,
    },
    {
        id: 3,
        marca: 'SPX',
        modelo: 'M10',
        precio: 49999,
        Stock: 12,
    },
];

function ItemListContainer(greeting) {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales);
            }, 2000);
        });
        promesa
            .then((respuestaDeLaApi) => {
                setProductos(setProductos(respuestaDeLaApi));
            })
            .catch((errorDeLaApi) => {})
            .finally(() => {
                setLoading(false);
            });
    });

    return (
        <>
            <ul className="Container">
                <li>
                    <p className="greeting">
                        Hola me llamo {greeting.nombre} {greeting.apellido},{' '}
                        <span className="greeting__span">
                            sean bienvenidos!
                        </span>
                    </p>
                </li>
            </ul>
            <p>{loading ? 'Cargando....' : 'Ya tenes los productos'}</p>
            <ItemCount initial={0} stock={5} stockInicial={5} />
            <ItemList productosIniciales={productosIniciales} />
        </>
    );
}

export default ItemListContainer;
