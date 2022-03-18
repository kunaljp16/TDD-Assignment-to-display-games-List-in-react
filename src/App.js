import React from "react";
import "./app.scss";

import Arrow from "./components/sharedUI/arrows/arrow";
import Button from "./components/sharedUI/button/button";

function App() {
  return (
    <div className="headerWrapper">
      <h1>LOTTOLAND GAMES</h1>
      <Button text="SORT GAMES"/>
    </div>
  );
}

export default App;
