import React, { useState } from "react";
import { Button } from "@material-ui/core";
import EmotionsTab from "../components/EmotionsTab";
import EmotionVerifier from "../components/EmotionVerifier";
import PersonVerifier from "../components/PersonVerifier";

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

  const handleButtonCallApi = async () => {
    setCirle(true);
    const frameFromWebcam = await getFrameFromWebcam();
    const myFaceInfoFromFrame = await getFaceInfoFromFrame(frameFromWebcam);

    const myIdentifyInfo = await identifyPerson(frameFromWebcam);
    console.log("HOLA?", myIdentifyInfo, myFaceInfoFromFrame);

    axios.post("/api/face/save", myFaceInfoFromFrame);

    // const myFaceInfoForPersonIdentifier = await getFaceInfoForPersonIdentifier(
    //   frameFromWebcam
    // );

    setFaceInfoFromFrame(myFaceInfoFromFrame);
    setIdentifyInfo(myIdentifyInfo);

    //setFaceInfoFromFrame(myFaceInfoFromFrame);

    // setIdentifyInfo(myIdentifyInfo);

    setCirle(false);
    setButtonPressedOnce(true);
  };

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
          faceInfoFromFrame: faceInfoFromFrame,
          identifyInfo: identifyInfo,
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
