// App.js
import React, { useState } from 'react';
import IMCForm from './IMCForm';
import IMCResult from './IMCResult';


const App = () => {
  const [resultado, setResultado] = useState(null);

  const calcularIMC = ({ altura, peso }) => {
    const imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
      classificacao = 'Abaixo do Peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso Normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade Grau 1';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade Grau 2';
    } else {
      classificacao = 'Obesidade Grau 3';
    }

    setResultado({ imc, classificacao });
  };

  return (
    <div>
      <IMCForm onCalculate={calcularIMC} />
      {resultado && <IMCResult {...resultado} />}
    </div>
  );
};

export default App;
