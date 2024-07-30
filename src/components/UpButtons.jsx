import React from 'react'
import  ubication  from '/ubication.png'

export const UpButtons = ({ShowModal}) => {
  return (
    <div className='flex justify-between'>
        <div className='bg-[#6E707A] mt-[18px] ml-[11px] w-[161px] h-[40px] place-content-center sm:mt-[42px] sm:ml-[46px]'>
            <button className='text-[#E7E7EB] ml-[19px]' onClick={ShowModal}> Search for places</button>
        </div>
        <div>
            <button className='rounded-[100%] bg-[#6E707A] mt-[18px] mr-[11px] w-[40px] h-[40px] place-content-center sm:mt-[42px] sm:mr-[46px]'><img src={ubication} alt="imagen de ubicacion" className='flex w-[22px] h-[22px] ml-[9px]'/></button>
        </div>
    </div>
  )
}
