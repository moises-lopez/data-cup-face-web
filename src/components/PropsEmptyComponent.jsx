import React from "react";
const PropsEmptyComponent = ({ propsEmpty }) => {
  if (!propsEmpty) {
    return <div></div>;
  }
  return <div>Ocurrió un error identificando, inténtalo de nuevo</div>;
};

export default PropsEmptyComponent;
