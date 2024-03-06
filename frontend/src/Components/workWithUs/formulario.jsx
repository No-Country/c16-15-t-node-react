import React from 'react';
import { useForm } from 'react-hook-form';
import "../../../src/styles.css";

function Formulario() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
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
            <input {...register("dirección")} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Fecha:
            <input {...register("fecha")} />
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
        <button type="submit" className='button'>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
