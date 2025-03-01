import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StyledCarouselContainer = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  position: relative;
  overflow: hidden;
`;

export const StyledCarouselWrapper = styled.div`
  position: relative;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  aspect-ratio: 16/9; 
`;

export const StyledCarouselContent = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%; 
`;

export const StyledCarouselImage = styled.img`
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${fadeIn} 0.5s ease;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(0,0,0,0.8);
  }

  ${({ position }) => position === 'left' ? `
    left: 0;
    border-radius: 0 5px 5px 0;
  ` : `
    right: 0;
    border-radius: 5px 0 0 5px;
  `}
`;

export const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
`;

export const Indicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ isActive }) => isActive ? '#333' : '#ccc'};
  cursor: pointer;
  transition: background 0.3s ease;
`;