import React, { useEffect, useRef, useState } from "react";

import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";

const OpenVacanciesSection = () => {
  const headingRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (rect.top < viewportHeight * 0.7 && rect.bottom >= 0) {
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
    <Box width={"60%"} margin={"auto"} mt={"50px"}>
      <Heading
        ref={headingRef}
        className={animate ? "heading-animation" : ""}
        mb={"30px"}
      >
        Open Vacancies
      </Heading>

      <Flex justifyContent={"space-between"}>
        <Box width={"30%"} bgColor={"#FEFBEC"} borderRadius={"10px"} p={"24px"}>
          <Text fontWeight={"bold"} mb={"6px"} fontSize={"17px"}>
            Senior Full Stack Engineer
          </Text>
          <ul style={{ fontSize: "13px", mb: "6px", marginLeft: "12px" }}>
            <li>Full time position</li>
            <li>Burlin or remote</li>
            <li>$65-85k, 0.5-1.50% equity share option</li>
          </ul>
        </Box>
        <Box width={"30%"} bgColor={"#FEFBEC"} borderRadius={"10px"} p={"24px"}>
          <Text fontWeight={"bold"} mb={"6px"} fontSize={"17px"}>
            Senior Full Stack Engineer
          </Text>
          <ul style={{ fontSize: "13px", mb: "6px", marginLeft: "12px" }}>
            <li>Full time position</li>
            <li>Burlin or remote</li>
            <li>$65-85k, 0.5-1.50% equity share option</li>
          </ul>
        </Box>

        <Box width={"30%"} bgColor={"#FEFBEC"} borderRadius={"10px"} p={"24px"}>
          <Text fontWeight={"bold"} mb={"6px"} fontSize={"17px"}>
            Senior Full Stack Engineer
          </Text>
          <ul style={{ fontSize: "13px", mb: "6px", marginLeft: "12px" }}>
            <li>Full time position</li>
            <li>Burlin or remote</li>
            <li>$65-85k, 0.5-1.50% equity share option</li>
          </ul>
        </Box>
      </Flex>
    </Box>
  );
};

export default OpenVacanciesSection;
