import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <header className="">
      <div className="min-h-[3px] relative">
        <div className="absolute left-0 bg-[#575a7b] w-[20%] min-h-full"></div>
        <div className="absolute left-[20%] bg-[#f9655b] w-[20%] min-h-full"></div>
        <div className="absolute left-[40%] bg-[#f5c070] w-[20%] min-h-full"></div>
        <div className="absolute left-[60%] bg-[#6658ea] w-[20%] min-h-full"></div>
        <div className="absolute left-[80%] bg-[#fcc] w-[20%] min-h-full"></div>
      </div>
      <div className="bg-[#1b1642] flex flex-row justify-between py-[24px] px-[65px] md:px-[160px] text-white">
      <div className="py-[7px]">
        <img className="h-[25px]" src="https://biz.bot/bizbot-logo-dark.svg" alt="logo-image"/>
      </div>
      <div className="">
      <div className="hidden md:block">
      <ul className="flex flex-row gap-[60px] text-[18px] text-center py-[9px] px-[16px]">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">SignIn</li>
        <li className="cursor-pointer hover:text-blue-600">Register</li>
        <li className="cursor-pointer hover:text-blue-600">+</li>
       </ul>
       </div>
       <div className="md:hidden">
       {activeMenu ? <MenuIcon className={`mr-[14px] cursor-pointer`} onClick={() => setActiveMenu(false)}/>:<>
       <CloseIcon className="ml-[30px] cursor-pointer" onClick={() => setActiveMenu(true)}/>
       <ul className={`flex flex-col gap-8 text-[18px] text-center py-[7px] mt-[18px]`}>
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">SignIn</li>
        <li className="cursor-pointer hover:text-blue-600">Register</li>
        <li className="cursor-pointer hover:text-blue-600">+</li>
       </ul>
       </>}
       </div>
      </div>
      </div>
    </header>
  )
}

export default Header