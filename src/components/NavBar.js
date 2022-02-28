import CartWidget from './CartWidget';

function NavBar() {
    return (
        <>
            <CartWidget />
            <h2>ThorShoes</h2>
            <nav>
                <ul>
                    <li>
                        <a id="home" className="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a>Monopatines Eléctricos</a>
                    </li>
                    <li>
                        <a>Bicicletas Eléctricas</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
