import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Life from "./pages/Life";

const App = () => (
  <div className="container">
    <h1>Container App</h1>
    <Suspense fallback={<div>Загрузка...</div>}>
      <Life />
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
