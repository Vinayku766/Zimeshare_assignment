import React from 'react'
import Pacman from "../assets/heroImage/pacman.svg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-[#1b1642] px-[80px] md:min-h-[460px] rounded-b-[14px] py-[24px]">
      <div className="flex flex-col gap-2 py-[3rem] pl-[10px] md:pl-[65px] w-[100%]">
       <h6 className="text-[#f5c070] md:text-[18px]  text-uppercase tracking-wider font-semibold">EXPLORE & THRIVE WITH AI <KeyboardArrowRightIcon className="text-[#ccc] mb-[4px]"/>HOW TO USE AI FOR BUSINESS SUCCESS </h6>
       <h1 className="text-white md:text-[36px]  text-[36px] font-bold">How to use AI for Business Success !</h1> 
       <p className="text-[#cccccc86]  md:text-[24px] text-[18px]">Our times are, fortunately or unfortunately, about to get very interesting. In this blog we unveil how you can win in the upcoming golden dawn of AI!</p>
       </div>
       <div className="w-[100%] pb-[40px] mb-[20px] md:my-auto ">
        <img className="w-[160px] md:w-[240px] rounded-[40%] md:ml-[100px]" src={Pacman} alt=""/>
       </div>
    </section>
  )
}

export default HeroSection