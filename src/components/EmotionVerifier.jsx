import React, { useState, useEffect } from "react";

const EmotionVerifier = ({ faceInfoFromFrame }) => {
  const [randomEmotion, setRandomEmotion] = useState("");
  const [counterVerification, setCounterVerification] = useState(3);

  console.log(faceInfoFromFrame);

  const getRandomEmotion = () => {
    if (!faceInfoFromFrame.emotion) {
      return;
    }
    const emotionKeys = Object.keys(faceInfoFromFrame.emotion);
    const randomElement =
      emotionKeys[Math.floor(Math.random() * emotionKeys.length)];
    setRandomEmotion(randomElement);
  };

  if (!faceInfoFromFrame.smile) {
    return <div>SONRIE PARA EMPEZAR</div>;
  }

  return <div>done</div>;
};

export default EmotionVerifier;
