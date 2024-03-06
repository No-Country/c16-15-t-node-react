import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('/api/formulario', data);
      alert('Formulario enviado con éxito');
    } catch (error) {
      alert('Error al enviar el formulario');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {<Formulario />}
    </form>
  );
}

export default Formulario;
