function ItemListContainer(greeting) {
    return (
        <ul className="Container">
            <li>
                <p className="greeting">
                    Hola me llamo {greeting.nombre} {greeting.apellido},{' '}
                    <span className="greeting__span">sean bienvenidos!</span>
                </p>
            </li>
        </ul>
    );
}

export default ItemListContainer;
