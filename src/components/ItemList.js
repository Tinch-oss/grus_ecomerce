import Item from './Item';

function ItemList(productosIniciales) {
    return (
        <>
            <ul>
                {productosIniciales.map((producto, indice) => {
                    return <li>{productosIniciales.marca}</li>;
                })}
            </ul>

            <Item />
        </>
    );
}

export default ItemList;
