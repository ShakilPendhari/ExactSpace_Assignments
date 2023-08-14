import { Box } from '@chakra-ui/react'
import './App.css'
import ChatInput from './Components/ChatInput.jsx'
import ChatMessage from './Components/ChatMessage.jsx'
import { useState } from 'react'


const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];


function App() {
  const [ message, setMessage ] = useState([])

  return (
    <Box position="relative" width="76vw" p="1rem" height="90vh" left="12vw" border="1px solid red">
        <Box height="80%" overflow="scroll">
            <ChatMessage data = {message} />
        </Box>
        <Box height="10%">
          <ChatInput setMessage={setMessage}/>
        </Box>
    </Box>
  )
}

export default App
