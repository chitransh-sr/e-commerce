import { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowUp } from "lucide-react";

const FloatingButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #7A1E2B;
  border: none;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 14px rgba(122, 30, 43, 0.28);
  color: #F5E9D7;
  opacity: ${(props) => (props.$isVisible ? "1" : "0")};
  transform: ${(props) => (props.$isVisible ? "scale(1) translateY(0)" : "scale(0.8) translateY(20px)")};
  pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(122, 30, 43, 0.35);
    background: #C9A24C;
    color: #1F1F1F;
  }

  &:active {
    transform: scale(0.92);
  }

  html[data-theme="dark"] & {
    background: #7A1E2B;
    color: #F5E9D7;
    box-shadow: 0 10px 30px rgba(122, 30, 43, 0.5);

    &:hover {
      background: #C9A24C;
      color: #1F1F1F;
      box-shadow: 0 14px 35px rgba(201, 162, 76, 0.5);
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
