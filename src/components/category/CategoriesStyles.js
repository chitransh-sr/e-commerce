import styled, { keyframes } from "styled-components";
import { colors, spacing, borderRadius, shadows, transitions } from '../../design-system/tokens';

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

export const CategorySectionWrapper = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${spacing.xl} ${spacing.xl};
  animation: ${fadeIn} 0.5s ease;

  @media (max-width: 768px) {
    padding: ${spacing.md} ${spacing.md};
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${spacing.xl};
  padding: 0 ${spacing.sm};

  .title-group {
    h3 {
      font-size: 1.75rem;
      font-weight: 800;
      color: ${colors.text.primary};
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: ${spacing.sm};
    }

    p {
      font-size: 0.95rem;
      color: ${colors.text.secondary};
      margin-top: ${spacing.xs};
    }
  }

  [data-theme='dark'] & {
    .title-group h3 {
      color: ${colors.text.primaryDark};
    }
    .title-group p {
      color: ${colors.text.secondaryDark};
    }
  }
`;

export const CategoryBadge = styled.div`
  background: ${colors.gradients.primary};
  color: white;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  box-shadow: ${colors.effects?.glow?.primary || '0 4px 12px rgba(37, 99, 235, 0.3)'};
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  padding: ${spacing.md} ${spacing.md};
  display: flex;
  gap: ${spacing.sm};
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius['3xl']};
  box-shadow: ${shadows.sm};
  position: relative;
  transition: ${transitions.emphasis};
  animation: ${fadeIn} 0.5s ease;
  
  [data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid ${colors.border.dark};
    box-shadow: 0 8px 25px -10px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    border-color: rgba(59, 130, 246, 0.3);
  }
`;

export const CategoriesScrollContainer = styled.div`
  flex: 1;
  overflow-x: auto;
  display: flex;
  gap: ${spacing.sm};
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
  padding: ${spacing.md} ${spacing.lg};
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: ${borderRadius.lg};
  border: 1.5px solid ${({ $isSelected }) => ($isSelected ? 'transparent' : 'rgba(226, 232, 240, 0.8)')};
  background: ${({ $isSelected }) => 
    $isSelected 
      ? colors.gradients.primary 
      : "rgba(255, 255, 255, 0.85)"
  };
  color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#334155")};
  cursor: pointer;
  transition: ${transitions.emphasis};
  box-shadow: ${({ $isSelected }) => 
    $isSelected 
      ? "0 8px 20px rgba(37, 99, 235, 0.35)" 
      : "0 2px 8px rgba(0, 0, 0, 0.03)"
  };
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  min-width: fit-content;

  &:hover {
    transform: translateY(-2px);
    ${({ $isSelected }) => !$isSelected && `
      background: ${colors.primary[50]};
      border-color: ${colors.primary[300]};
      color: ${colors.primary[700]};
    `}
  }

  &:active {
    transform: scale(0.96);
  }

  [data-theme='dark'] & {
    background: ${({ $isSelected }) => 
      $isSelected 
        ? colors.gradients.violet 
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
        color: ${colors.primary[300]};
      `}
    }
  }

  @media (max-width: 480px) {
    padding: ${spacing.sm} ${spacing.md};
    font-size: 0.85rem;
  }
`;

export const CategoryIcon = styled.span`
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  ${({ $gradient }) => $gradient && `
    background: ${$gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}

  ${CategoryButton}:hover & {
    transform: scale(1.2) rotate(6deg);
  }
`;

export const NavArrow = styled.button`
  width: 42px;
  height: 42px;
  border-radius: ${borderRadius.lg};
  border: 1px solid ${colors.border.light};
  background: rgba(255, 255, 255, 0.8);
  color: #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${transitions.emphasis};
  box-shadow: ${shadows.xs};
  flex-shrink: 0;

  &:hover:not(:disabled) {
    background: ${colors.primary[50]};
    color: ${colors.primary[600]};
    border-color: ${colors.primary[200]};
    transform: scale(1.05);
  }

  &:active:not(:disabled) {
    transform: scale(0.92);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  [data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: ${colors.border.dark};
    color: ${colors.text.primaryDark};

    &:hover:not(:disabled) {
      background: rgba(51, 65, 85, 0.8);
      color: ${colors.primary[300]};
      border-color: rgba(96, 165, 250, 0.3);
    }
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.xl};
  width: 100%;
  
  &::after {
    content: '';
    width: 36px;
    height: 36px;
    border: 3px solid rgba(59, 130, 246, 0.2);
    border-top: 3px solid ${colors.primary[500]};
    border-radius: 50%;
    animation: spin 0.9s linear infinite;
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
  padding: ${spacing.xl};
  width: 100%;
  color: ${colors.danger[500]};
  font-weight: 600;
  font-size: 0.95rem;
  gap: ${spacing.sm};

  &[data-icon] {
    &::before {
      content: '⚠️';
    }
  }
`;

export const CategorySearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 240px;
  margin-left: ${spacing.md};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CategorySearchIcon = styled.div`
  position: absolute;
  left: ${spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text.disabled};
  pointer-events: none;
  z-index: 1;
`;

export const CategorySearchInput = styled.input`
  width: 100%;
  padding: ${spacing.sm} ${spacing.md} ${spacing.sm} 2.5rem;
  border: 1.5px solid ${colors.border.light};
  border-radius: ${borderRadius.xl};
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.7);
  color: ${colors.text.primary};
  backdrop-filter: blur(10px);
  transition: ${transitions.standard};

  &::placeholder {
    color: ${colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary[400]};
    background: white;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }

  [data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.7);
    border-color: ${colors.border.dark};
    color: ${colors.text.primaryDark};

    &:focus {
      border-color: ${colors.primary[400]};
      background: rgba(30, 41, 59, 0.95);
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.18);
    }
  }
`;