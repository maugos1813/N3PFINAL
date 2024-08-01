import React from "react";
import cloud from "/Cloud.png";
import { API } from "../useFetch";

export const CloudesIcon = ({ icon }) => {
  const { data } = API(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0c5f51177f273108b4b1465c901f0589`
  );

  return (
    <div className="">
      <div className="w-[563.56px] h-[326px] mt-[-7px] flex place-content-center absolute left-[-90px] sm:w-[680px] sm:h-[376px] sm:mt-[20px] sm:ml-[-18px]">
        <img src={cloud} alt="fondo de nubes" className="opacity-10" />
      </div>
      <div className=" absolute w-[150px] h-[174px] mt-[74px] ml-[120px] sm:w-[202px] sm:h-[234px] sm:mt-[111px] sm:ml-[129px]">
        <img
          src={`/${
            data && data.weather && data.weather[0] && data.weather[0].icon
          }.png`}
          alt="weather icon"
        />
      </div>
    </div>
  );
};
