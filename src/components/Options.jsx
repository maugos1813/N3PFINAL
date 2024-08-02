import React from "react";

export const Options = ({ city, onClick }) => {
  return (
    <div>
      <button className="flex justify-between focus:border-[1px] w-[351px] h-[64px] text-[#E7E7EB] ml-[11px] mt-[10px] sm:w-[367px] sm:ml-[46px] text-left pt-[4.5%]" onClick={onClick}>
        <p className="ml-[12px]">{city}</p>
        <p className="mr-[12px]">{'>'}</p>
      </button>
    </div>
  );
};
