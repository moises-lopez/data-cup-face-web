import React, { useState, useEffect } from "react";
import {
  checkIfUserIsDoingEmotion,
  checkIfUserIsDoingHeadPose,
  isPropsEmpty,
  isPersonDoingCorrectGesture,
} from "../functions/emotionsHelper";

import PropsEmptyComponent from "../components/PropsEmptyComponent";
import GestureStatusComponent from "./GestureStatusComponent";

const PersonVerifier = ({ props }) => {
  let { faceInfoFromFrame, identifyInfo, buttonPressendOnce } = props;
  console.log("inside person", faceInfoFromFrame, identifyInfo);
  let counterInitialState = 3;
  //const [started, setStarted] = useState(false);
  let propsEmpty = false;
  let personIsDoingCorrectGesture = false;

  let [currentName, setCurrentName] = useState("");
  let gestureStatus = false;
  let [counterVerification, setCounterVerification] =
    useState(counterInitialState);
  const [verificatorStates, setVerificatorStates] = useState([
    "neutral",
    "happiness",
    "surprise",
    "left",
    "right",
    "up",
    "down",
  ]);

  useEffect(() => {
    propsEmpty = isPropsEmpty(faceInfoFromFrame, identifyInfo);
    console.log("AHORA NECESITA, ", counterInitialState);

    personIsDoingCorrectGesture = isPersonDoingCorrectGesture(
      faceInfoFromFrame,
      verificatorStates[counterVerification],
      propsEmpty,
      buttonPressendOnce
    );

    if (personIsDoingCorrectGesture && !propsEmpty && buttonPressendOnce) {
      console.log("menos menos");
      setCounterVerification(counterVerification - 1);
    }

    console.log("doing correct", personIsDoingCorrectGesture);
    console.log("is props empty", propsEmpty);
  }, [faceInfoFromFrame, identifyInfo, buttonPressendOnce]);

  return (
    <React.Fragment>
      <PropsEmptyComponent propsEmpty={propsEmpty} />
      <GestureStatusComponent
        props={{
          personIsDoingCorrectGesture: personIsDoingCorrectGesture,
          propsEmpty: propsEmpty,
          buttonPressendOnce: buttonPressendOnce,
        }}
      />
      Haz lo siguiente con la cabeza: {verificatorStates[counterVerification]} y
      presiona el botón!
    </React.Fragment>
  );
  console.log(props);
};

export default PersonVerifier;
