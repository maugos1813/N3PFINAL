import React, { useState } from "react";
import { UpButtons } from "./UpButtons";
import { CloudesIcon } from "./CloudesIcon";
import { Boxes } from "./Boxes";
import { ButtonG } from "./ButtonG";
import { Box } from "./Box";
import { BigBox } from "./BigBox";
import { MediumBox } from "./MediumBox";
import { Footer } from "./Footer";
import { ModalSearch } from "./ModalSearch";

export const Sidebar = () => {
  const [modal, setModal] = useState(false)
  const ShowModal = () => {
    setModal(!modal)
  }

  return (
    <div className="sm:flex">
      <div className="w-[375px] h-[810px] sm:w-[459px] sm:h-[1023px] bg-[#1E213A]">
        <div>
          <UpButtons ShowModal={ShowModal}/>
          <CloudesIcon />
        </div>
      </div>
      <div className="w-[375px] h-[1718px] sm:w-[981px] sm:h-[1023px] bg-[#100E1D] z-50">
        <div>
          <div className="flex sm:ml-[78%] sm:mb-[55px]">
            <ButtonG grado="°C" />
            <ButtonG grado="°F" />
          </div>
          <div className="sm:flex sm:mb-[55px] sm:ml-[15%]">
            <Boxes text="Tomorrow" text2="Tomorrow2" />
            <Boxes />
            <Box />
          </div>
        </div>
        <div className="mt-[30px] text-[21px] sm:ml-[15%]">
          <p className="text-white">Today's Hightlights</p>
        </div>
        <div className="sm:flex sm:gap-[48px] sm:ml-[15%] ml-[23px]">
          <BigBox/>
          <BigBox/>
        </div>
        <div className="sm:flex sm:gap-[48px] sm:ml-[15%] ml-[23px]">
          <MediumBox/>
          <MediumBox/>
        </div>
        <div>
          <Footer/>
        </div>
        <div>
          {modal && 
          <ModalSearch ShowModal={ShowModal}/>
          }
          
        </div>
      </div>
    </div>
  );
};
