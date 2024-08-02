import React from "react";
import { APIs } from "../useFetch5";

export const Box = ({ text, temp, img }) => {

  const { datas } = APIs(
    `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=0c5f51177f273108b4b1465c901f0589`
  );

  return (
    <div className="flex flex-col items-center ml-[15px] mt-[25px] sm:ml-[-45px] sm:mt-[22px]">
      <div className="bg-[#1E213A] text-white w-[120px] h-[177px] text-[19px] flex items-center flex-col justify-center mx-[40px]">
        <p className="text-center pt-[10px] text-[16px]">{text}</p>
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
          className="w-[62px] h-[62px] mt-[10px]"
        />
        <div className="flex">
          <p className="mt-[15px] font-Raleway text-center">{temp} °C</p>
          {/* <span className="mt-[15px]">{temp} °C</span> */}
        </div>
      </div>
    </div>
  );
};
