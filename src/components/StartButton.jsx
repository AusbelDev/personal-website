import React, { useState } from "react";
import "./StartButton.css";

const StartButton = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    props.handleStart();
    console.log("clicked");
  };

  return (
    <div id="container">
      <button className="learn-more" onClick={handleClick}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Go To Site</span>
      </button>
    </div>
  );
};

export default StartButton;
