import Header from './components/Header.js';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import Main from './components/Main.js';
import ItemListContainer from './components/ItemListContainer';

function App() {
    const nombre = 'Martin';
    const apellido = 'Grus';
    return (
        <>
            <Header />
            <ItemListContainer nombre={nombre} apellido={apellido} />
            <Main />
            <Footer />
        </>
    );
}

export default App;
