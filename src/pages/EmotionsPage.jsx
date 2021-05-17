import React, { useState } from "react";
import { Button } from "@material-ui/core";
import EmotionsTab from "../components/EmotionsTab";
import EmotionVerifier from "../components/EmotionVerifier";
import PersonVerifier from "../components/PersonVerifier";
import {
  isPropsEmpty,
  isPersonDoingCorrectGesture,
  isSamePersonFunction,
} from "../functions/emotionsHelper";
import { identifyPerson } from "../functions/faceRecognitionIdentifierHelper";

import SpinningCircle from "../components/SpinningCircle";
import axios from "axios";

const { getFrameFromWebcam } = require("../functions/webcamHelper");
const {
  getFaceInfoFromFrame,
} = require("../functions/faceRecognitionEmotionsHelper");

const EmotionsPage = () => {
  const [faceInfoFromFrame, setFaceInfoFromFrame] = useState(0);
  const [circle, setCirle] = useState(false);
  const [identifyInfo, setIdentifyInfo] = useState(0);
  const [buttonPressendOnce, setButtonPressedOnce] = useState(false);
  const [propsEmpty, setPropsEmpty] = useState(false);
  const [personIsDoingCorrectGesture, setPersonIsDoingCorrectGesture] =
    useState(false);
  const [currentName, setCurrentName] = useState("");
  const [isSamePerson, setIsSamePerson] = useState(true);
  const [verificatorStates, setVerificatorStates] = useState([
    "neutral",
    "happiness",
    "surprise",
    "left",
    "right",
    "up",
    "down",
  ]);

  let counterInitialState = 3;

  let [counterVerification, setCounterVerification] =
    useState(counterInitialState);

  const handleButtonCallApi = async () => {
    setCirle(true);
    setIsSamePerson(true);
    setButtonPressedOnce(true);

    const frameFromWebcam = await getFrameFromWebcam();
    const myFaceInfoFromFrame = await getFaceInfoFromFrame(frameFromWebcam);

    const myIdentifyInfo = await identifyPerson(frameFromWebcam);
    if (counterVerification === 3) {
      setCurrentName("");
    }

    axios.post("/api/face/save", myFaceInfoFromFrame);

    setFaceInfoFromFrame(myFaceInfoFromFrame);
    setIdentifyInfo(myIdentifyInfo);
    console.log("IDENTITY", myIdentifyInfo);
    const myPropsEmpty = isPropsEmpty(myFaceInfoFromFrame, myIdentifyInfo);
    setPropsEmpty(myPropsEmpty);

    const isSamePerson = isSamePersonFunction(
      currentName,
      myIdentifyInfo,
      myPropsEmpty,
      myFaceInfoFromFrame
    );

    if (!isSamePerson) {
      setIsSamePerson(false);

      return;
    }
    if (!isPropsEmpty) {
      setCurrentName(identifyInfo.name);
    }
    const myPersonIsDoingCorrectGesture = isPersonDoingCorrectGesture(
      myFaceInfoFromFrame,
      verificatorStates[counterVerification],
      myPropsEmpty,
      true
    );

    setPersonIsDoingCorrectGesture(myPersonIsDoingCorrectGesture);

    if (myPersonIsDoingCorrectGesture && !myPropsEmpty) {
      setCounterVerification(counterVerification - 1);
    }
    console.log("IDENEITIPEasdRSON", identifyInfo);

    setCirle(false);
  };

  if (counterVerification === 0) {
    setTimeout(function () {
      setCounterVerification(3);
      setCurrentName("");
    }, 2000);
    return <div className='container_messages_green'>Aprobado!</div>;
  }

  if (!isSamePerson) {
    setTimeout(function () {
      setIsSamePerson(true);
      setCounterVerification(3);
      setCurrentName("");
    }, 2000);
    return <div>Hubo Cambio de Persona!</div>;
  }

  return (
    <React.Fragment>
      <div className="flex_button">
        <button className="face_button" onClick={() => handleButtonCallApi()}>
          Analizar Cara
        </button>
        {circle ? (
          <div>
            <SpinningCircle />
          </div>
        ) : (
          <div className="empty_div" />
        )}
      </div>
      <PersonVerifier
        props={{
          currentName: currentName,
          identifyInfo: identifyInfo,
          personIsDoingCorrectGesture: personIsDoingCorrectGesture,
          propsEmpty: propsEmpty,
          counterVerification: counterVerification,
          buttonPressendOnce: buttonPressendOnce,
        }}
      />
      <EmotionsTab
        data={faceInfoFromFrame && faceInfoFromFrame.faceAttributes}
      />
    </React.Fragment>
  );
};

export default EmotionsPage;
