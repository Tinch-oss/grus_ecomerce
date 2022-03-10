function Item(productosIniciales) {
    return (
        <>
            <p>ID: {productosIniciales.id}</p>
            <p>Marca: {productosIniciales.marca}</p>
            <p>Modelo: {productosIniciales.modelo}</p>
            <p>Precio: {productosIniciales.precio}</p>
            <p>Stock: {productosIniciales.stock}</p>
        </>
    );
}

export default Item;
