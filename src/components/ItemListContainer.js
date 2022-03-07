import ItemCount from './ItemCount';

function ItemListContainer(greeting) {
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
            <ItemCount initial={0} stock={5} />
        </>
    );
}

export default ItemListContainer;
