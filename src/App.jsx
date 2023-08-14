import { Box } from '@chakra-ui/react'
import './App.css'
import ChatInput from './Components/ChatInput.jsx'
import ChatMessage from './Components/ChatMessage.jsx'
import { useState } from 'react'
import ScrollToBottom from "react-scroll-to-bottom"


function App() {
  const [ message, setMessage ] = useState([])

  return (
    <Box position="relative" width="76vw" p="1rem" height="90vh" left="12vw" boxShadow='0px 0px 5px gray'>
        <Box height="70%" overflowY="scroll">
        <ScrollToBottom>
            <ChatMessage data = {message} setMessage={setMessage} />
        </ScrollToBottom>
        </Box>
        <Box height="10%">
          <ChatInput setMessage={setMessage}/>
        </Box>
    </Box>
  )
}

export default App
