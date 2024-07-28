import React from "react";
import { UpButtons } from "./UpButtons";
import { CloudesIcon } from "./CloudesIcon";
import { Boxes } from "./Boxes";
import { ButtonG } from "./ButtonG";

export const Sidebar = () => {
  return (
    <div className="sm:flex">
      <div className="w-[375px] h-[810px] sm:w-[459px] sm:h-[1023px] bg-[#1E213A]">
        <div>
            <UpButtons/>
            <CloudesIcon/>
        </div>
      </div>
      <div className="w-[375px] h-[1718px] sm:w-[981px] sm:h-[1023px] bg-[#100E1D] z-50">
        <div>
          <div className="flex sm:ml-[85%]">
            <ButtonG grado='°G'/>
            <ButtonG grado='°F'/>
          </div>
          
        </div>
      </div>
    </div>
  );
};
