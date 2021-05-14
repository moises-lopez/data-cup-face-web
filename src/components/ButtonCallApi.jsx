import { Button } from "@material-ui/core";
import React, { useState } from "react";
import EmotionsTab from "./EmotionsTab";

const URL = "http://localhost:5000/api/";

const ButtonTesting = () => {
  const [dataEmotions, setDataEmotions] = useState({});

  const handleTestCall = async () => {};

  // get video

  return (
    <React.Fragment>
      <Button onClick={() => handleTestCall()} color="primary">
        TEST
      </Button>
      <EmotionsTab data={dataEmotions}></EmotionsTab>
    </React.Fragment>
  );
};

export default ButtonTesting;
