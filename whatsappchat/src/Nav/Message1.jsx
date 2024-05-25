import React from 'react'
import { Box } from '@mui/material';

const Message1 = ({message}) => {
  return (
    <Box>
        <p>{message.text}</p>
        <p>{message.createdAt}</p>
    </Box>
  )
}

export default Message1