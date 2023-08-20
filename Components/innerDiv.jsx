import { Box, Image } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
// import './InnerDiv.css'; // You can define your CSS styles in this file

const InnerDiv = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const InnerDivRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.5 } // Change this threshold value as needed
    );

    if (InnerDivRef.current) {
      observer.observe(InnerDivRef.current);
    }

    return () => {
      if (InnerDivRef.current) {
        observer.unobserve(InnerDivRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInViewport) {
      setIsExpanded(true);
      const timeoutId = setTimeout(() => {
        setIsExpanded(false);
      }, 1000); 

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isInViewport]);

  return (
    <Box
      mt={"-97%"}
      zIndex={10}
      className={`container ${isExpanded ? "expanded" : ""}`}
    >
      <Box zIndex={10} className="resizable-div" ref={InnerDivRef}>
        <Image
          w={"50%"}
          h={"100%"}
          border={"2px solid black"}
          borderRadius={"10px"}
          src="/Images/animation4.png"
          alt="err"
        />
      </Box>
    </Box>
  );
};

export default InnerDiv;
