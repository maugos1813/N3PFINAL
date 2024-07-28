import React from "react";

export const Boxes = ({ text }) => {
  return (
    <div className="">
      <div className="">
        <div className="bg-[#1E213A] text-white max-w-[120px] h-[177px] text-[19px] ml-[54px] mt-[52px]">
          <p className="text-center pt-[18px]">{text}</p>
        </div>
      </div>
      <div>
        <div className="bg-[#1E213A] text-white max-w-[120px] h-[177px] text-[19px] ml-[200px] mt-[-177px]">
          <p className="pt-[18px]"></p>
        </div>
      </div>
    </div>
  );
};
