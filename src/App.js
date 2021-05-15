import React, { Component, useState, useEffect } from 'react';
import logo from "./logo.svg";
import "./App.css";
import WebcamComponent from "./components/WebcamComponent";
import EmotionsPage from "./pages/EmotionsPage";
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  
  let [terms, setTerms] = useState(false)
  let [pass, setPass] = useState(false)

  let changeTerms = (e) => {
    setTerms(!(terms));
    console.log(terms)
  }

  let handleSubmit = (e) => {
    if (terms) {
      setPass(true)
    }
    console.log('Hello')
  }

  // useEffect(async () => {
  //   setTerms(terms);
  // }, []);

  if (!pass) {
    return <TermsAndConditions changeTerms={changeTerms} handleSubmit={handleSubmit} />
  }

  return (
    <div className="App">
      <WebcamComponent></WebcamComponent>
      <EmotionsPage></EmotionsPage>
      {/* <TermsAndConditions
      changeTerms={changeTerms}
      handleSubmit={handleSubmit}
      /> */}
    </div>
  );
}

export default App;
