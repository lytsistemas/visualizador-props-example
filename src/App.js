import React from 'react';
import Greeting from './Greeting'; 

const App = () => {
  return (
    <div>
      {/* Renderiza el componente Greeting y le pasa las props name y platform */}
      <Greeting name="Usuario" platform="React" />
    </div>
  );
};

export default App; // Exporta el componente App como el componente por defecto


