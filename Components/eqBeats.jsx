import { Box, Flex } from "@chakra-ui/react";
const EQbeats = () => {
  return (
    <div>
      <Flex
        width={"60%"}
        margin={"auto"}
        justifyContent={"space-evenly"}
        mt={"55px"}
      >
        <Box
          w={"30%"}
          fontSize={"25px"}
          textAlign={"start"}
          color={"black"}
          fontWeight={"bold"}
        >
          EQ beats IQ
        </Box>

        <Box w={"30%"} fontSize={"17px"} textAlign={"start"} color={"#0d0c22"}>
          People with heigh emotional intelligence (EQ) live more fulfilled
          lives. They tend to be happier and have healthier relationships.
        </Box>

        <Box w={"30%"} fontSize={"17px"} textAlign={"start"} color={"#0d0c22"}>
          They are more successful in their pursuits and make for inspiring
          leaders. According to science, they earn $29k a year.
        </Box>
      </Flex>
    </div>
  );
};

export default EQbeats;
