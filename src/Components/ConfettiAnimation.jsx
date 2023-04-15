import React, { useState } from "react";
import Confetti from "react-confetti";

function ConfettiAnimation({ isPartyMode }) {
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={500}
      recycle={false}
      colors={[
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4caf50",
        "#8bc34a",
        "#cddc39",
        "#ffeb3b",
        "#ffc107",
        "#ff9800",
        "#ff5722",
      ]}
      gravity={0.1}
      wind={0.0}
      opacity={1}
      run={isPartyMode} // set run to true if isPartyMode is true
    />
  );
}

export default ConfettiAnimation;
