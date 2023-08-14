import {
  Box,
  Flex,
  Input
} from "@chakra-ui/react";
import { MdSend } from "react-icons/md";
import Picker from "emoji-picker-react";
import { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";

const ChatInput = () => {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker,setShowEmojiPicker] = useState(false);

 const handleShowEmoji = ()=>{
   setShowEmojiPicker(!showEmojiPicker)
 }

  const handleEmojiClick = (event, emojiObject) => {
    if (event.emoji) {
      let message = msg;
      message += event.emoji;
      setMsg(message);
    }
    if (emojiObject.emoji) {
      let message = msg;
      message += emojiObject.emoji;
      setMsg(message);
    }
  };

  return (
    <Box
    onDoubleClick={()=>setShowEmojiPicker(false)}
      p="1.5rem"
      background="linear-gradient(45deg,rgb(254, 223, 181),rgb(246, 198, 136))"
      position="absolute"
      bottom="0rem"
      left="0rem"
      width="100%"
    >
      <Flex gap="1rem" width="80%" m="auto" alignItems="center">
      <Box pos="relative">
               <Box position="absolute" bottom="-1.2rem" left="-2rem" >
               <BsEmojiSmileFill size="2.25rem" fill="blue"  onClick={handleShowEmoji}/>
               </Box>
                {showEmojiPicker && <Box position="absolute" bottom="5rem" left="1rem">
                  <Picker onEmojiClick={handleEmojiClick}/>
                </Box> }
            </Box>
        {/* <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} /> */}
        <Flex
          flex="1"
          borderRadius="50%"
          width="2.4rem"
          height="2.5rem"
          background="linear-gradient(rgb(80, 183, 246),rgb(123, 123, 245))"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          p="0.4rem"
        >
          <Box fontWeight="700">@</Box>
        </Flex>
        <Input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          flex="12"
          _focus={{ border: "none" }}
          m="0rem"
          _placeholder={{ color: "red" }}
          placeholder="Message..."
          background="linear-gradient(rgb(183, 183, 246),rgb(123, 123, 245))"
        />
        <Flex
          flex="1"
          borderRadius="50%"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          p="0.5rem"
          background="linear-gradient(rgb(183, 183, 146),rgb(123, 123, 100))"
          height="2.2rem"
        >
          <MdSend color="gray.300" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ChatInput;
