import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 100%;
  padding: 32px 24px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 20px 16px;
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
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(241, 245, 249, 0.5);
    border-radius: 4px;
    margin: 0 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #3b82f6, #f97316);
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(90deg, #2563eb, #ea580c);
    background-clip: content-box;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const CategoryButton = styled.button`
  flex-shrink: 0;
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  border-radius: 30px;
  border: none;
  background: ${({ $isSelected }) => 
    $isSelected 
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
      : "linear-gradient(145deg, #ffffff, #f8fafc)"
  };
  color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#334155")};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: ${({ $isSelected }) => 
    $isSelected 
      ? "0 8px 32px rgba(102, 126, 234, 0.4), 0 2px 8px rgba(102, 126, 234, 0.3)" 
      : "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)"
  };
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: fit-content;

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

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: ${({ $isSelected }) => 
      $isSelected ? "rgba(255, 255, 255, 0.3)" : "rgba(249, 115, 22, 0.1)"
    };
    transform: translate(-50%, -50%);
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    background: ${({ $isSelected }) => 
      $isSelected 
        ? "linear-gradient(135deg, #764ba2 0%, #667eea 100%)" 
        : "linear-gradient(145deg, #f8fafc, #ffffff)"
    };
    box-shadow: ${({ $isSelected }) => 
      $isSelected 
        ? "0 12px 40px rgba(102, 126, 234, 0.5), 0 4px 12px rgba(102, 126, 234, 0.4)" 
        : "0 8px 25px rgba(249, 115, 22, 0.25), 0 3px 10px rgba(249, 115, 22, 0.15)"
    };
    color: ${({ $isSelected }) => $isSelected ? "#ffffff" : "#1e293b"};
    
    &::before {
      left: 100%;
    }
    
    &::after {
      width: 100%;
      height: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
    transition: all 0.1s ease;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
    gap: 6px;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  border: 2px solid #e2e8f0;
  color: #3b82f6;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  
  &:hover {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: #ffffff;
    border-color: #3b82f6;
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background: linear-gradient(135deg, #ffffff, #f8fafc);
      color: #3b82f6;
      border-color: #e2e8f0;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: scale(1);
    }
  }
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }
`;

export const LeftArrow = styled(NavigationArrow)`
  position: relative;
  flex-shrink: 0;
  margin-right: 8px;
`;

export const RightArrow = styled(NavigationArrow)`
  position: relative;
  flex-shrink: 0;
  margin-left: 8px;
`;
