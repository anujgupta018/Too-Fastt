import React from 'react'
import {motion} from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} exit={{opacity:0,y:100}} transition={{duration:0.5,delay:0.5,ease:'easeInOut'}}
    className='bg-gradient-to-r from-yellow-500 to-black bg-yellow-500 text-gray shadow-md fixed top-0 w-full z-10 flex p-8'></motion.nav>
  )
}
