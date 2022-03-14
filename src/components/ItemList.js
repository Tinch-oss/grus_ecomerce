import Item from './Item';

function ItemList({ productosIniciales }) {
    return (
        <>
            <ul>
                {productosIniciales.map((producto, indice) => {
                    return (
                        <li key={indice}>
                            <Item
                                id={producto.id}
                                marca={producto.marca}
                                modelo={producto.modelo}
                                stock={producto.stock}
                                precio={producto.precio}
                            />
                        </li>
                    );
                })}
            </ul>

            {/*  {<Item productosIniciales={productosIniciales} />} */}
        </>
    );
}

export default ItemList;
