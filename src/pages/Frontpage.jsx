import React from 'react'
import {motion,AnimatePresence} from "framer-motion"
import { useNavigate } from 'react-router-dom'
import f1Car from "../assets/f1Car.png"

export default function Frontpage() {
  const navigate=useNavigate();
  const whileClick=()=>{
    console.log("Begin!!")
    navigate('/challenge');
  }
  return (
    <>
      <div className='flex items-center justify-center flex-col h-full bg-gradient-to-r from-red-600 to-black'>
        <div className='flex mt-20'>
        <motion.h2 initial={{y:-50,opacity:0,scale:0.5}} animate={{y:0,opacity:1,scale:1 }} transition={{
          type:'spring',
          stiffness:300,
          duration:0.5
        }}className='text-5xl text-white p-5 font-bold '>Are you fast Enough??</motion.h2>
        </div>

        <motion.button 
        onClick={whileClick}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          initial={{ x:'-100vw'}}
          animate={{ x:0}}
          transition={{ type:'spring',stiffness:200}}
        className='mt-10 px-6 bg-yellow-500 text-lg font-semibold hover:bg-yellow-800 text-black py-2  rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-out'>🚦 Lights Out and Away We Go! 🚀</motion.button>
        
        <motion.img
          src={f1Car}
          className='absolute right-10 w-96 z-0'
          whileHover={{scale:1.1}}
          initial={{x:'100vw',rotate:350,opacity:0}}
          animate={{x:0,rotate:350,opacity:1}}
          exit={{x:'-100vw',rotate:350,opacity:0}}
          transition={{type:'spring',stiffness:100,damping:15}}
        />
      </div>
    </>
  )
}
