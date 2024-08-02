import React, { useState } from 'react';
import ubication from '/ubication.png';



export const UpButtons = ({ ShowModal, onClick}) => {

  const [latitud, setLatitud] = useState('')
  const [longitude, setLongitude] = useState('')

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitud(latitude)
          setLongitude(longitude)
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

  return (
    <div className='flex justify-between'>
      <div className='bg-[#6E707A] mt-[18px] ml-[11px] w-[161px] h-[40px] place-content-center sm:mt-[42px] sm:ml-[46px]'>
        <button className='text-[#E7E7EB] ml-[19px]' onClick={ShowModal}> Search for places</button>
      </div>
      <div>
        <button 
          className='rounded-[100%] bg-[#6E707A] mt-[18px] mr-[11px] w-[40px] h-[40px] place-content-center sm:mt-[42px] sm:mr-[46px]' 
          onClick={onClick}
        >
          <img src={ubication} alt="imagen de ubicacion" className='flex w-[22px] h-[22px] ml-[9px]' />
        </button>
      </div>
    </div>
  );
};