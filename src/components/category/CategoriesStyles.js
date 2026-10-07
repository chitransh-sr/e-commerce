import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CategorySectionWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.25rem;
  padding: 0 0.5rem;

  .title-group {
    h3 {
      font-size: 1.6rem;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    p {
      font-size: 0.9rem;
      color: #64748b;
      margin-top: 2px;
    }
  }

  html[data-theme='dark'] & {
    .title-group h3 {
      color: #f1f5f9;
    }
    .title-group p {
      color: #94a3b8;
    }
  }
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  padding: 14px 20px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 22px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  animation: ${fadeIn} 0.5s ease;
  
  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 12px 35px -10px rgba(0, 0, 0, 0.5);
  }

  &:hover {
    border-color: rgba(59, 130, 246, 0.3);
  }
`;

export const CategoriesScrollContainer = styled.div`
  flex: 1;
  overflow-x: auto;
  display: flex;
  gap: 10px;
  align-items: center;
  scroll-behavior: smooth;
  padding: 4px 6px;
  
  /* Hide scrollbar while keeping functionality */
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryButton = styled.button`
  flex-shrink: 0;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 14px;
  border: 1.5px solid ${({ $isSelected }) => ($isSelected ? 'transparent' : 'rgba(226, 232, 240, 0.8)')};
  background: ${({ $isSelected }) => 
    $isSelected 
      ? "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" 
      : "rgba(255, 255, 255, 0.85)"
  };
  color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#334155")};
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: ${({ $isSelected }) => 
    $isSelected 
      ? "0 8px 20px rgba(37, 99, 235, 0.35)" 
      : "0 2px 8px rgba(0, 0, 0, 0.03)"
  };
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: fit-content;

  &:hover {
    transform: translateY(-2px);
    ${({ $isSelected }) => !$isSelected && `
      background: #eff6ff;
      border-color: #93c5fd;
      color: #2563eb;
    `}
  }

  &:active {
    transform: scale(0.96);
  }

  html[data-theme='dark'] & {
    background: ${({ $isSelected }) => 
      $isSelected 
        ? "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" 
        : "rgba(30, 41, 59, 0.8)"
    };
    border-color: ${({ $isSelected }) => ($isSelected ? 'transparent' : 'rgba(255, 255, 255, 0.1)')};
    color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#cbd5e1")};
    box-shadow: ${({ $isSelected }) => 
      $isSelected 
        ? "0 8px 24px rgba(99, 102, 241, 0.4)" 
        : "0 2px 8px rgba(0, 0, 0, 0.2)"
    };

    &:hover {
      ${({ $isSelected }) => !$isSelected && `
        background: rgba(51, 65, 85, 0.9);
        border-color: rgba(96, 165, 250, 0.4);
        color: #93c5fd;
      `}
    }
  }
`;

export const CategoryIcon = styled.span`
  font-size: 1.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  ${CategoryButton}:hover & {
    transform: scale(1.2) rotate(6deg);
  }
`;

export const NavArrow = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid rgba(226, 232, 240, 0.9);
  background: white;
  color: #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;

  &:hover:not(:disabled) {
    background: #eff6ff;
    color: #2563eb;
    border-color: #bfdbfe;
    transform: scale(1.05);
  }

  &:active:not(:disabled) {
    transform: scale(0.92);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.9);
    border-color: rgba(255, 255, 255, 0.1);
    color: #cbd5e1;

    &:hover:not(:disabled) {
      background: rgba(51, 65, 85, 0.9);
      color: #93c5fd;
      border-color: rgba(96, 165, 250, 0.3);
    }
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 100%;
  
  &::after {
    content: '';
    width: 28px;
    height: 28px;
    border: 3px solid rgba(59, 130, 246, 0.2);
    border-top: 3px solid #3b82f6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
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
  padding: 24px;
  width: 100%;
  color: #ef4444;
  font-weight: 600;
  font-size: 0.9rem;
`;
