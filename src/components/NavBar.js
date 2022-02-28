import CartWidget from './CardWidget';

/* import CardWidget from './CardWidget';
 */
function NavBar() {
    return (
        <>
            <CartWidget />
            <h2>ThorShoes</h2>
            <nav>
                <ul>
                    <li>
                        <a id="home">Home</a>
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
