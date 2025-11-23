import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StyledCarouselContainer = styled.div`
  max-width: 1200px;
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
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15), 0 8px 30px rgba(0, 0, 0, 0.08);
  aspect-ratio: 16/9;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 30px 80px rgba(102, 126, 234, 0.25), 0 12px 40px rgba(0, 0, 0, 0.15);
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6), 0 0 30px rgba(102, 126, 234, 0.2);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: translateY(-50%) scale(1);
    
    &:hover {
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    }
  }

  ${({ $position }) => $position === 'left' ? `
    left: 1rem;
  ` : `
    right: 1rem;
  `}
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    
    ${({ $position }) => $position === 'left' ? `
      left: 0.5rem;
    ` : `
      right: 0.5rem;
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
  backdrop-filter: blur(20px);
  border-radius: 50px;
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
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      : 'rgba(203, 213, 225, 0.5)'
  };
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $isActive }) => 
    $isActive 
      ? '0 4px 15px rgba(102, 126, 234, 0.4), 0 0 20px rgba(102, 126, 234, 0.2)' 
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
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    transform: scale(1.2);
    box-shadow: 0 4px 15px rgba(118, 75, 162, 0.4), 0 0 20px rgba(118, 75, 162, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: scale(1.1);
  }
`;