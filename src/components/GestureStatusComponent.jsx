import React from "react";
const GestureStatusComponent = ({ props }) => {
  const { personIsDoingCorrectGesture, propsEmpty, buttonPressendOnce } = props;
  console.log(personIsDoingCorrectGesture, propsEmpty);
  if (!buttonPressendOnce) {
    console.log("no se debería mostrar porque no se ha iniciado ");
    return <div></div>;
  }
  if (personIsDoingCorrectGesture && !propsEmpty) {
    console.log("no se debería mostrar porque lo estás haciendo bien pendejo");
    return <div></div>;
  }
  return <div className='container_messages_red'>No pudimos identificar la acción, inténtalo de nuevo</div>;
};

export default GestureStatusComponent;
