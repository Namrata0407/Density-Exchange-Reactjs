import { Box, Flex, Text } from "@chakra-ui/react";
const Text2Message = () => {
  return (
    <div>
      <Flex
        width={"60%"}
        margin={"auto"}
        justifyContent={"space-evenly"}
        mt={"55px"}
        padding={"10px"}
      >
        <Box w={"30%"}>
          <Text
            fontSize={"25px"}
            textAlign={"start"}
            color={"black"}
            fontWeight={"bold"}
          >
            Be the best you
          </Text>
          <Text
            fontSize={"25px"}
            textAlign={"start"}
            color={"black"}
            fontWeight={"bold"}
          >
            with EQ
          </Text>
        </Box>

        <Box w={"30%"} fontSize={"17px"} textAlign={"start"} color={"#0d0c22"}>
          Not having your own emotions under control might be holding you back.
        </Box>

        <Box w={"30%"} fontSize={"17px"} textAlign={"start"} color={"#0d0c22"}>
          Not having your own emotions under control might be holding you back.
        </Box>
      </Flex>
    </div>
  );
};

export default Text2Message;
