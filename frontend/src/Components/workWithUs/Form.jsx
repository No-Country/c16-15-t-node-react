import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Routes, Route, Link } from "react-router-dom";
import "../../../src/styles.css";
import axios from "axios";

function Form() {
  const { register, handleSubmit } = useForm();
  const [formularioVisible, setFormularioVisible] = useState(false);

  const toggleFormulario = () => {
    setFormularioVisible(!formularioVisible);
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.post("/api/formulario", data);
      alert("Formulario enviado con éxito");
    } catch (error) {
      alert("Error al enviar el formulario");
    }
  };

  return (
    <div>
      <h3>
        Si quieres ser parte de esta iniciativa, llena los datos en el
        siguiente formulario:
      </h3>
      <button className="button" onClick={toggleFormulario}>
        {formularioVisible ? 'Cerrar formulario' : 'Abrir formulario'}
      </button>
      {formularioVisible && (
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>
                Nombre:
                <input {...register("nombre")} />
              </label>
            </div>
            <div className="form-group">
              <label>
                Dirección:
                <input {...register("direccion")} />
              </label>
            </div>
            <div className="form-group">
              <label>
                Fecha:
                <input type="date" {...register("fecha")} />
              </label>
            </div>
            <div className="form-group">
              <label>
                Latitud:
                <input type="number" step="any" {...register("latitud")} />
              </label>
            </div>
            <div className="form-group">
              <label>
                Longitud:
                <input type="number" step="any" {...register("longitud")} />
              </label>
            </div>
            <div className="form-group">
              <button type="submit" className="button">
                Enviar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Form;
