import React from 'react'
import Login from '../login/Login'
import { AppBar,Box,Toolbar } from '@mui/material'
import { useContext } from 'react';
import { AccountContext } from '../context/Accountcontext';
import ChatDialog from '../Nav/ChatDialog'
import '../Nav/Nav1.css'
const Messanger = () => {
const loginheader=
{
    boxShadow:"none",
    height:"200px",
    backgroundColor:"#00bfa5",
}
const header=
{
    boxShadow:"none",
    height:"150px",
    backgroundColor:"#00bfa5",
}

const box=
{
    height:"100vh",
    backgroundColor:"#DCDCDC",
}

const {account}=useContext(AccountContext)
  return (

    <div>
        <Box style={box}>
            {
                account?<>
                <AppBar style={header}>
                    <Toolbar>

                    </Toolbar>
                </AppBar>
                <ChatDialog/>
                </>
                :
           <>
           <AppBar style={loginheader}>
               <Toolbar>
   
               </Toolbar>
           </AppBar>
           <Login/>
           </> 
            }
        </Box>
    </div>
  )
}

export default Messanger