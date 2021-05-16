import React, { useState } from "react";
import { Button } from "@material-ui/core";
import EmotionsTab from "../components/EmotionsTab";
import EmotionVerifier from "../components/EmotionVerifier";
import PersonIdentifier from "../components/PersonIdentifier";
import SpinningCircle from '../components/SpinningCircle'
import axios from 'axios';

const { getFrameFromWebcam } = require("../functions/webcamHelper");
const {
  getFaceInfoFromFrame,
} = require("../functions/faceRecognitionEmotionsHelper");

const EmotionsPage = () => {
  const [faceInfoFromFrame, setFaceInfoFromFrame] = useState({});
  const [circle, setCirle] = useState(false);
  const handleButtonCallApi = async () => {
    setCirle(true)
    const frameFromWebcam = await getFrameFromWebcam();
    const myFaceInfoFromFrame = await getFaceInfoFromFrame(frameFromWebcam);
    axios.post('/api/face/save', myFaceInfoFromFrame)
    // const myFaceInfoForPersonIdentifier = await getFaceInfoForPersonIdentifier(
    //   frameFromWebcam
    // );

    if (myFaceInfoFromFrame.faceAttributes) {
      console.log(myFaceInfoFromFrame);
      setFaceInfoFromFrame(myFaceInfoFromFrame.faceAttributes);
    }
    setCirle(false)
  };

  if (!faceInfoFromFrame) {
    return <div></div>;
  }

  return (
    <React.Fragment>
      <div className='flex_button'>
      <button className='face_button' onClick={() => handleButtonCallApi()}>
        Analizar Cara
      </button>
      {circle ? <div><SpinningCircle/></div> : <div className='empty_div'/>}
      </div>
      <EmotionVerifier faceInfoFromFrame={faceInfoFromFrame}/>
      <EmotionsTab data={faceInfoFromFrame.emotion}/>
    </React.Fragment>
  );
};

export default EmotionsPage;
