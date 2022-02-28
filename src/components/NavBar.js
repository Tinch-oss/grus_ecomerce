import CartWidget from './CardWidget';

/* import CardWidget from './CardWidget';
 */
function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a>Link1</a>
                    </li>
                    <li>
                        <a>Link2</a>
                    </li>
                    <li>
                        <a>Link3</a>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </>
    );
}

export default NavBar;
