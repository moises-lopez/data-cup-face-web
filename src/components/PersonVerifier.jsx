import React, { useState, useEffect } from "react";

import PropsEmptyComponent from "../components/PropsEmptyComponent";
import IdentityInfoComponent from "../components/IdentityInfoComponent";

import GestureStatusComponent from "./GestureStatusComponent";

const PersonVerifier = ({ props }) => {
  const [verificatorStates, setVerificatorStates] = useState([
    "neutral",
    "happiness",
    "surprise",
    "left",
    "right",
    "up",
    "down",
  ]);
  let {
    personIsDoingCorrectGesture,
    propsEmpty,
    counterVerification,
    buttonPressendOnce,
    identifyInfo,
    currentName,
  } = props;
  console.log("IDENEITIPERSON", identifyInfo);
  return (
    <React.Fragment>
      <IdentityInfoComponent
        props={{ currentName: currentName, identifyInfo: identifyInfo }}
      />
      <PropsEmptyComponent propsEmpty={propsEmpty} />
      <GestureStatusComponent
        props={{
          personIsDoingCorrectGesture: personIsDoingCorrectGesture,
          propsEmpty: propsEmpty,
          buttonPressendOnce: buttonPressendOnce,
        }}
      />
      <div className='container_messages'>
        Haz lo siguiente con la cabeza: {verificatorStates[counterVerification]} y
        presiona el botón!
      </div>
      <br/>
      <div className='container_messages'>
        Verificaciones restantes = {counterVerification}
      </div>
      
    </React.Fragment>
  );
  console.log(props);
};

export default PersonVerifier;
