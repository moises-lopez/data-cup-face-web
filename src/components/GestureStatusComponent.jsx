import React from "react";
const GestureStatusComponent = ({ props }) => {
  const { personIsDoingCorrectGesture, propsEmpty, buttonPressendOnce } = props;
  console.log(personIsDoingCorrectGesture, propsEmpty);
  if (!buttonPressendOnce) {
    return <div></div>;
  }
  if (personIsDoingCorrectGesture && !propsEmpty) {
    return <div></div>;
  }
  return (
    <div className="container_messages_red">
      No pudimos identificar la acción, inténtalo de nuevo
    </div>
  );
};

export default GestureStatusComponent;
