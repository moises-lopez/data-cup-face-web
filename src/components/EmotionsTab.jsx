import React from "react";
import Table from "./Table";

import SingleEmotion from "../components/SingleEmotion";

{
  /* <Table data={data.emotion}></Table> */
}

const EmotionsTab = ({ data }) => {
  if (!data) {
    return <div></div>;
  }

  data = data.emotion;

  const keys = Object.keys(data);

  const emojiArray = {
    anger: "😠",
    contempt: "😒",
    disgust: "🤢",
    fear: "😨",
    happiness: "😃",
    neutral: "😐",
    sadness: "😰",
    surprise: "😮",
  };

  return (
    <div className="wrapper">
      {keys.map((key) => (
        <SingleEmotion face={key + emojiArray[key]} data={data} keyName={key} />
      ))}
    </div>
  );
};

export default EmotionsTab;
