import React, { useEffect, useState } from 'react'
import { getUser } from '../service/Api'
import Conversation from './Conversation'
import { Box ,Divider} from '@mui/material'
// import { AccordionContext } from 'react-bootstrap'

const Conversations = ({text}) => {
  const [user,setuser]=useState([])
  // const {account}=useContext(AccordionContext)
  useEffect(()=>
  {
    const fetchdata=async()=>
    {
       const res=await getUser();
       const filterdata=res.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
       setuser(filterdata);
    }
    fetchdata()
  },[text])
  const styledivider=
  {
    margin:"0 0 0 70px",
    backgroundColor:"rgba(0 0 0 0.3)",
    opacity:"10px",
  }
  return (
    <Box>
      {user.map(user => (
        // user.sub!==account.sub &&
        <>
        <Conversation user={user}/>
        <Divider style={styledivider}/>
        </>
      ))}
      
    </Box>
   
  )
}

export default Conversations