import React from "react";
import ReactDOM from "react-dom";
import Life from "./Life";

import "./index.css";

const App = () => (
  <div className="container">
    <Life />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
