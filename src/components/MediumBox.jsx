import React from "react";

export const MediumBox = ({ miles, dist, title }) => {
  return (
    <div>
      <div className="w-[328px] h-[159px] bg-[#1E213A] sm:mt-[48px] mt-[30px]">
        <p className="text-white text-center pt-[22px]">{title}</p>
        <div className="flex justify-center gap-2">
          <p className="text-[#E7E7EB] text-[64px] text-center">{miles}</p>
          <span className="text-[#E7E7EB] text-[36px] mt-[25px]">{dist}</span>
        </div>
      </div>
    </div>
  );
};
