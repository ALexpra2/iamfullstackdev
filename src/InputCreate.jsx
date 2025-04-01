import { useState } from 'react';

const InputCreate = () => {
  const [inputValue, setInputValue] = useState('');
  const urlApi = 'http://localhost:3000/create'; 
  
  
  //evita la carga por defecto de la pagina al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    //evita qeu se envie el formulario si el input esta vacio
    if (inputValue.trim() === '') return;

    //envia a traves de fetch los datos del input cargados en inputvalue mediante el useState
    try {
      const response = await fetch(urlApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: inputValue }), 
      });

      if (response.ok) {
        alert('Tarea creada correctamente');
        setInputValue('');
      } else {
        alert('Error al crear la tarea');
      }
    } catch (error) {
      console.error('Error al enviar tarea:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default InputCreate;
