import NavBar from './NavBar';
/* import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'; */

function Header() {
    return (
        <>
            <header id="main-header">
                <div className="container">
                    <NavBar />
                </div>
            </header>
        </>
    );
}

export default Header;
