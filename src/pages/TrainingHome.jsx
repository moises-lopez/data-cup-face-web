import React, { Component, useState, useEffect } from "react";

import WebcamComponent from "../components/WebcamComponent";
import TermsAndConditions from "../pages/TermsAndConditions";
import TrainingPage from "../pages/TrainingPage";

import '../css/homepage.css'

function TrainingHome() {
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
      <div className='flex_home padding_img'>
        <WebcamComponent/>
        <TrainingPage/>
      </div>

    </div>
  );
}

export default TrainingHome;