import React from "react";
import ReactDOM from "react-dom";
import Tanks from "./Tanks";

import "./index.css";

const App = () => (
  <div className="container">
    <Tanks />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
