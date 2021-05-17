import React, { Component } from "react";
import EmotionChart from "./EmotionChart";

const SingleEmotion = ({ face, data, keyName }) => {
  //console.log(data, keyName, window.innerWidth, window.innerHeight)
  return (
    <div className="box">
      <p>{face}</p>
      <p>{data[keyName]}</p>
      <EmotionChart props={{ data: data, key: keyName }}></EmotionChart>
    </div>
  );
};

export default SingleEmotion;
