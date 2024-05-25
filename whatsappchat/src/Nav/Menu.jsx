import { Box } from '@mui/material'
import React, { useState } from 'react'
import Header from './Header'
import Search from './Search'
import Conversations from './Conversations'

const Menu = () => {
  const [text,settext]=useState("")
  return (
    <div>
        <Box>
            <Header/>
            <Search settext={settext}/>
            <Conversations text={text}/>
        </Box>
    </div>
  )
}

export default Menu