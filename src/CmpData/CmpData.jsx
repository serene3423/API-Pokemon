import React from 'react';
import './CmpData.css';

const CmpData = ({ data }) => {
  console.log(data);
  const { name, race, ki, description } = data;

  return (
    <div className="cmp-data-container">
      <h2>{name || "Desconocido"}</h2>
      <table>
        <tbody>
          <tr>
            <td>Raza:</td>
            <td>{race || "No disponible"}</td>
          </tr>
          <tr>
            <td>Ki:</td>
            <td>{ki || "No disponible"}</td>
          </tr>
          <tr>
            <td>Descripción:</td>
            <td>{description || "Sin descripción"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CmpData;
