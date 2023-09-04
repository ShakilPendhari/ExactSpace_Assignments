
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import ScrollToBottom from "react-scroll-to-bottom"

const ChatMessage = ({data,setMessage}) => {

  const handleLike = (index)=>{
    let newData = [...data];
    newData[index].like = newData[index].like + 1; 
      setMessage(newData)
  }

  return (
   <Box pr="1rem" >
        {
          data.length>0 && data.map((el,i)=>(
            <Box p="1rem" mb="0.5rem" borderRadius="10px" border="1px solid green" width={{base:"40%",sm:"30%",md:"20%"}} key={i} textAlign="center">
              <Flex alignItems="center" background="rgb(210, 242, 94)" border="2px solid red" borderRadius="7px">
                 <Heading width="50%" as="h4" fontSize="1.1rem" flex="4">{el.msg}</Heading>
                 <Box  position="relative">
                 <Button onClick={()=>handleLike(i)}>Like</Button>
                 <span style={{
                  position:"absolute",
                  top:"-0.2rem",
                  right:"0.1rem",
                  flex:1
                 }}>{el.like}</span>
                 </Box>
              </Flex>
                <Text>{el.userName}</Text>
            </Box>
          ))
        }
   </Box>
  )
}

export default ChatMessage