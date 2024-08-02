import React from 'react'

export const BigBox = ({Wind, number, stat, WSW, barra, img}) => {
  return (
    <div>
        <div className='w-[328px] h-[204px] bg-[#1E213A] mt-[30px]'>
            <p className='text-white text-[16px] text-center font-Raleway pt-[22px]'>{Wind}</p>
            <div className='flex justify-center gap-2'>
              <p className='text-center text-[#E7E7EB] text-[64px] '>{number}</p>
              <span className='text-[36px] pt-[25px] text-[#E7E7EB]'>{stat}</span>
            </div>
            <div className='text-center text-[#E7E7EB]'>
              <img src={img} alt="." className='absolute ml-[120px]'/>
              <p>{WSW}</p>
            </div>
            <div>
              {barra}
            </div>
        </div>
    </div>
  )
}
