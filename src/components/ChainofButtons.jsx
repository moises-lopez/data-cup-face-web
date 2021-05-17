import React, { Component } from "react";

const ChainButtons = ({
  getPersonsInGroup,
  handleTraining,
  handleOlvidarCaras,
}) => {
  return (
    <div className="flex_training_buttons">
      <button className="face_button" onClick={() => getPersonsInGroup()}>
        Mostrar Personas
      </button>

      <button className="face_button" onClick={() => handleTraining()}>
        Entrena
      </button>

      <button className="face_button" onClick={() => handleOlvidarCaras()}>
        Olvidar Caras
      </button>
    </div>
  );
};

export default ChainButtons;
