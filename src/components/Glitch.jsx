import React from "react";
import "./Glitch.css";

const text = "<Λ>";

export default function Glitch() {
  return (
    <div className="glitch" title="<Λ>">
      {text}
    </div>
  );
}
