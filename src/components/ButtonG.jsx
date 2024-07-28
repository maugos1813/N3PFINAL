import React from 'react'

export const ButtonG = ({grado}) => {
  return (
    <div className='flex'>
        <button className='sm:text-white sm:text-[20px] sm:rounded-full sm:w-[40px] sm:h-[40px] sm:mt-[42px] sm:ml-[12px] sm:bg-[#585676] sm:focus:bg-[#E7E7EB] sm:focus:text-[#110E3C]'>{grado}</button>
    </div>
  )
}
