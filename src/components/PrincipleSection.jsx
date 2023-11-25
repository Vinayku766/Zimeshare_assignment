import React from 'react'
import principle_2 from "../assets/principle_images/principle_2.svg";
import principle_3 from "../assets/principle_images/principle_3.svg";

const PrincipleSection = () => {

   const principles = [
    {   
        id:1,
        title: "AI Commerce = Evolutionary Game",
        content: "This is quite an old video by OpenAI, but it amply shows the evolution of bots by repeating a game. Winning strategies are formed by each side, until the other side learns to counteract them.Please understand that this is the future of AI-driven businesses: Commerce is a multi-player game, and AI Bots are perfect to automate and disrupt them, and turn it into an evolutionary game - by learning using each interaction. Profits become a 'score' in this world! They are reflected in bank accounts instead of a scoreboard. This is a video game which has real-world consequences: it is the complete digitization of commerce",
        imgSrc:"https://biz.bot/game.jpeg",
        imgDesc: "'Business' is about to become an 'evolving video game' which bots play among themselves."
    },
    {   
        id:2,
        title: "Primary Business Activity in AI Commerce = Helping your bot succeed!",
        content: "The key to winning in the era of Automated Commerce / AI-driven business world is to invest time, money and effort in enabling your bots with the right tools to evolve higher and win more. The more your bot evolves, the more 'money games' it can win, the more the credits in your bank account.You can train your AI only with actual simulations, and interactions with the real world. Data and Time are the two critical factors for it to evolve, until it is an acute disadvantage (it is playing with very evolved bots, in which case it might cost too much 'money' to train the AI)",
        imgSrc:principle_2,
        imgDesc: "When AI does all the work, what will people do? People will work on their AI to help it earn more!"
    },
    {   
        id:3,
        title: "A Headstart = Immense Value.",
        content: "In the above principle you saw how AI-driven business world / AI-Commerce will evolve - via real-time competition of bots, by learning through various interactions with the real-world, to maximize the goal of profit maximization in business. But did you notice the immense financial value of a HEADSTART in this evolutionary game? How much would you invest to EVOLVE your bot up a few notches? No need to invest money - you can get BizBot for free. You need to invest time and effort TODAY to help it learn enough that your BizBot is able to compete by itself against the best in the world by 2027.",
        imgSrc:principle_3,
        imgDesc: "The BIGGEST FAVOR you can do for yourself today is to give your business a HEADSTART in AI Evolution. Give it the data, time and the attention it deserves."
    },
   ]


  return (
    <section className="md:mx-[120px] mx-[40px] py-[60px]">
    <div className="my-[40px] bg-[#f3f8ff] py-[40px] px-[24px] rounded-[12px] italic font-light text-[18px]">
          <h2>Now here are some important PRINCIPLES OF AI-COMMERCE for you to understand, so you have the upper hand over competition:</h2>
        </div>
    {principles.map((principle) => {
      return<div key={principle.id}> 
        <div className="flex flex-col md:flex-row gap-4 mx-auto py-[60px]">
        <div className="flex flex-col gap-3.5 md:w-[50%]">
           <h1 className="text-[26px] text-[#1b1642] font-bold text-center md:text-left py-[12px]">Principle {principle.id} <br/> {principle.title}</h1>
           <p className="text-[18px] text-center md:text-left">{principle.content}</p>
           </div>
           <div className="flex flex-col gap-4 justify-center w-[50%] text-center mx-auto py-[20px]">
           {principle.id === 1 ? <iframe src="https://www.youtube.com/embed/kopoLzvh5jY?si=hbVNz8WxyMT_0MRF" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" width="100%" height="100%" controls="controls" autoPlay={1}/>:null}
           <h4 className="text-[16px] italic shadow-[#f3f8ff]">{principle.imgDesc}</h4>
           </div>
        </div>
        </div>
    })} 
    <div className="bg-[#6658ea] text-[#fff] py-[40px] px-[30px] rounded-[14px] leading-8">
      <h1 className="text-[22px] font-semibold">Only businesses that start with AI in 2024, can be AI-driven by 2027.<br/>Only businesses that are AI-driven in 2027, survive till 2030.
      Why? Evolution!</h1>
    </div>
    <div className="mt-[40px] bg-[#f3f8ff] py-[18px] px-[22px] rounded-[14px]">
    <h2 className="text-[18px] font-semibold">What did we learn above? Summary</h2>
     <ul className="mt-[12px]">
      <li className="text-[14px] mt-[8px]">1. Now you understand how AI-driven business world / AI-Commerce will evolve.</li>
      <li className="text-[14px] mt-[8px]">2. Now you understand the value of a headstart</li>
      <li className="text-[14px] mt-[8px]">3. Now you know HOW to give your business a headstart</li>
     </ul>
     </div>
    </section>
  )
}

export default PrincipleSection