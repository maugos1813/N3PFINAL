import React from "react";
import cloud from "/Cloud.png";
import shower from '/Shower.png'

export const CloudesIcon = () => {
  return (
    <div className="">
      <div className="w-[563.56px] h-[326px] mt-[-7px] flex place-content-center absolute left-[-90px] sm:w-[680px] sm:h-[376px] sm:mt-[20px] sm:ml-[-18px]">
        <img src={cloud} alt="fondo de nubes" className="opacity-10" />
      </div>
      <div className=" absolute w-[150px] h-[174px] mt-[74px] ml-[120px] sm:w-[202px] sm:h-[234px] sm:mt-[111px] sm:ml-[129px]">
        <img src={shower} alt="Shower" />
      </div>
    </div>
  );
};
