import {useState} from "react";
import "./App.css";
import crest from './crescent-school.png';

function App() {

  return (
    <div>
      <div className="center-flex background-color">
        <h1 id="Title"> Crescent Outreach </h1>
        <img src={crest} alt="rightCrest" />
      </div>
      
    </div>
  );
}

export default App;
