import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const CursorWrapper = styled(motion.div)`
  position: fixed;
  top: -5px;
  left: -10px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border:2px solid dimgrey;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: width 0.2s ease-in-out, height 0.2s ease, background-color 0.2s ease;

  &.hovered {
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    // Attach event listeners
    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      // Clean up event listeners
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <CursorWrapper
      className={hovered ? "hovered" : ""}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "tween", ease: "linear", duration: 0.1 }}
    />
  );
};

export default CustomCursor;
