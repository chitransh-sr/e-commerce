import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #1a365d;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 4rem;
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  min-width: 40px;
  
  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
`;

export const Logo = styled.svg`
  width: 150px;
  height: auto;
  margin-right: 1rem;
`;

export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-left: auto;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 4px;
  background: transparent;
  color: white;
  font-size: 1rem;
  width: 200px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #ff6600;
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #1a365d;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1a365d;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff6600;
    border-radius: 4px;
  }

  div {
    padding: 0.5rem;
    color: white;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: #1a365d;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 100;
  align-items: center;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileSearchContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;

  ${SearchInput} {
    width: 100%;
    max-width: 300px;
  }

  ${SearchResults} {
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
  }
`;