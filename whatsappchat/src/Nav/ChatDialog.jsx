import { Box, Dialog } from '@mui/material'
import React from 'react'
import Menu from './Menu';
import Emptychat from './Emptychat';
import Chatbox from './Chatbox';
import { useContext } from 'react'
import { AccountContext } from '../context/Accountcontext';

const ChatDialog = () => {
    const dialogstyle=
    {
        height:"95%",
        width:"100%",
        maxWidth:"100%",
        maxHeight:"100%",
        borderRadius:"0%",
        marginTop:"2%",
        boxShadow:"none",
        // overflow:"hidden",

        // "@media (max-width: 768px)":
        // {
        //     height:"90%",
        //     marginTop:"22%",
        //     width:"88%",
        // }
    }
    const box=
    {
        display:"flex",
    }
    const leftbox=
    {
        minWidth:"450px"
    }
    const rightbox=
    {
        minWidth:"68%",
        borderLeft:"1px solid black",
        height:"94vh",
    }
    const {person}=useContext(AccountContext)
  return (
    <div>
        <Dialog
        open={true}
        PaperProps={{sx:dialogstyle}}
        hideBackdrop={true}
        maxWidth={'md'}
        >
          <Box style={box}>
            <Box style={leftbox}>
           <Menu/>
            </Box>
            <Box style={rightbox}>
            {/* <Emptychat/> */}
            {/* <Chatbox/> */}
            {Object.keys(person).length?<Chatbox/>:<Emptychat/>}
            </Box>
        </Box>
        </Dialog>
        
        
    </div>
  )
}

export default ChatDialog