import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowUp } from "lucide-react";

const FloatingButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4);
  color: white;
  opacity: ${(props) => (props.$isVisible ? "1" : "0")};
  transform: ${(props) => (props.$isVisible ? "scale(1) translateY(0)" : "scale(0.8) translateY(20px)")};
  pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};

  &:hover {
    transform: scale(1.12) translateY(-4px);
    box-shadow: 0 14px 35px rgba(37, 99, 235, 0.6);
    background: linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%);
  }

  &:active {
    transform: scale(0.92);
  }

  html[data-theme="dark"] & {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);

    &:hover {
      box-shadow: 0 14px 35px rgba(99, 102, 241, 0.6);
    }
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    bottom: 20px;
    right: 20px;
  }
`;

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FloatingButton 
      $isVisible={isVisible} 
      onClick={scrollToTop} 
      aria-label="Scroll to top of page"
    >
      <ArrowUp size={22} />
    </FloatingButton>
  );
};

export default GoToTop;
