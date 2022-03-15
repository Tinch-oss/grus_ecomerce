import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

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

function ItemDetailContainer() {
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
    }, []);

    return (
        <>
            <p>{loading ? 'Cargando....' : 'Ya tenes los productos'}</p>
            <ItemDetail productos={productos} />
        </>
    );
}

export default ItemDetailContainer;
