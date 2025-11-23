import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 100%;
  padding: 32px 4rem;
  display: flex;
  gap: 12px;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08), 0 4px 20px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: visible;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Dark mode styles */
  html[data-theme='dark'] & {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15), 0 8px 30px rgba(0, 0, 0, 0.08);
  }
  
  &:hover {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12), 0 6px 25px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
  
  html[data-theme='dark'] &:hover {
    box-shadow: 0 30px 80px rgba(102, 126, 234, 0.25), 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent);
    border-radius: 24px 24px 0 0;
  }
  
  html[data-theme='dark'] &::before {
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 20px 3rem;
    gap: 8px;
  }
`;

export const CategoriesScrollContainer = styled.div`
  flex: 1;
  overflow-x: auto;
  display: flex;
  gap: 12px;
  align-items: center;
  scroll-behavior: smooth;
  
  /* Hide scrollbar while keeping functionality */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const CategoryButton = styled.button`
  flex-shrink: 0;
  padding: 16px 28px;
  font-size: 15px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  border-radius: 20px;
  border: 2px solid rgba(226, 232, 240, 0.8);
  background: ${({ $isSelected }) => 
    $isSelected 
      ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" 
      : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
  };
  color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#1e293b")};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: ${({ $isSelected }) => 
    $isSelected 
      ? "0 8px 30px rgba(59, 130, 246, 0.3), 0 4px 15px rgba(59, 130, 246, 0.2)" 
      : "0 4px 20px rgba(0, 0, 0, 0.08)"
  };
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: fit-content;

  /* Dark mode styles */
  html[data-theme='dark'] & {
    background: ${({ $isSelected }) => 
      $isSelected 
        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
        : "rgba(255, 255, 255, 0.2)"
    };
    color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#ffffff")};
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    box-shadow: ${({ $isSelected }) => 
      $isSelected 
        ? "0 12px 40px rgba(102, 126, 234, 0.4), 0 4px 20px rgba(102, 126, 234, 0.3)" 
        : "0 4px 20px rgba(0, 0, 0, 0.1)"
    };
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  html[data-theme='dark'] &::before {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: ${({ $isSelected }) => 
      $isSelected ? "rgba(255, 255, 255, 0.3)" : "rgba(59, 130, 246, 0.1)"
    };
    transform: translate(-50%, -50%);
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  html[data-theme='dark'] &::after {
    background: ${({ $isSelected }) => 
      $isSelected ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.2)"
    };
  }
  
  &:hover {
    background: ${({ $isSelected }) => 
      $isSelected 
        ? "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)" 
        : "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
    };
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow: ${({ $isSelected }) => 
      $isSelected 
        ? "0 12px 40px rgba(59, 130, 246, 0.4), 0 6px 20px rgba(59, 130, 246, 0.3)" 
        : "0 8px 30px rgba(0, 0, 0, 0.12)"
    };
    transform: translateY(-2px);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      width: 100%;
      height: 100%;
    }
  }
  
  html[data-theme='dark'] &:hover {
    background: ${({ $isSelected }) => 
      $isSelected 
        ? "linear-gradient(135deg, #764ba2 0%, #667eea 100%)" 
        : "rgba(255, 255, 255, 0.3)"
    };
    box-shadow: ${({ $isSelected }) => 
      $isSelected 
        ? "0 20px 60px rgba(102, 126, 234, 0.5), 0 8px 30px rgba(102, 126, 234, 0.4)" 
        : "0 12px 40px rgba(0, 0, 0, 0.15)"
    };
  }
  
  &:active {
    transform: scale(0.98);
    transition: all 0.1s ease;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
    gap: 8px;
  }
`;

export const CategoryIcon = styled.span`
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  
  &::after {
    content: '';
    width: 32px;
    height: 32px;
    border: 3px solid #e2e8f0;
    border-top: 3px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #ef4444;
  font-weight: 500;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(239, 68, 68, 0.2);
  margin: 20px;
`;

export const NavigationArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
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
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  overflow: hidden;
  
  /* Dark mode styles */
  html[data-theme='dark'] & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
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
    box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.15);
  }
  
  html[data-theme='dark'] &:hover {
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6), 0 0 30px rgba(102, 126, 234, 0.2);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.2);
  }
  
  html[data-theme='dark'] &:active {
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: translateY(-50%) scale(1);
    
    &:hover {
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
    }
  }
  
  html[data-theme='dark'] &:disabled {
    &:hover {
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    }
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

export const LeftArrow = styled(NavigationArrow)`
  left: 1rem;
  
  @media (max-width: 768px) {
    left: 0.5rem;
  }
`;

export const RightArrow = styled(NavigationArrow)`
  right: 1rem;
  
  @media (max-width: 768px) {
    right: 0.5rem;
  }
`;
