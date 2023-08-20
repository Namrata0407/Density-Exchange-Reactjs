import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const boxVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    raised: { opacity: 1, x: 0, rotate: -5, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Box
        width={"60%"}
        margin={"auto"}
        mt={"55px"}
        position="relative"

      >
        <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
          {() => (
            <Flex alignItems="center" gap={"23px"}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : -100,
                }}
                transition={{ duration: 0.8 }}
                style={{ position: "relative", left: 0 }}
              >
                <Heading>Does this sound familiar...</Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : "100%",
                }}
                transition={{ duration: 0.8 }}
                style={{ position: "relative", left: isVisible ? 0 : "100%" }}
              >
                <Image
                  src="/Images/img1.png"
                  alt="img1"
                  height={"60px"}
                  width={"50px"}
                />
              </motion.div>
            </Flex>
          )}
        </VisibilitySensor>
      </Box>

      <Flex
        margin={"auto"}
        width={"70%"}
        mt={"60px"}
        justifyContent={"space-between"}
        gap={"5px"}
      >
        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <Box
            bgColor={"#D8F2FF"}
            borderRadius={"7px"}
            padding={"30px"}
            mr={"18px"}
          >
            😊
            <Text color={"black"} fontSize={"15px"} fontWeight={"bold"}>
              You argue with a colleague
            </Text>
            <Text fontSize={"12px"}>
              You get angry and defensive, instead of staying open and working
              towards common grounds.
            </Text>
          </Box>
        </motion.div>

        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <Box
            bgColor={"#EEEBFE"}
            borderRadius={"7px"}
            padding={"30px"}
            mr={"18px"}
          >
            😀
            <Text color={"black"} fontSize={"15px"} fontWeight={"bold"}>
              You argue with a colleague
            </Text>
            <Text fontSize={"12px"}>
              You get angry and defensive, instead of staying open and working
              towards common grounds.
            </Text>
          </Box>
        </motion.div>

        <motion.div
          variants={boxVariants}
          initial="hidden"
          // animate={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "raised" : "null"}
          // whileHover="raised"
        >
          <Box
            bgColor={"#6341EF"}
            borderRadius={"7px"}
            padding={"30px"}
            mr={"18px"}
          >
            🤨
            <Text color={"black"} fontSize={"15px"} fontWeight={"bold"}>
              You argue with a colleague
            </Text>
            <Text fontSize={"12px"}>
              You get angry and defensive, instead of staying open and working
              towards common grounds.
            </Text>
          </Box>
        </motion.div>

        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <Box
            bgColor={"#FFEFD5"}
            borderRadius={"7px"}
            padding={"30px"}
            mr={"18px"}
          >
            😮
            <Text color={"black"} fontSize={"15px"} fontWeight={"bold"}>
              You argue with a colleague
            </Text>
            <Text fontSize={"12px"}>
              You get angry and defensive, instead of staying open and working
              towards common grounds.
            </Text>
          </Box>
        </motion.div>
      </Flex>
    </>
  );
};

export default Slider;
