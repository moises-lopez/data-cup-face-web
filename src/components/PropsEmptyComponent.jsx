import React from "react";
const PropsEmptyComponent = ({ propsEmpty }) => {
  if (!propsEmpty) {
    return <div></div>;
  }
  return <div className='container_messages_red'>Ocurrió un error identificando, inténtalo de nuevo</div>;
};

export default PropsEmptyComponent;
