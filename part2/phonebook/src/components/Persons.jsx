import React from "react";

export const Persons = ({ persons }) => {

  return persons.map(({ name, number, id }) => {
    return (
      <div key={id}>
        <p>
          nombre: {name} <span>{number}</span>
        </p>
      </div>
    );
  });
};
