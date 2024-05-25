// import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { FiMoreVertical } from "react-icons/fi";
import { AccountContext } from '../context/Accountcontext';
// import {defaultProfilePicture} from './../content/data';
const Chatheader = () => {
    const mainbox=
    {
        height:"58px",
        background:"#ededed",
        padding:"8px 16px",
        display:"flex",
        alignItems:"center",
        lineHeight:"6px",
        
    }
    const img=
    {
        height:"40px",
        width:"40px",
        borderRadius:"50%",
    }
    const name=
    {
        marginLeft:"15px",
        marginTop:"15px",
        
    }
    const status=
    {
        marginLeft:"15px",
        fontSize:"13px",
        color:"rgba(0,0,0,0.6)",
    }
    const rightcontainer=
    {
        marginLeft:"auto",
        paddingRight:"10px",
    }
    // const icon=
    // {
    //        paddingRight:"10px",
    // }
    const {person}=useContext(AccountContext)
  return (
    <div style={mainbox}>
        <img src={person.picture} alt="" style={img}/>
        <div>
            <p style={name}>{person.name}</p>
            <p style={status}>Online</p>
        </div>
        <div style={rightcontainer}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <FiMoreVertical/>
        </div>
    </div>
  )
}

export default Chatheader