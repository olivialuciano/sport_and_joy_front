import React from "react";
import "./Filter.css";

export const Filter = () => {
  return (
    <>
      <div class="filter-menu">
        <div class="filter-section">
          <h3>Deporte</h3>
          <label>
            <input type="checkbox" name="deporte" value="futbol" /> Fútbol
          </label>
          <label>
            <input type="checkbox" name="deporte" value="voley" /> Vóley
          </label>
          <label>
            <input type="checkbox" name="deporte" value="tenis" /> Tenis
          </label>
        </div>
        <div class="filter-section">
          <h3>Bar</h3>
          <label class="switch">
            <input type="checkbox" name="bar" value="si" />
            <span class="slider"></span>
          </label>
        </div>
        <div class="filter-section">
          <h3>Vestuario</h3>
          <label class="switch">
            <input type="checkbox" name="bar" value="si" />
            <span class="slider"></span>
          </label>
        </div>
        <div class="filter-section">
          <h3>Precio</h3>
          <input
            className="numinput"
            type="number"
            placeholder="Mín"
            name="precio-min"
          />
          {/* <p> - </p> */}
          <input
            className="numinput"
            type="number"
            placeholder="Máx"
            name="precio-max"
          />
        </div>
        <div class="filter-section">
          <h3>Distancia Máxima</h3>
          <input
            className="numinput"
            type="number"
            placeholder="Km"
            name="distancia"
          />
        </div>
        <button class="apply-button">Aplicar</button>
      </div>
    </>
  );
};
