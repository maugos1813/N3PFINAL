import React from "react";
import { UpButtons } from "./UpButtons";
import { CloudesIcon } from "./CloudesIcon";
import { Boxes } from "./Boxes";
import { ButtonG } from "./ButtonG";
import { Box } from "./Box";
import { BigBox } from "./BigBox";
import { MediumBox } from "./MediumBox";
import { Footer } from "./Footer";

export const Sidebar = () => {
  return (
    <div className="sm:flex">
      <div className="w-[375px] h-[810px] sm:w-[459px] sm:h-[1023px] bg-[#1E213A]">
        <div>
          <UpButtons />
          <CloudesIcon />
        </div>
      </div>
      <div className="w-[375px] h-[1718px] sm:w-[981px] sm:h-[1023px] bg-[#100E1D] z-50">
        <div>
          <div className="flex sm:ml-[78%] sm:mb-[55px]">
            <ButtonG grado="°C" />
            <ButtonG grado="°F" />
          </div>
          <div className="sm:flex sm:ml-[16.5%] sm:mb-[55px]">
            <Boxes text="Tomorrow" text2="Tomorrow2" />
            <Boxes />
            <Box />
          </div>
        </div>
        <div className="mt-[30px] ml-[21px] text-[21px] sm:ml-[16.5%]">
          <p className="text-white">Today's Hightlights</p>
        </div>
        <div className="sm:flex sm:gap-[48px] sm:justify-center">
          <BigBox/>
          <BigBox/>
        </div>
        <div className="sm:flex sm:ml-[14.5%] gap-[25px]">
          <MediumBox/>
          <MediumBox/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};
