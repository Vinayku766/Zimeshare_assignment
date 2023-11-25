import React from 'react';
import Angry from "../assets/emojis/angry.png";
import Funny from "../assets/emojis/funny.png";
import Love from "../assets/emojis/love.png";
import Sad from "../assets/emojis/sad.png";
import Excellence from "../assets/emojis/excellence.png";
import Surprised from "../assets/emojis/surprised.png";

//Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const Contact = () => {
    
    const emojis = [
        {
            emoji:Excellence,
            vote:5,
            emojiName:"Upvote"
        },
        {
            emoji:Funny,
            vote:5,
            emojiName:"Funny"
        },
        {
            emoji:Love,
            vote:4,
            emojiName:"Love"
        },
        {
            emoji:Surprised,
            vote:2,
            emojiName:"Surprised"
        },
        {
            emoji:Angry,
            vote:0,
            emojiName:"Angry"
        },
        {
            emoji:Sad,
            vote:4,
            emojiName:"Sad"
        }
    ]
  

  return (
    <section className="md:mx-[120px] mx-[40px]">
        <div className="text-center py-[40px]">
        <h1 className="text-[20px] font-bold font-[#1b1642]">What do you think?</h1>
        <p className="text-[18px] font-[#1b1642]">20 Responses</p>
        </div>
        <div className="text-center flex flex-row justify-center gap-8 px-[24px] py-[18px] mx-[24px]">
           {emojis.map((emoji, id) => {
             return <div className="flex flex-col cursor-pointer hover:text-[#6658ea] hover:border-[1px] hover:border-[#6658ea] py-[4px] px-[6px] rounded-[7px]" key={id}> <img className="w-[60px] mx-auto" src={emoji.emoji} alt="emoji"/>
           <h2>{emoji.vote}</h2>
           <p>{emoji.emojiName}</p></div>
           })}
        </div>
        <div className="flex flex-row justify-between pt-[40px]">
            <h2 className="text-[18px] font-semibold">0 Comments</h2>
            <div className="flex flex-row gap-6">
               <span className="font-semibold text-[18px]">Login</span>
               <div className="flex flex-row gap-4">
               <FacebookIcon className="hover:text-[#eee] text-[#1b1642] cursor-pointer" />
               <TwitterIcon className="hover:text-[#eee] text-[#1b1642] cursor-pointer" />
               <GoogleIcon className="hover:text-[#eee] text-[#1b1642] cursor-pointer" />
               </div>
            </div>
        </div>
        <hr className="border-t-[3px] w-[100%] my-[20px]"/>
        <div className="relative my-[20px]">
        <h2 className="text-center my-[10px] text-[#1b1642]">be the first to comment.</h2>
            <form>
                <textarea className="w-[100%] outline-0 border-[1px] py-[7px] px-[10px] rounded-[14px] h-[120px] overflow-hidden" cols="10" rows="20" placeholder="Comment Here..."/>
                <button type="submit" className="bg-[#6658ea] py-1 px-2 rounded-[7px] my-4 text-[#fff]">Submit</button>
            </form>
            <div className="flex flex-row gap-4 absolute right-2 bottom-6">
               <p className="font-semibold">Or login using </p>
               <FacebookIcon className="hover:text-[#eee] text-[#1b1642] cursor-pointer" />
               <TwitterIcon className="hover:text-[#eee] text-[#1b1642] cursor-pointer" />
               <GoogleIcon className="hover:text-[#eee] text-[#1b1642] cursor-pointer" />
            </div>
        </div>
    </section>
  )
}

export default Contact