import React, { useEffect, useState } from "react";
import { UpButtons } from "./UpButtons";
import { CloudesIcon } from "./CloudesIcon";
import { Boxes } from "./Boxes";
import { ButtonG } from "./ButtonG";
import { Box } from "./Box";
import { BigBox } from "./BigBox";
import { MediumBox } from "./MediumBox";
import { Footer } from "./Footer";
import { ModalSearch } from "./ModalSearch";
import ubi from "/alfiler.png";

export const Sidebar = () => {
  const [modal, setModal] = useState(false);
  const [lat, setLat] = useState("44.34");
  const [lon, setLon] = useState("10.99");
  const [cityname, setCityName] = useState("Zooca");
  const [data, setData] = useState(null);
  const [datas, setDatas] = useState(null);

  const getData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c5f51177f273108b4b1465c901f0589`;
      console.log(`Fetching weather data from: ${url}`);
      const rs = await fetch(url);
      if (!rs.ok) {
        throw new Error(`HTTP error! status: ${rs.status}`);
      }
      const jsonRs = await rs.json();
      setData(jsonRs);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };
  
  const getDatas = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0c5f51177f273108b4b1465c901f0589`;
      console.log(`Fetching forecast data from: ${url}`);
      const rs = await fetch(url);
      if (!rs.ok) {
        throw new Error(`HTTP error! status: ${rs.status}`);
      }
      const jsonRs = await rs.json();
      setDatas(jsonRs);
    } catch (error) {
      console.error("Error fetching forecast data: ", error);
    }
  };

  useEffect(() => {
    getData();
    getDatas();
  }, [lat, lon]);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLon(longitude);
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const ShowModal = () => {
    setModal(!modal);
  };

  const updateCoordinates = (newLat, newLon) => {
    setLat(newLat);
    setLon(newLon);
    ShowModal();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  };

  const formateDate = (timestamp) => {
    const dateT = new Date(timestamp * 1000);
    return dateT.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  };

  const barraM = (
    <div className="absolute">
      <div className="flex justify-between w-[229px] text-[#A09FB1] absolute ml-[22%]">
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div className="w-[229px] bg-white h-[8px] ml-[22%] mt-[19px] rounded-[80px]">
        <div
          className="h-full bg-yellow-300 rounded-[80px]"
          style={{
            width: `${
              data && data.main && data.main.humidity ? data.main.humidity : 0
            }%`,
          }}
        ></div>
      </div>
      <div className="absolute ml-[270px]">
        <p className="flex justify-end text-[#A09FB1]">%</p>
      </div>
    </div>
  );

  return (
    <div className="sm:flex font-Raleway h-[100%] sm:h-[100%]">
      <div className="w-full h-[150%] sm:w-[43%] sm:h-[100%] bg-[#1E213A]">
        <div>
          <UpButtons ShowModal={ShowModal} onClick={handleLocationClick} />
          <CloudesIcon icon={ubi} />
          <div className="flex place-content-center">
            <p className="text-white text-center mt-[290px] text-[144px] sm:mt-[350px] font-Raleway w-[192px]">
              {data && data.main ? Math.round(data.main.temp - 273.15) : "N/A"}
            </p>
            <p className="text-white mt-[410px] ml-[170px] text-[30px] absolute sm:mt-[470px] sm:ml-[170px]">
              °C
            </p>
          </div>
          <p className="text-[#A09FB1] text-[36px] text-center sm:mt-[50px]">
            {data && data.weather && data.weather.length > 0
              ? data.weather[0].main
              : "N/A"}
          </p>
          <div className="flex gap-2 pt-[80px] font-Raleway text-[#A09FB1] justify-center">
            <p>Today • </p>
            <p>{data ? formateDate(data.dt) : "N/A"}</p>
          </div>
          <div className="flex justify-center mt-[31px] gap-1 sm:mt-[70px] ">
            <img src={ubi} alt="ubication icon" className="w-[24px] h-[24px]" />
            <p className="font-Raleway text-[#A09FB1]">
              {data && data.name ? data.name : "N/A"}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[100%] sm:w-[1/3] sm:h-[100%] bg-[#100E1D] z-50">
        <div>
          <div className="flex sm:ml-[78%] sm:mb-[55px]">
            <ButtonG grado="°C" />
            <ButtonG grado="°F" />
          </div>
          <div className="sm:flex sm:mb-[55px] sm:ml-[23px] sm-[23px] justify-center">
            <Boxes
              text="Tomorrow"
              text2={
                datas && datas.list && datas.list[8]
                  ? formatDate(datas.list[8].dt_txt)
                  : "N/A"
              }
              temp={
                datas && datas.list && datas.list[0]
                  ? Math.round(datas.list[0].main.temp - 273.15)
                  : "N/A"
              }
              temp2={
                datas && datas.list && datas.list.length > 8
                  ? Math.round(datas.list[8].main.temp - 273.15)
                  : "N/A"
              }
              img="0"
              img2="8"
            />
            <Boxes
              text={
                datas && datas.list && datas.list[16]
                  ? formatDate(datas.list[16].dt_txt)
                  : "N/A"
              }
              text2={
                datas && datas.list && datas.list[24]
                  ? formatDate(datas.list[24].dt_txt)
                  : "N/A"
              }
              temp={
                datas && datas.list && datas.list.length > 16
                  ? Math.round(datas.list[16].main.temp - 273.15)
                  : "N/A"
              }
              temp2={
                datas && datas.list && datas.list.length > 24
                  ? Math.round(datas.list[24].main.temp - 273.15)
                  : "N/A"
              }
              img="16"
              img2="24"
            />
            <Box
              text={
                datas && datas.list && datas.list.length > 32
                  ? formatDate(datas.list[32].dt_txt)
                  : "N/A"
              }
              temp={
                datas && datas.list && datas.list.length > 32
                  ? Math.round(datas.list[32].main.temp - 273.15)
                  : "N/A"
              }
              img="32"
            />
          </div>
        </div>
        <div className="mt-[30px] text-[21px] sm:ml-[23%]">
          <p className="text-white ml-[23px] flex justify-left">Today's Highlights</p>
        </div>
        <div className="sm:flex sm:gap-[48px] ml-[23px] justify-center">
          <BigBox
            Wind="Wind status"
            number={data && data.wind ? Math.round(data.wind.speed) : "N/A"}
            stat="mhp"
            WSW="WSW"
          />
          <div>
            <BigBox
              Wind="Humidity"
              number={data && data.main ? data.main.humidity + "%" : "N/A"}
              barra={barraM}
            />
          </div>
        </div>
        <div className="sm:flex sm:gap-[48px] ml-[23px] justify-center">
          <MediumBox
            title="Visibility"
            miles={data ? (data.visibility / 1609.34).toFixed(1) : "N/A"}
            dist="miles"
          />
          <MediumBox
            title="Air Pressure"
            miles={data && data.main ? data.main.pressure : "N/A"}
            dist="mb"
          />
        </div>
        <div>
          <Footer />
        </div>
        <div>
          {modal && (
            <ModalSearch
              ShowModal={ShowModal}
              updateCoordinates={updateCoordinates}
            />
          )}
        </div>
      </div>
    </div>
  );
};
