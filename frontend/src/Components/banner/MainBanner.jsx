import "../../../src/styles.css";

function MainBanner() {

    return (
        <section className="main-banner section-container">
            <div className="content-wrapper content">
                <div className="container">
                    <h1 className="title">Bienvenid@s a EcoFinder!</h1>
                    <p className="subtitle">Deseas apoyar a la comunidad fomentando buenas practicas ambientales como el reciclaje? Nosotros te podemos ayudar con eso.</p>
                    <div>
                        <a className="button white ghost" href="/">Encuentra puntos de reciclaje aquí!</a>
                    </div>
                </div>
                <div className="container">
                    <img className="image"
                        src="https://th.bing.com/th/id/OIG4.UPpdgY9TcZsIWwzZ7osn?pid=ImgGn"
                        alt="Ferias de reciclaje en Argentina"
                    />
                </div>
            </div>
        </section>
    )
}

export default MainBanner;
