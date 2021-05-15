import React, { useState, useEffect } from "react";
import { getMaxEmotion } from "../functions/emotionsHelper";

const EmotionVerifier = ({ faceInfoFromFrame }) => {
  let [randomEmotion, setRandomEmotion] = useState("");
  let [smiled, setSmiled] = useState(false);
  let [counterVerification, setCounterVerification] = useState(2);
  let commonEmotions = ["neutral", "happiness", "surprise"];
  console.log(faceInfoFromFrame);

  useEffect(() => {
    commonEmotions = commonEmotions.sort(() => Math.random() - 0.5);
  }, []);

  if (counterVerification === 0) {
    setTimeout(function () {
      setSmiled(false);
      setCounterVerification(3);
    }, 2000);
    return <div>Aprobado!</div>;
  }

  if (faceInfoFromFrame.smile == 1 && !smiled) {
    setSmiled(true);
  }

  if (smiled == false) {
    return <div>SONRIE PARA EMPEZAR</div>;
  }
  if (
    commonEmotions[counterVerification] ===
    getMaxEmotion(faceInfoFromFrame.emotion)
  ) {
    console.log("test passed");
    setCounterVerification(counterVerification - 1);
  }

  return <div>{commonEmotions[counterVerification]}</div>;
};

export default EmotionVerifier;
