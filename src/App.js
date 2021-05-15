import React, { Component, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import WebcamComponent from "./components/WebcamComponent";
import EmotionsPage from "./pages/EmotionsPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import TrainingPage from "./pages/TrainingPage";

function App() {
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

  // useEffect(async () => {
  //   setTerms(terms);
  // }, []);

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
      <WebcamComponent></WebcamComponent>
      <EmotionsPage></EmotionsPage>
      {/* <TrainingPage></TrainingPage> */}
      {/* <TermsAndConditions
      changeTerms={changeTerms}
      handleSubmit={handleSubmit}
      /> */}
    </div>
  );
}

export default App;
