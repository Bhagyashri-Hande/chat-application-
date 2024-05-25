import React from 'react';
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { GoPaperclip } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa";
import './chatfooter.css'; 

const Chatfooter = ({sendtext,setvalue,value}) => { 
  // const [text,settext]=useState("")
  return (
    <div className="chat-footer-container">
      <MdOutlineEmojiEmotions style={{fontSize:"25px"}}/>
      <GoPaperclip style={{fontSize:"22px"}}/>
      <input type="text" placeholder='Type a message' className="search-bar" onChange={(e)=>setvalue(e.target.value)} onKeyPress={(e)=>sendtext(e)}
      value={value}
      />
      <FaMicrophone style={{fontSize:"20px"}}/>
    </div>
  );
};

export default Chatfooter;
