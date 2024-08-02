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
import { API } from "../useFetch";
import ubi from "/alfiler.png";
import { APIs } from "../useFetch5";
import { City } from "../useFetchCity";
import { CityS } from "../useFetchCityS";

export const Sidebar = () => {
  const [modal, setModal] = useState(false);
  const [lat, setLat] = useState('44.34');
  const [lon, setLon] = useState('10.99');
  const [cityname, setCityName] = useState('Zooca')


    const [data, setData] = useState([])

    const getData = async () => {
        const rs = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c5f51177f273108b4b1465c901f0589`)
        const jsonRs = await rs.json()
        setData(jsonRs)
    }

    useEffect(() => {
        getData()
    }, [lat, lon])

    const handleLocationClick = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLat(latitude)
            setLon(longitude)
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

 

  // const { data } = API( 
  //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c5f51177f273108b4b1465c901f0589`
  // );

  const { datas } = APIs(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0c5f51177f273108b4b1465c901f0589`
  );

  // const { dataC } = City(
  //   `http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=0c5f51177f273108b4b1465c901f0589`
  // );

  // const { dataS } = CityS(
  //   `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=0c5f51177f273108b4b1465c901f0589`
  // );

  const ShowModal = () => { 
    setModal(!modal); 
  };

  const updateCoordinates = (newLat, newLon) => {
    setLat(newLat); 
    setLon(newLon);
    console.log(newLat);
    console.log(newLon);

    ShowModal();
  };

  useEffect(() => {
  console.log(data);
    
  }, [data]);

  useEffect(()=>{
    setLat(lat)
    setLon(lon)
  },[])

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
            width: `${data && data.main && data.main.humidity}%`,
          }}
        ></div>
      </div>
      <div className="absolute ml-[270px]">
        <p className="flex justify-end text-[#A09FB1]">%</p>
      </div>
    </div>
  );

  return (
    <div className="sm:flex font-Raleway">
      <div className="w-[375px] h-[810px] sm:w-[459px] sm:h-[1023px] bg-[#1E213A]">
        <div>
          <UpButtons ShowModal={ShowModal} onClick={handleLocationClick} />
          <CloudesIcon icon={ubi} />
          <div className="flex place-content-center">
            <p className="text-white text-center mt-[290px] text-[144px] sm:mt-[350px] font-Raleway w-[192px]">
              {data && Math.round(data?.main?.temp - 273.15)} 
            </p>
            <p className="text-white mt-[410px] ml-[170px] text-[30px] absolute sm:mt-[470px] sm:ml-[170px]">
              °C
            </p>
          </div>
          <p className="text-[#A09FB1] text-[36px] text-center sm:mt-[50px]">
            {data &&
              data.weather &&
              data.weather.length > 0 &&
              data.weather[0].main}
          </p>
          <div className="flex gap-2 pt-[80px] font-Raleway text-[#A09FB1] justify-center">
            <p className="">Today • </p>
            <p>{formateDate(data && data.dt)}</p>
          </div>
          <div className="flex justify-center mt-[31px] gap-1 sm:mt-[70px]">
            <img src={ubi} alt="ubication icon" className="w-[24px] h-[24px]" />
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
            <Boxes
              text="Tomorrow"
              text2={
                datas &&
                datas.list &&
                datas.list[8] &&
                formatDate(datas.list[8].dt_txt)
              }
              temp={
                datas &&
                datas.list &&
                datas.list[0] &&
                datas.list[0] &&
                datas.list[0].weather[0]
                  ? Math.round(datas.list[0].main.temp - 273.15)
                  : "No disponible"
              }
              temp2={
                datas &&
                datas.list &&
                datas.list.length > 8 &&
                datas.list[8] &&
                datas.list[8].main &&
                Math.round(datas.list[8].main.temp - 273.15)
              }
              img="0"
              img2="8"
            />
            <Boxes
              text={
                datas &&
                datas.list &&
                datas.list[16] &&
                formatDate(datas.list[16].dt_txt)
              }
              text2={
                datas &&
                datas.list &&
                datas.list[24] &&
                formatDate(datas.list[24].dt_txt)
              }
              temp={
                datas &&
                datas.list &&
                datas.list.length > 16 &&
                datas.list[16] &&
                datas.list[16].main &&
                Math.round(datas.list[16].main.temp - 273.15)
              }
              temp2={
                datas &&
                datas.list &&
                datas.list.length > 24 &&
                datas.list[24] &&
                datas.list[24].main &&
                Math.round(datas.list[24].main.temp - 273.15)
              }
              img="16"
              img2="24"
            />
            <Box
              text={
                datas &&
                datas.list &&
                datas.list.length > 32 &&
                datas.list[32] &&
                formatDate(datas.list[32].dt_txt)
              }
              temp={
                datas &&
                datas.list &&
                datas.list.length > 32 &&
                datas.list[32] &&
                datas.list[32].main &&
                Math.round(datas.list[32].main.temp - 273.15)
              }
              img="32"
            />
          </div>
        </div>
        <div className="mt-[30px] text-[21px] sm:ml-[15%]">
          <p className="text-white ml-[23px]">Today's Hightlights</p>
        </div>
        <div className="sm:flex sm:gap-[48px] sm:ml-[15%] ml-[23px]">
          <BigBox
            Wind="Wind status"
            number={Math.round(data && data.wind && data.wind.speed)}
            stat="mhp"
            WSW="WSW"
          />
          <div>
            <BigBox
              Wind="Humidity"
              number={data && data.main && data.main.humidity + "%"}
              barra={barraM}
            />
          </div>
        </div>
        <div className="sm:flex sm:gap-[48px] sm:ml-[15%] ml-[23px]">
          <MediumBox
            title="Visibility"
            miles={(data && data.visibility / 1609.34).toFixed(1)}
            dist="miles"
          />
          <MediumBox
            title="Air Pressure"
            miles={data && data.main && data.main.pressure}
            dist="mb"
          />
        </div>
        <div>
          <Footer />
        </div>
        <div> {modal && <ModalSearch ShowModal={ShowModal} updateCoordinates={updateCoordinates} />}</div>
      </div>
    </div>
  );
};