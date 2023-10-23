import React, { useState } from "react";
import { FieldCard } from "../FieldCard/FieldCard";

export const FieldDetail = ({
  name,
  location,
  image,
  description,
  sport,
  lockerRoom,
  bar,
  price,
}) => {
  // const [fieldName, setFieldName] = useState(name);
  // el owner o admin debe poder editar cancha, puede ser que el boton editar haga que se convierta en inputs el html.

  return (
    <FieldCard>
      <img src={image} />
      <h2>{name}</h2>
      <h3>{location}</h3>
      <p>{description}</p>
      <p>{sport}</p>
      <p>{lockerRoom}</p>
      <p>{bar}</p>
      <p>{price}</p>
    </FieldCard>
  );
};
