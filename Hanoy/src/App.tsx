import React from "react";
import ReactDOM from "react-dom";
import Hanoy from "./Hanoy";

import "./index.css";

const App = () => (
  <div className="container">
    <Hanoy />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
