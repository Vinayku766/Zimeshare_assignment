import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const year = new Date().getFullYear();
    const links = [
     {
      title: "Tech",
      link1:"GitHub Repo",
      link2: "Documentation"
     },
     {
      title: "General",
      link1: "About Us",
      link2: "Contact Us"
     },
     {
      title: "Legal",
      link1:"Privacy",
      link2: "Terms of Use"
     }
    ]
  return (
    <footer className="bg-[#1b1642] px-[60px] py-[40px]">
     <div className="flex flex-col gap-8 py-[24px] px-[22px]">
      <div className="">
      <img className="w-[180px]" src="https://biz.bot/bizbot-logo-dark.svg" alt="logo"/>
      <h2 className="text-[#ccc] text-[24px]">AI Business Assistant</h2>
      </div>
      <div className="flex sm:flex-row flex-col justify-between py-[40px]">
      {links.map((link, id)=> {
      return  <ul className="text-[18px] my-[12px] sm:my-0" key={id}>
         <li className="text-[#fff] py-[10px] font-semibold uppercase">{link.title}</li>
         <li className="text-[#ccc] cursor-pointer py-[10px] hover:text-[#fff]">{link.link1}</li>
         <li className="text-[#ccc] cursor-pointer py-[10px] hover:text-[#fff]">{link.link2}</li>
        </ul>
    })}
     </div>  
     </div>
     <hr className="border-t-[1px] border-dotted"/>
    <div className="flex flex-col sm:flex-row gap-8 py-[40px] justify-center">
        <ul className="flex flex-row justify-center gap-4 flex-wrap">
            <li className="text-[#ffffff32]">@{year} Zimeshare Technologies</li>
            <li className="text-[#ffffff32] cursor-pointer hover:text-[#ffffff7e]">Privacy Policy</li>
            <li className="text-[#ffffff32] cursor-pointer hover:text-[#ffffff7e]">Terms of Service</li>
        </ul>
        <div className="flex flex-row gap-4 text-[#ccc] justify-center">
         <YouTubeIcon className="hover:text-[#fff] cursor-pointer" />
         <GitHubIcon className="hover:text-[#fff] cursor-pointer"/>
         <TwitterIcon className="hover:text-[#fff] cursor-pointer"/>
         <LinkedInIcon className="hover:text-[#fff] cursor-pointer"/>
        </div>
    </div>
    </footer>
  )
}

export default Footer