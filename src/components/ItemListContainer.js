function ItemListContainer(greeting) {
    return (
        <ul className="Container">
            <li>
                <p className="greeting">
                    Hola me llamo {greeting.nombre} {greeting.apellido}, sean
                    bienvenidos!
                </p>
            </li>
        </ul>
    );
}

export default ItemListContainer;
