import React, { useState } from 'react'
import { IoMdMore } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
// import Settings from './../settings/Settings';
const Headermenu = () => {
   const [open,setopen]=useState(null)
  //  const [opendrawer,setopendrawer]=useState(false)
   const handleClose=()=>
   {
      setopen(null)
   }
   const handleclick=(e)=>
   {
      setopen(e.target)
   }
   const menuoption=
   {
      fontSize:"14px",
      padding:"15px,60px,5px,24px",
      color:"#4A4A4A",
      
   }
  //  const menuicon=
  //  {
  //     fontSize:"20px",
  //     display:"flex",
  //     marginLeft:"auto",
  //     // marginRight:"20px",
  //     marginTop:"-20px"
  //  }
  return (
    <div>
        <IoMdMore onClick={handleclick}/>
        <Box>
        <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
       
      > 
        <MenuItem onClick={handleClose} style={menuoption}>New group</MenuItem>
        <MenuItem onClick={handleClose} style={menuoption}>New community</MenuItem>
        <MenuItem onClick={handleClose} style={menuoption}>Starred message</MenuItem>
        <MenuItem onClick={handleClose} style={menuoption}>Select chats</MenuItem>
        <MenuItem onClick={handleClose} style={menuoption} >Settings</MenuItem>
        {/* <Settings open={opendrawer} setopen={setopendrawer}/> */}
        <MenuItem onClick={handleClose} style={menuoption}>Log out</MenuItem>

       
        
      </Menu>
        </Box>
    </div>
  )
}

export default Headermenu