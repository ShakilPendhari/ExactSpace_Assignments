
import { Box, Flex, Text } from "@chakra-ui/react"
import ScrollToBottom from "react-scroll-to-bottom"

const ChatMessage = ({data}) => {
  return (
   <Box pr="1rem" >
        <ScrollToBottom>
        {
          data.length>0 && data.map((el,i)=>(
            <Box border="1px solid green" width="20%" key={i} textAlign="right">
                <Text>{el.msg}</Text>
                <Text>{el.userName}</Text>
                <Text>{el.like}</Text>
            </Box>
          ))
        }
        </ScrollToBottom>
   </Box>
  )
}

export default ChatMessage