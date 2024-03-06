import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Formulario from "./formulario";

function Form() {
  return (
    <Router>
      <div>
        <h3>Si quieres ser parte de esta iniciativa, llena los datos en el siguiente formulario:</h3>
        <nav>
          <ul>
            <li>
              <Link to="./formulario" className="button">Formulario</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Form;