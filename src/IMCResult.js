// IMCResult.js
import React from 'react';

const IMCResult = ({ imc, classificacao }) => (
  <div>
    <h2>Resultado do IMC</h2>
    <p>IMC: {imc.toFixed(2)}</p>
    <p>Classificação: {classificacao}</p>
  </div>
);

export default IMCResult;