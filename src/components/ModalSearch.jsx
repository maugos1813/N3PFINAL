import React, { useState } from "react";
import search from '/buscar.png';
import { Options } from "./Options";

export const ModalSearch = ({ ShowModal, updateCoordinates }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
   
  };

  return (
    <div className="">
      <div className="w-[375px] h-[672px] bg-[#1E213A] mt-[-2490px] sm:w-[459px]  absolute sm:mt-[-930px] sm:ml-[-459px]">
        <div>
          <button
            className="text-[#E7E7EB] flex place-content-center w-[24px] h-[24px] ml-[339px] text-[30px] sm:ml-[381px]"
            onClick={ShowModal} 
          >
            &times;
          </button>
        </div>
        <div className="flex mt-[24px] sm:place-content-center sm:mt-[38px]">
          <button className="absolute ml-[25px] mt-[15px] sm:ml-[-300px]">
            <img src={search} alt="icon search" />
          </button>
          <input
            type="search" 
            placeholder="search location" 
            className="h-[48px] w-[253px] ml-[13px] bg-[#1E213A] border-[1px] pl-[40px] text-[#616475] sm:w-[270px] sm:ml-[-1px] sm:pl-[50px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-[#3c47e9] h-[48px] w-[86px] ml-[12px] text-white" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="mt-[24px] sm:mt-[38px]">
          <Options city='London' onClick={() => updateCoordinates(51.5074, -0.1278)}/>
          <Options city='Barcelona' onClick={() => updateCoordinates(41.3888, 	2.159)}/>
          <Options city='Long Beach' onClick={() => updateCoordinates(33.7701, -118.1937)}/> 
        </div>
      </div>
    </div> 
  );
};