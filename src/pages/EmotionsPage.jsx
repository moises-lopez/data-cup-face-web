import React, { useState } from "react";
import { Button } from "@material-ui/core";
import EmotionsTab from "../components/EmotionsTab";
import EmotionVerifier from "../components/EmotionVerifier";
import PersonIdentifier from "../components/PersonIdentifier";

const { getFrameFromWebcam } = require("../functions/webcamHelper");
const {
  getFaceInfoFromFrame,
} = require("../functions/faceRecognitionEmotionsHelper");

const EmotionsPage = () => {
  const [faceInfoFromFrame, setFaceInfoFromFrame] = useState({});
  const handleButtonCallApi = async () => {
    const frameFromWebcam = await getFrameFromWebcam();

    const myFaceInfoFromFrame = await getFaceInfoFromFrame(frameFromWebcam);

    // const myFaceInfoForPersonIdentifier = await getFaceInfoForPersonIdentifier(
    //   frameFromWebcam
    // );

    if (myFaceInfoFromFrame.faceAttributes) {
      console.log(
        myFaceInfoFromFrame,
        Object.keys(myFaceInfoFromFrame),
        "Test Message"
      );
      setFaceInfoFromFrame(myFaceInfoFromFrame.faceAttributes);
    }
  };

  if (!faceInfoFromFrame) {
    return <div></div>;
  }

  return (
    <React.Fragment>
      <Button onClick={() => handleButtonCallApi()} color="primary">
        Analizar Cara
      </Button>
      <PersonIdentifier></PersonIdentifier>
      <EmotionsTab data={faceInfoFromFrame}></EmotionsTab>
      <EmotionVerifier faceInfoFromFrame={faceInfoFromFrame}></EmotionVerifier>
    </React.Fragment>
  );
};

export default EmotionsPage;
