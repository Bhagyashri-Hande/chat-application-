import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Chatheader from './Chatheader'
import Messages from './Messages'
import { AccountContext } from '../context/Accountcontext'
import { getConversation } from '../service/Api'
const Chatbox = () => {
  const{person,account}=useContext(AccountContext)
  const [conversation,setconversation]=useState({})
  useEffect(()=>
  {
       const getconversationDetails=async()=>
       {
           let data=await getConversation({senderId:account.sub,receiverID:person.sub})
           setconversation(data);
       }
       getconversationDetails(); 
  },[person.sub])
  return (
    <div>
        <Box>
            <Chatheader person={person}/>
            <Messages person={person} conversation={conversation}/>
        </Box>
    </div>
  )
}

export default Chatbox