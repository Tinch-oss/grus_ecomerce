function Main(props) {
    let contador = 0;

    const handleClick = () => {
        console.log('click');
    };

    return (
        <>
            <main className="container">
                <p>Mi contador actual: {contador}</p>
                <button>AUMENTAR</button>
            </main>
            ;
        </>
    );
}

export default Main;
