// App.js
import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css";

const App = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>

      <Tooltip text="This is a heading tooltip!">
        <h2>Hover over me!</h2>
      </Tooltip>

      <br />
      <br />

      <Tooltip text="This is a button tooltip!">
        <button>Hover over button</button>
      </Tooltip>

      <br />
      <br />

      <Tooltip text="This is a paragraph tooltip!">
        <p>Hover over this paragraph.</p>
      </Tooltip>
    </div>
  );
};

export default App;
