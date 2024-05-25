import React, { useContext, useState } from 'react'
import { Box} from '@mui/material'
import { AccountContext } from '../context/Accountcontext'
// import Conversation from './Conversation';
import { setConversation } from '../service/Api';
const Conversation = ({user}) => {
    const main=
    {
         display:"flex",
         height:"50px",
         cursor:"pointer",
         padding:"13px 0px ",
         marginBottom:"20px",
    }
    const img=
    {
        width:"45px",
        height:"45px",
        borderRadius:"50%",
        // padding:"0px 14px ",
        marginLeft:"15px",
        gap:"20px",
    }
    const name=
    {
        marginLeft:"10px",
    }
    const{setperson,account}=useContext(AccountContext)
    // const [conversation,setConversation]=useState()
    const getuser=async()=>
    {
         setperson(user);
         await setConversation({senderId:account.sub,receiverID:user.sub})
    }
  return (
    // <div>
    <Box style={main} onClick={()=>getuser()}>
       <Box >
         <img src={user.picture} alt="" style={img}/>
       </Box>
       <Box style={name}>
       <p>{user.name}</p>
       </Box>
    </Box>

    // </div>
  )
}

export default Conversation