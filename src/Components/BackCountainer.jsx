import React from "react";

const BackArray = [
  "bg-gradient-135",
  "bg-gradient-225",
  "bg-gradient-315",
  "bg-gradient-45",
];
function BackCountainer({ setBackground }) {
  return (
    <div className="w-3/4 h-1/4 flex flex-wrap justify-center items-center mx-auto my-4">
      {[1, 2, 3, 4].map((item, index) => {
        return (
          <div
            key={index}
            className={`w-1/6 h-1/2 ${BackArray[index]} flex-wra mx-2 border border-gray-300 rounded-full box-shadow-2xl p-5 flex justify-center items-center cursor-pointer`}
            onClick={() => setBackground(BackArray[index])}
          ></div>
        );
      })}
    </div>
  );
}

export default BackCountainer;
