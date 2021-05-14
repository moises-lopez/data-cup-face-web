import React, { useState } from "react";
import { Button } from "@material-ui/core";
import EmotionsTab from "../components/EmotionsTab";

const { getFrameFromWebcam } = require("../functions/webcamHelper");
const {
  getFaceInfoFromFrame,
} = require("../functions/faceRecognitionEmotionsHelper");

const EmotionsPage = () => {
  const [faceInfoFromFrame, setFaceInfoFromFrame] = useState({});
  const handleButtonCallApi = async () => {
    const frameFromWebcam = await getFrameFromWebcam();

    const myFaceInfoFromFrame = await getFaceInfoFromFrame(frameFromWebcam);

    if (myFaceInfoFromFrame.faceAttributes) {
      console.log(myFaceInfoFromFrame);
      setFaceInfoFromFrame(myFaceInfoFromFrame.faceAttributes.emotion);
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
      <EmotionsTab data={faceInfoFromFrame}></EmotionsTab>
    </React.Fragment>
  );
};

export default EmotionsPage;
