import React, { Component, useState, useEffect } from "react";

import EmotionsPage from "../pages/EmotionsPage";
import TermsAndConditions from "../pages/TermsAndConditions";
import TrainingPage from "../pages/TrainingPage";

import "../css/homepage.css";

function Homepage() {
  let [terms, setTerms] = useState(false);
  let [pass, setPass] = useState(false);

  let changeTerms = (e) => {
    setTerms(!terms);
  };

  let handleSubmit = (e) => {
    if (terms) {
      setPass(true);
    }
  };

  if (!pass) {
    return (
      <TermsAndConditions
        changeTerms={changeTerms}
        handleSubmit={handleSubmit}
      />
    );
  }

  return (
    <div className="App">
      <div className="flex_home padding_img">
        <EmotionsPage />
      </div>
    </div>
  );
}

export default Homepage;
