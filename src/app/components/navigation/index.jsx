import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton';

const Navigation = () => {
const angleIncrement = 360/BtnList.length;
  return (
    <div className='fixed h-screen flex items-center justify-center w-full'>
        <div className='flex items-center w-max justify-between relative'>
      {
        
        BtnList.map((btn,index)=>{
            const anglerad = (index*angleIncrement*Math.PI)/180 //since will we need diff values for diff btn therefore multipy it with index
            const radius= 'calc(20vw - 1rem)';
            const x = `calc(${radius}*${Math.cos(anglerad)})`;
            const y = `calc(${radius}*${Math.sin(anglerad)})`;
            return <NavButton key={btn.label} x={x} y={y} {...btn}/>
        })
      }
    </div>
    </div>
    
  )
}

export default Navigation
