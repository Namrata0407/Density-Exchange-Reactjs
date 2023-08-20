import {
  Text,
  Box,
  Flex,
  Image,
  Heading,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const Silder2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [sliderValue, setSliderValue] = useState(50);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <div>
      <Box
        width={"60%"}
        margin={"auto"}
        mb={"30px"}
        position="relative"
        mt={"55px"}
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
                <Text>Wrong with self improvement & how we are fixing it.</Text>
                <Heading>Self-Improvement. Ugh.</Heading>
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
                  src="/Images/img2.png"
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
        flexDirection="row"
        width="35%"
        margin="auto"
        maxH="800px"
        gap={"30px"}
      >
        <Box pt={6} pb={2} border={"2px solid blue"}>
          <Slider
            aria-label="slider-ex-6"
            onChange={(val) => setSliderValue(val)}
          >
            <SliderMark value={25} {...labelStyles}>
              25%
            </SliderMark>
            <SliderMark value={50} {...labelStyles}>
              50%
            </SliderMark>
            <SliderMark value={75} {...labelStyles}>
              75%
            </SliderMark>
            <SliderMark
              value={sliderValue}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {sliderValue}%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>

        <Flex flexDirection="column">
          <Box
            // mb="30px"
            className="slide"
            style={{ marginTop: "70px" }}
          >
            <Text color="black" fontSize="20px" fontWeight="bold" mb="13px">
              Its not an easy as 1-2-3
            </Text>
            <Text>
              The journey of change may be long, but our sessions are quick. We
              get to the point and tell you what you want to know (and nothing
              else).
            </Text>
          </Box>

          <Box
            // mb="30px"
            className="slide"
            style={{ marginTop: "70px" }}
          >
            <Text color="black" fontSize="20px" fontWeight="bold" mb="13px">
              Its not an easy as 1-2-3
            </Text>
            <Text>
              The journey of change may be long, but our sessions are quick. We
              get to the point and tell you what you want to know (and nothing
              else).
            </Text>
          </Box>

          <Box
            // mb="30px"
            className="slide"
            style={{ marginTop: "70px" }}
          >
            <Text color="black" fontSize="20px" fontWeight="bold" mb="13px">
              Its not an easy as 1-2-3
            </Text>
            <Text>
              The journey of change may be long, but our sessions are quick. We
              get to the point and tell you what you want to know (and nothing
              else).
            </Text>
          </Box>

          <Box className="slide" style={{ marginTop: "70px" }}>
            <Text color="black" fontSize="20px" fontWeight="bold" mb="13px">
              Its not an easy as 1-2-3
            </Text>
            <Text>
              The journey of change may be long, but our sessions are quick. We
              get to the point and tell you what you want to know (and nothing
              else).
            </Text>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Silder2;
