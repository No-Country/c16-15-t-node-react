import "../../../src/styles.css";
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <>
      <span id="open-menu-button" className="jam jam-menu"></span>
      <nav id="main-menu" className="main-menu">
        <span id="close-menu-button" className="jam jam-close"></span>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/nosotros">¿Quiénes somos?</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default MainMenu;
