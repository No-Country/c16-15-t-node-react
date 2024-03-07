import "../../../src/styles.css";


function MainMenu() {
    return (
        <>
            <span id="open-menu-button" className="jam jam-menu"></span>
            <nav id="main-menu" className="main-menu">
                <span id="close-menu-button" className="jam jam-close"></span>
                <ul>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/">¿Quiénes somos?</a>
                    </li>
                    <li>
                        <a href="/">Proyectos</a>
                    </li>
                    <li>
                        <a href="/">Contacto</a>
                    </li>
                </ul>
            </nav>
        </>
     )
}
export default MainMenu;
