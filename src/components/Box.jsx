import React from "react";

export const Box = ({text}) => {
  return (
    <div className="flex ml-[15px] mt-[25px] sm:ml-[-45px] sm:mt-[22px]">
      <div className="bg-[#1E213A] text-white w-[120px] h-[177px] text-[19px] mx-[40px] flex items-center justify-center">
        <p className="text-center">{text}</p>
      </div>
    </div>
  );
};
