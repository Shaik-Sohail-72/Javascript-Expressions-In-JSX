import React from "react";
import ReactDOM from "react-dom";
const fname = "Shaik";
const lname = "Sohail";
//const n=10;
ReactDOM.render(
  <div>
    <h1>
      Hello {fname + " " + lname}!
    </h1>
    <p>This is your lucky number {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
