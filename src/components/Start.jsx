import React from "react";
import "./Start.css";
import Typewriter from "typewriter-effect";
import StartButton from "./StartButton";

function Start(props) {
  return (
    <div className="Start">
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
      <StartButton handleStart={props.handleStart} />
      {/* </div> */}
    </div>
  );
}

export default Start;
