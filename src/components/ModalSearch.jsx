import React from "react";

export const ModalSearch = ({ShowModal}) => {
  return (
    <div>
      <div className="w-[375px] h-[672px] bg-[#1E213A] mt-[-2490px] sm:w-[459px] sm:h-[1023px] absolute sm:mt-[-1002px] sm:ml-[-459px] ">
        <div className="">
          <button className="text-[#E7E7EB] flex place-content-center w-[24px] h-[24px] ml-[339px] text-[30px] sm:ml-[381px]" onClick={ShowModal}>
            &times;
          </button>
        </div>
        <div className="flex mt-[24px] sm:place-content-center sm:mt-[38px]">
          <input
            type="search"
            placeholder="search location"
            className="h-[48px] w-[253px] ml-[13px] bg-[#1E213A] border-[1px] pl-[14px] text-[#E7E7EB]"
          />
          <button className="bg-[#3c47e9] h-[48px] w-[86px] ml-[12px]">Search</button>
        </div>
      </div>
    </div>
  );
};
