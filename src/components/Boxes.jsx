import React from "react";
import { APIs } from "../useFetch5";


export const Boxes = ({ text, text2, img, temp, temp2, img2 }) => {
  const { datas } = APIs(
    `http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=0c5f51177f273108b4b1465c901f0589`
  );

  return (
    <div className="flex justify-center mt-[22px] ml-[8%] sm:ml-[0px] font-Raleway ">
      <div className="bg-[#1E213A] text-white w-[120px] h-[177px] text-[19px] flex flex-col sm:mx-[0.5px]">
        <p className="pl-[15px] pt-[18px]  text-[16px] ml-[5px]">{text}</p>
        <img
          src={`/${
            datas && 
            datas.list && 
            datas.list.length > 8 &&
            datas.list[img] &&
            datas.list[img].weather && 
            datas.list[img].weather[0].icon
          }.png`}
          alt="weather icon"
          className="w-[62px] h-[62px] ml-[25px] mt-[14px]"
        />
        <p className="ml-[30%] mt-[15px] font-Raleway">{temp} °C</p>
      </div>
      <div className="bg-[#1E213A] text-white w-[120px] h-[177px] text-[19px] mx-[27px] flex flex-col">
        <p className="pl-[15px] pt-[18px] text-[16px]">{text2}</p>
        <img
          src={`/${
            datas && 
            datas.list && 
            datas.list.length > 8 &&
            datas.list[img2] &&
            datas.list[img2].weather && 
            datas.list[img2].weather[0].icon
          }.png`}
          alt="weather icon2"
          className="w-[62px] h-[62px] ml-[25px] mt-[14px]"
        />
        <p className="ml-[30%] mt-[15px] font-Raleway">{temp2} °C</p>
      </div>
    </div>
  );
};
