import { Box } from "@chakra-ui/react";
import React from "react";

const VideoComponent = () => {
  return (
    <>
      <Box
        bgColor={"#EDEBFD"}
        width={"68%"}
        margin={"auto"}
        padding={"40px"}
        mb={"35px"}
        borderRadius={"10px"}
        mt={"40px"}
        paddingTop={"60px"}
        paddingBottom={"60px"}
      >
        <Box width="950px" margin={"auto"}>
          <video controls width="100%">
            <source src="/densityExchange.mp4" type="video/mp4" />
            <source src="/densityExchange.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>
    </>
  );
};

export default VideoComponent;
