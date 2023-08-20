import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const Slider3 = () => {
  const animationRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (animationRef.current) {
        const rect = animationRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (rect.top < viewportHeight * 0.9 && rect.bottom >= 0) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <Box
        bgColor={"#EDF8FE"}
        width={"60%"}
        m={"auto"}
        textAlign={"center"}
        mt={"55px"}
        className="slide-in"
        p={"85px"}
        borderRadius={"10px"}
      >
        <Text
          mt={"40px"}
          mb={"14px"}
          className={`fade-in ${animate ? "active" : ""}`}
        >
          Let your friends, family, and co-workers (anonymously) rate your
          social skills.
        </Text>
        <Heading mb={"30px"} className={`fade-in ${animate ? "active" : ""}`}>
          Ever wonder what others think of you?
        </Heading>
        <Image
          src="/Images/img3.png"
          alt="img3"
          m={"auto"}
          className={`fade-in ${animate ? "active" : ""}`}
          ref={animationRef}
        />
        <Flex m={"auto"} justifyContent={"space-between"} mt={"10px"}>
          <Text
            width={"30%"}
            fontSize={"11px"}
            className={animate ? "slide-in" : ""}
            ref={animationRef}
          >
            Answer questions about your social skills
          </Text>
          <Text
            width={"30%"}
            fontSize={"11px"}
            className={animate ? "slide-in" : ""}
            ref={animationRef}
          >
            Let others anonymously answer the same questions about you
          </Text>
          <Text
            width={"30%"}
            fontSize={"11px"}
            className={animate ? "slide-in" : ""}
            ref={animationRef}
          >
            Find out where you and others see things the same way and where not!
          </Text>
        </Flex>

        <Box
          width={"80%"}
          bgColor={"white"}
          borderRadius={"10px"}
          m={"auto"}
          mt={"40px"}
          p={"40px"}
        >
          {/* First Flex */}
          <Flex width={"90%"} justifyContent={"space-between"} ml={"-8%"}>
            <Box
              bgColor={"#6341EF"}
              color={"white"}
              p={"9px"}
              borderRadius={"7px"}
              pl={"11px"}
              pr={"11px"}
              className={animate ? "slide-in" : ""}
              ref={animationRef}
            >
              You
            </Box>
            <Box
              bgColor={"#FCB237"}
              color={"white"}
              p={"9px"}
              borderRadius={"7px"}
              pl={"11px"}
              pr={"11px"}
              className={animate ? "slide-in" : ""}
              ref={animationRef}
            >
              Anonymonos2
            </Box>
          </Flex>

          <Image
            src="/Images/img4.png"
            alt="img4"
            className={`fade-in ${animate ? "active" : ""}`}
          />

          {/* Second Flex */}
          <Flex width={"90%"} ml={"25%"} justifyContent={"space-between"}>
            <Box
              bgColor={"#41C4FA"}
              color={"white"}
              p={"9px"}
              borderRadius={"7px"}
              pl={"11px"}
              pr={"11px"}
              className={animate ? "slide-in" : ""}
              ref={animationRef}
            >
              Anonymonos1
            </Box>
            <Box
              bgColor={"#58C896"}
              color={"white"}
              p={"9px"}
              borderRadius={"7px"}
              pl={"11px"}
              pr={"11px"}
              className={animate ? "slide-in" : ""}
              ref={animationRef}
            >
              Anonymonos3
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Slider3;
