import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StyledCarouselContainer = styled.div`
  max-width: 1400px;
  margin: 3rem auto;
  position: relative;
  overflow: visible;
  cursor: pointer;
  padding: 0 2rem;
  animation: fadeIn 0.8s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledCarouselWrapper = styled.div`
  position: relative;
  border-radius: 24px;
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.15), 0 4px 20px rgba(0, 0, 0, 0.08);
  aspect-ratio: 16/9;
  overflow: hidden;
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2), 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledCarouselContent = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%; 
`;

export const StyledCarouselImage = styled.img`
  border-radius: 24px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(1.05);
  
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1) saturate(1.1);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(1.05);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(37, 99, 235, 0.95));
  color: white;
  border: none;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  border-radius: 50%;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  min-width: 56px;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;

  &:hover {
    background: linear-gradient(135deg, rgba(249, 115, 22, 0.95), rgba(234, 88, 12, 0.95));
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 12px 35px rgba(249, 115, 22, 0.4), 0 0 30px rgba(249, 115, 22, 0.15);
    opacity: 1;
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
    box-shadow: 0 6px 20px rgba(249, 115, 22, 0.3);
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease;
  }
  
  &:hover svg {
    transform: scale(1.2);
  }

  ${({ $position }) => $position === 'left' ? `
    left: 2rem;
  ` : `
    right: 2rem;
  `}
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-width: 48px;
    min-height: 48px;
    
    ${({ $position }) => $position === 'left' ? `
      left: 1rem;
    ` : `
      right: 1rem;
    `}
  }
`;

export const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 2rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(20px);
  border-radius: 50px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: slideUp 0.6s ease-out 0.3s both;
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Indicator = styled.div`
  width: ${({ $isActive }) => $isActive ? '40px' : '12px'};
  height: 12px;
  border-radius: 25px;
  background: ${({ $isActive }) => 
    $isActive 
      ? 'linear-gradient(135deg, #3b82f6, #2563eb)' 
      : '#cbd5e1'
  };
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $isActive }) => 
    $isActive 
      ? '0 4px 15px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)' 
      : '0 2px 8px rgba(0, 0, 0, 0.05)'
  };
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ $isActive }) => $isActive ? '32px' : '8px'};
    height: 8px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 25px;
    opacity: ${({ $isActive }) => $isActive ? '1' : '0'};
    transition: all 0.3s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #f97316, #ea580c);
    transform: scale(1.2);
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3), 0 0 20px rgba(249, 115, 22, 0.1);
    
    &::before {
      opacity: '1';
    }
  }
  
  &:active {
    transform: scale(1.1);
  }
`;