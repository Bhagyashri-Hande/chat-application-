import React, { useContext,useEffect,useState} from 'react'
import Chatfooter from './Chatfooter'
import Message1 from './Message1';
import { AccountContext } from '../context/Accountcontext'
import { getmessages, newmessage } from '../service/Api'

const Messages = ({person,conversation}) => {
  const [value,setvalue]=useState('')
  const {account}=useContext(AccountContext)
  const [Messages,setMessages]=useState([]);
  useEffect(()=>
  {
      const getmessagedetails=async()=>
      {
       const data=await getmessages(conversation._id)
       setMessages(data);
      }
      conversation._id && getmessagedetails(); 
  },[person._id,conversation._id]);
  

    const backimg=
    {
        backgroundImage:`url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
        backgroundSize:"cover",
        backgroundPosition: 'center',
    }
    const component=
    {
        height:"78.9vh",
        overflowY:"scroll",
        padding: '10px', 
    }
    
    const sendtext=async(e)=>
    {
      console.log(e)
       const code=e.keyCode || e.which;
       if(code===13)
       {
        // if (!conversation || !conversation._id) {
        //   console.error("Conversation or conversation ID is undefined.");
        //   return; // Exit the function early
        // }
         let message={
          senderId:account.sub,
          receiverID:person.sub,
          conversationId:conversation._id,
          type:'text',
          text:value
         }
        await newmessage(message)
        // console.log(message)
        setvalue("");
      //   const updatedMessages = await getmessages(conversation._id);
      // setMessages(updatedMessages); 
        
      }
      
    }
  return (
    <div style={backimg}>
        <div style={component}>
        {
          Messages && Messages.map((message,index)=>(
         <Message1 key={index} message={message}/>
          ))
        }
        </div>
        <Chatfooter sendtext={sendtext}
        setvalue={setvalue}
        value={value}
        />
       
    </div>
  )
}

export default Messages