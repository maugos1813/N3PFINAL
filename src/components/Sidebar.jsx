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
import { API } from "../useFetch";
import ubi from "/alfiler.png"

export const Sidebar = () => {
  const [modal, setModal] = useState(false);
  const { data } = API(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0c5f51177f273108b4b1465c901f0589`
  );
  const ShowModal = () => {
    setModal(!modal);
  };

  return (
    <div className="sm:flex">
      <div className="w-[375px] h-[810px] sm:w-[459px] sm:h-[1023px] bg-[#1E213A]">
        <div>
          <UpButtons ShowModal={ShowModal} />
          <CloudesIcon />
          <div className="flex place-content-center">
            <p className="text-white text-center mt-[290px] text-[144px] sm:mt-[350px] font-Raleway w-[192px]">
              {data && Math.round(data?.main?.temp - 273.15)}
            </p>
            <p className="text-white mt-[410px] ml-[170px] text-[30px] absolute sm:mt-[470px] sm:ml-[170px]">
              °C
            </p>
          </div>
          <p className="text-[#A09FB1] text-[36px] text-center sm:mt-[50px]">
            {data && data.weather[0].main}
          </p>
          <div className="flex gap-2 pt-[80px] font-Raleway text-[#A09FB1]">
            <p className="ml-[148px] sm:ml-[38%]">Today • </p>
            <p>hoy</p>
          </div>
          <div className="flex justify-center mt-[31px] gap-1 sm:mt-[70px]">
            <img src={ubi} alt='ubication icon' className="w-[24px] h-[24px]"/>
            <p className="font-Raleway text-[#A09FB1]">{data && data.name}</p>
          </div>
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
          <BigBox />
          <BigBox />
        </div>
        <div className="sm:flex sm:gap-[48px] sm:ml-[15%] ml-[23px]">
          <MediumBox />
          <MediumBox />
        </div>
        <div>
          <Footer />
        </div>
        <div>{modal && <ModalSearch ShowModal={ShowModal} />}</div>
      </div>
    </div>
  );
};
