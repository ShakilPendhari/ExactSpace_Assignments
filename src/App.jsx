import { Box } from '@chakra-ui/react'
import './App.css'
import ChatInput from './Components/ChatInput.jsx'
import ChatMessage from './Components/ChatMessage.jsx'


function App() {

  return (
    <Box position="relative" width="76vw" p="1rem" height="90vh" left="12vw" border="1px solid red">
        <ChatMessage/>
        <ChatInput/>
    </Box>
  )
}

export default App
