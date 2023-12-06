import React, { useState } from "react";
import "./Filter.css";

export const Filter = ({onApplyFilters}) => {
  const [deporte, setDeporte] = useState("");
  const [bar, setBar] = useState(false);
  const [vestuario, setVestuario] = useState(false);
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [distanciaMaxima, setDistanciaMaxima] = useState("");


  const handleDeporteChange = (event) => {
    // Mapea los valores de los checkboxes a los valores numéricos correspondientes
    const valueMap = {
      futbol: 0,
      voley: 1,
      tenis: 2,
    };
  
    setDeporte(valueMap[event.target.value]);
  };
  
  const handleBarChange = (event) => {
    setBar(event.target.checked);
  };

  const handleVestuarioChange = (event) => {
    setVestuario(event.target.checked);
  };

  const handlePrecioMinChange = (event) => {
    setPrecioMin(event.target.value);
  };

  const handlePrecioMaxChange = (event) => {
    setPrecioMax(event.target.value);
  };

  // const handleDistanciaMaximaChange = (event) => {
  //   setDistanciaMaxima(event.target.value);
  // };

  const handleApplyFilters = () => {
    // Llama a la función proporcionada por el componente principal con los filtros actuales
    onApplyFilters(deporte, bar, vestuario, precioMin, precioMax);
  };

  return (
    <>
      <div className="filter-menu">
        <div className="filter-section">
          <h3>Deporte</h3>
          <label>
            <input type="checkbox" name="deporte" value="futbol" onChange={handleDeporteChange}/> Fútbol
          </label>
          <label>
            <input type="checkbox" name="deporte" value="voley" onChange={handleDeporteChange} /> Vóley
          </label>
          <label>
            <input type="checkbox" name="deporte" value="tenis" onChange={handleDeporteChange} /> Tenis
          </label>
        </div>
        <div className="filter-section">
          <h3>Bar</h3>
          <label class="switch">
            <input type="checkbox" name="bar" checked={bar} onChange={handleBarChange} />
            <span class="slider"></span>
          </label>
        </div>
        <div className="filter-section">
          <h3>Vestuario</h3>
          <label class="switch">
            <input type="checkbox" name="vestuario" checked={vestuario} onChange={handleVestuarioChange} />
            <span class="slider"></span>
          </label>
        </div>
        <div className="filter-section">
          <h3>Precio</h3>
          <input
            className="numinput"
            type="number"
            placeholder="Mín"
            name="precio-min"
            value={precioMin}
            onChange={handlePrecioMinChange}
          />
          <input
            className="numinput"
            type="number"
            placeholder="Máx"
            name="precio-max"
            value={precioMax}
            onChange={handlePrecioMaxChange}
          />
        </div>
        {/* <div className="filter-section">
          <h3>Distancia Máxima</h3>
          <input
            className="numinput"
            type="number"
            placeholder="Km"
            name="distancia"
            value={distanciaMaxima}
            onChange={handleDistanciaMaximaChange}
          />
        </div> */}
        <button class="apply-button" onClick={handleApplyFilters} >Aplicar</button>
      </div>
    </>
  );
};
