import React from 'react'
import  Handshake  from '../assets/featureImages/handshake.svg';
import  Opportunities from "../assets/featureImages/new_opportunities.svg";
import  Man from "../assets/featureImages/thinking_man.svg"
import  Startup from "../assets/featureImages/start_ups.svg";
const FeatureSection = () => {

  const blogs = [
    {   
        id:1,
        title:"AI cannot build personal relationships.",
        description: "It can personalize and make someone an addict behind a digital interface (B2C), but wherever trust and people interaction is required (B2B), people will always win.",
        imgSrc:Handshake
    },
    {
        id:2,
        title:"AI cannot imagine new opportunities.",
        description: "As I write this in 2023, AI can execute, but not imagine. AI-Commerce era is an era of evolving business needs - you need to be constantly on the lookout for new opportunities. You can be sure that thousands of AI millionaires will be minted in the next 2 decades. You can be one of them. We will be discussing AI Business opportunities in this blog in detail.",
        imgSrc:Opportunities
    },
    {
        id:3,
        title:"AI cannot own a business or its profits.",
        description: "For now, only humans can lay claim to business profits. So own AI-driven businesses, use AI in the businesses for your advantage",
        imgSrc:Man
    },
    {
        id:4,
        title:"Manage the human element.",
        description: "Control your expectations - major disruption will come, and it might feel dire. And nothing might seem to work for you. But you have to manage yourself - see, most startups fail. You will have to have multiple attempts to succeed, and you will need to work hard, be nimble and humble to adapt. AI presents an uncertain new world with threats and opportunities like never before, so you will need to constantly learn, explore and experiment. But as I said above, there would be lots of exceptional opportunities during the next 20 years than ever before in the history of mankind. Use the below Principles of AI Commerce to explore opportunities for you.",
        imgSrc:Startup
    }
  ]

  return (
    <section className="md:mx-[120px] mx-[40px] items-center">
      <div className="my-[80px] py-[20px] px-[18px] bg-[#f3f8ff] text-[#1b1642] font-light rounded-[14px]">
        <p className="italic text-[18px]">This is not an answer cooked up by ChatGPT or via online research. <span className="font-semibold"> Below is my answer </span> - from a real person in the business of business automation, and it comes from my heart - it is an advice and <span className="font-semibold"> my viewpoint regarding what I see as the future of business. </span></p>
      </div>
      <div className="flex flex-wrap justify-center bg-[#1b1642] text-white py-[36px] px-[32px] rounded-[14px]">
       <h6 className="text-[20px] font-light">❝Elsewhere in this blog we have discussed that all industries will be "forced" to adapt to AI, and why humans cannot compete with AI. It may look all gloom and doom, but in fact, there's much going on under the surface, which presents entrepreneurs with opportunities to thrive in the AI-commerce era.❞</h6>
       <h4 className="text-[22px] font-semibold my-[24px]">Basically to thrive, these are the things you should keep in mind:</h4>
       <hr className="border-b-[1px] border-dotted w-[100%] mb-[80px]"/>
       {blogs.map((blog) => {
        return  <div className="flex flex-col justify-center gap-6 text-center" key={blog.id}>
       <div className="">
       <h2 className="text-[24px] font-bold py-[14px]">{blog.title}</h2> 
       <p className="text-[18px] font-thin">{blog.description}</p>
       </div>
       <div className="pt-[7px] w-[250px] mx-auto md:w-[200px]">
         <img className="rounded-[140px]" src={blog.imgSrc} alt=""/>
       </div>
       </div> 
       })}
      </div>
    </section>
  )
}

export default FeatureSection