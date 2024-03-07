import React from "react";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div>
      <h3>
        Si quieres ser parte de esta iniciativa, llena los datos en el siguiente
        formulario:
      </h3>
      <nav>
        <ul>
          <li>
            <Link to="./formulario" className="button">
              Formulario
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Form;
