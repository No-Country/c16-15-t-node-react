import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Formulario from "./Formulario";

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
      <Routes>
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </div>
  );
}

export default Form;
