import RainbowChart from "./RainbowChart";
import React from "react";

const EmotionChart = ({ props }) => {
  const { data, key } = props;
  if (!data) {
    return <div></div>;
  }

  console.log("DATA? ", data, key);

  const formatDataToGraph = (data) => {
    const keys = Object.keys(data);
    let formatedData = [];
    keys.forEach((key) => {
      formatedData.push({
        name: key,
        uv: data[key],
        pv: 2400,
        filler: "#8884d8",
      });
    });
    return formatedData;
  };

  const dataReadyToGraph = [
    {
      name: "",
      uv: 1,
      pv: 2400,
      filler: "#8884d8",
    },
    {
      name: key,
      uv: data[key],
      pv: 2400,
      filler: "#8884d8",
    },
  ];

  console.log("ready", dataReadyToGraph);
  return <RainbowChart data={dataReadyToGraph}></RainbowChart>;
};

export default EmotionChart;
