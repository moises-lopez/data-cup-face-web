import React, { useState, useEffect } from "react";
import {
  checkIfUserIsDoingEmotion,
  checkIfUserIsDoingHeadPose,
} from "../functions/emotionsHelper";

const EmotionVerifier = ({ props }) => {
  console.log(props);
  // let [identifyInfo, setIdentifyInfo] = useState();
  // let [faceInfoFromFrame, setFaceInfoFromFrame] = useState();

  // if (props) {
  //   if (props.identifyInfo) {
  //     const { identifyInfo } = props;
  //     setIdentifyInfo(identifyInfo);
  //   }
  // }

  // if (props) {
  //   if (props.faceInfoFromFrame) {
  //     const { faceInfoFromFrame } = props;
  //     setFaceInfoFromFrame(faceInfoFromFrame);
  //   }
  // }

  let { faceInfoFromFrame, identifyInfo } = props;

  const initialCurrentName =
    "No conozco tu nombre, regístrate en el apartado de train model!";
  const commonEmotions = ["neutral", "happiness", "surprise"];
  const commonHeadDirections = ["left", "right", "up", "down"];
  let [currentName, setCurrentName] = useState(initialCurrentName);
  let [counterVerification, setCounterVerification] = useState(3);
  const [verificatorStates, setVerificatorStates] = useState([
    "neutral",
    "happiness",
    "surprise",
    "left",
    "right",
    "up",
    "down",
  ]);

  console.log(faceInfoFromFrame);

  useEffect(() => {
    let myVerificatorStates = verificatorStates;
    myVerificatorStates = myVerificatorStates.sort(() => Math.random() - 0.5);
    setVerificatorStates(myVerificatorStates);
  }, []);

  if (faceInfoFromFrame == 0) {
    return <div>Presiona el botón para empezar el reconocimiento!</div>;
  }

  // if (identifyInfo) {
  //   console.log("HOLA", identifyInfo.name);
  //   setCurrentName(identifyInfo.name);
  // }
  console.log(identifyInfo, "Hola");
  if (counterVerification === 0) {
    setTimeout(function () {
      setCurrentName("");
      setCounterVerification(3);
    }, 5000);
    return <div className='container_messages_green'>Aprobado!</div>;
  }

  if (commonEmotions.includes(verificatorStates[counterVerification])) {
    const result = checkIfUserIsDoingEmotion(
      faceInfoFromFrame.emotion,
      verificatorStates[counterVerification]
    );
    if (result) {
      setCounterVerification(counterVerification - 1);
    } else {
      return (
        <div className='container_messages_red'>
          {identifyInfo && identifyInfo.name}
          No pudimos intentar la verificación, inténtalo de nuevo! <br></br> Haz
          lo siguiente para verificarte !:
          {verificatorStates[counterVerification]}
        </div>
      );
    }
  } else {
    const result = checkIfUserIsDoingHeadPose(
      faceInfoFromFrame.headPose,
      verificatorStates[counterVerification]
    );
    if (result) {
      setCounterVerification(counterVerification - 1);
    } else {
      return (
        <div>
          No pudimos intentar la verificación, inténtalo de nuevo! <br></br> Haz
          lo siguiente para verificarte ! =
          {verificatorStates[counterVerification]}
        </div>
      );
    }
  }

  return (
    <div className='container_messages_green'>
      Hola {currentName}
      <br></br> Haz lo siguiente para verificarte ! =
      {verificatorStates[counterVerification]}
    </div>
  );
};

export default EmotionVerifier;
