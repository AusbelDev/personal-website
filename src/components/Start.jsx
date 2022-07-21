import React from "react";
import "./Start.css";
import Typewriter from "typewriter-effect";
import StartButton from "./StartButton";

import Transitions from "./Transitions";

function Start(props) {
  return (
    <Transitions>
      <div className="Start css-selector">
        {/* <div className="loading"> */}
        <Typewriter
          options={{
            strings: ["< > Ausbel Dev < / >"],
            autoStart: true,
            loop: true,
            wrapperClassName: "loading",
            cursor: "_",
            cursorClassName: "cursor",
          }}
        />
        <br />
        <br />
        <StartButton handleStart={props.handleStart} />
        {/* </div> */}
      </div>
    </Transitions>
  );
}

export default Start;
