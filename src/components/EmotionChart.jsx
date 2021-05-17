import RainbowChart from "./RainbowChart";
import React from "react";

const EmotionChart = ({ props }) => {
  const { data, key } = props;
  if (!data) {
    return <div></div>;
  }

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
      filler: "#83a6ed",
    },
  ];

  return <RainbowChart data={dataReadyToGraph} />;
};

export default EmotionChart;
