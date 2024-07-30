import React from "react";

export const Boxes = ({ text, text2 }) => {
  return (
    <div className="flex justify-center mt-[22px] ml-[8%] sm:ml-[0px]">
      <div className="bg-[#1E213A] text-white w-[120px] h-[177px] text-[19px] flex items-center justify-center sm:mx-[0.5px]">
        <p className="text-center">{text}</p>
      </div>
      <div className="bg-[#1E213A] text-white w-[120px] h-[177px] text-[19px] mx-[27px] flex items-center justify-center">
        <p className="text-center">{text2}</p>
      </div>
    </div>
  );
};