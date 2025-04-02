import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: black;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button isVisible={isVisible} onClick={scrollToTop} aria-label="Go to top">
      ↑
    </Button>
  );
};

export default GoToTop;
