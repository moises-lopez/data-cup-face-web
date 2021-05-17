import React from "react";

const IdentityInfoComponent = ({ props }) => {
  const { currentName, identifyInfo } = props;

  console.log("identifyInfo", identifyInfo);
  if (identifyInfo == 0) {
    return <div></div>;
  }
  if (identifyInfo == -1) {
    return (
      <div>
        No te reconozco, prueba mejorar la luz de la foto o registrarte en el
        training model{" "}
      </div>
    );
  }
  return <div>HOLA {currentName}</div>;
};

export default IdentityInfoComponent;
