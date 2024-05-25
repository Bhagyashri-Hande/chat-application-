import React, { useContext, useState } from 'react'
import { AccountContext } from '../context/Accountcontext'
// import img from '../icon.png' 
import { Box } from '@mui/material'
import { IoDiscOutline } from "react-icons/io5";
import { LuMessageSquarePlus } from "react-icons/lu";
// import Headermenu from './Headermenu';
import Profile1 from '../Profile/Profile1';
import img from './chat-logo.png'
// import Settings from './../settings/Settings';
const Header = () => {
    const {account}=useContext(AccountContext)
    const [opendrawer,setopendrawer]=useState(false)
    // const [draweropen,setdraweropen]=useState(false)
    const toggledrawer=()=>
    {
      setopendrawer(true)
    }
    const header=
  {
    boxShadow:"none",
    height:"60px",
    backgroundColor:"#ededed",
    padding:"15px",
    display:"flex",
  }
  const icon=
  {
    marginLeft:"auto",
    // marginRight:"40px",
  }
  const iconchild=
  {
     marginLeft:"30px",
     fontSize:"20px",
  }
//  const image=
//  {
//      width:"30px",
//      height:"30px",
//      borderRadius:"50%",
//  }
  return (
    <div>
        <Box style={header}>
          {/* <div style={image}> */}
        <img src={img} alt="" style={{borderRadius:"50%",height:"40px",width:"40px",marginTop:"-9px"}} height={"30px"} onClick={toggledrawer}/>
          {/* </div> */}
        
        <Box style={icon}>
        
        <IoDiscOutline style={iconchild}/>
        <LuMessageSquarePlus style={iconchild}/>
        {/* <Headermenu style={iconchild}/> */}
       
        </Box>
        </Box>
        <Profile1 open={opendrawer} setopen={setopendrawer}/>
        {/* <Settings open={draweropen} setopen={setdraweropen}/> */}
    </div>
  )
}

export default Header