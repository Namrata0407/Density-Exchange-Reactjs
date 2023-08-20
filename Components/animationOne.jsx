import { Box, border, Image, Flex, Text, Heading } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import InnerDiv from "./innerDiv";

const AnimationOne = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Flex
      className="rotating-container"
      ref={containerRef}
      borderRadius={"12px"}
      w={"65%"}
      m={"auto"}
      pl={"40px"}
      pr={"40px"}
      mt={"40px"}
    >
      <Box h={"100%"} w={"50%"} overflow={"hidden"}>
        <Box
          ml={"200px"}
          className="rotate"
          w={"150px"}
          h={"23px"}
          mt={"25px"}
          borderTopRadius={"100%"}
        >
          <Image src="/Images/animation5.png" alt="animation5" />
        </Box>
        <Text fontWeight={"bold"} mt={"40%"}>
          Ahead app
        </Text>
        <Box overflow={"hidden"} position="relative">
          <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
            {() => (
              <Flex alignItems="center">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : -100,
                  }}
                  transition={{ duration: 0.8 }}
                  style={{ position: "relative", left: 0 }}
                >
                  <Heading fontSize={"45px"} textAlign={"start"}>
                    Master your life
                  </Heading>
                  <Heading fontSize={"45px"} textAlign={"start"}>
                    by mastering
                  </Heading>
                  <Heading fontSize={"45px"} textAlign={"start"}>
                    emotions
                  </Heading>
                </motion.div>
              </Flex>
            )}
          </VisibilitySensor>
        </Box>
      </Box>

      <Box>
        <Box
          padding={"3%"}
          borderRadius={"50%"}
          h={"400px"}
          w={"400px"}
          border={"5px dashed white"}
          className={`rotating-box red ${isVisible ? "active" : ""}`}
        >
          <Box w={"20%"} ml={"40%"} mt={"-15%"}>
            <Image
              w={"100%"}
              h={"10%"}
              src="/Images/animation1.png"
              alt="error"
            />
          </Box>

          <Flex justifyContent={"space-between"} mt={"8%"}>
            <Image src="/Images/animation7.png" alt="error" />
            <Image src="/Images/animation6.png" alt="error" />
          </Flex>

          <Flex
            justifyContent={"space-between"}
            mt={"30%"}
            width={"120%"}
            ml={"-11%"}
          >
            <Image
              w={"17%"}
              h={"17%"}
              src="/Images/animation2.png"
              alt="error"
            />

            <Image
              w={"17%"}
              h={"17%"}
              src="/Images/animation3.png"
              alt="error"
            />
          </Flex>

          <Box mt={"21%"} w={"10%"} h={"11%"} ml={"50%"}>
            <Image
              w={"100%"}
              h={"100%"}
              src="/Images/animation8.png"
              alt="error"
            />
          </Box>
        </Box>

        <InnerDiv />
      </Box>
    </Flex>
  );
};

export default AnimationOne;
