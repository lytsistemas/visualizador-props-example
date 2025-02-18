import React, { useState } from 'react'; // Importa React y el hook useState
import './Greeting.css'; // Importa el archivo de estilos CSS

const Greeting = ({ name, platform }) => {
  // Estado para contar los clics
  const [clickCount, setClickCount] = useState(0);

  // Función para manejar el clic en el botón
  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1); // Actualizamos el estado correctamente
  };

  return (
    <div className="greeting-container">
      {/* Muestra un saludo con el nombre del usuario */}
      <h1>Hola, {name}!</h1>
      {/* Muestra un mensaje de bienvenida con la plataforma */}
      <p>Te damos la bienvenida a {platform}.</p>
      {/* Muestra el número de veces que se ha hecho clic en el botón */}
      <p>
        Has hecho clic en el botón <strong>{clickCount}</strong> {clickCount === 1 ? 'vez' : 'veces'}.
      </p>
      {/* Botón que incrementa el contador de clics */}
      <button onClick={handleButtonClick} className="greeting-button">
        Haz clic aquí
      </button>
    </div>
  );
};

export default Greeting; // Exporta el componente Greeting como el componente por defecto

