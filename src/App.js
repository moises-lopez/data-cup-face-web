import React, {useReducer, useContext, Component} from 'react'
import { Redirect, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar'

import Homepage from './pages/Homepage'
import TrainHome from './pages/TrainingHome'



function App() {
  return (
    <React.Fragment>  
          <Navbar/>
              <Switch>
              <Route path="/Homepage" component={Homepage} />
              <Route path="/Training" component={TrainHome} />
              <Redirect from="/" to="/Homepage" />
              </Switch>
    </React.Fragment>
  );
}

export default App;
