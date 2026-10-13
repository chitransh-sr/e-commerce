import styled, { keyframes } from "styled-components";
import { colors, spacing, borderRadius, shadows, transitions } from '../../design-system/tokens';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const CategorySectionWrapper = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: ${spacing['5xl']} ${spacing.xl} ${spacing.xl};
  animation: ${fadeIn} 0.3s ease;

  @media (max-width: 768px) {
    padding: ${spacing['4xl']} ${spacing.md} ${spacing.md};
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: ${spacing.xl};
  gap: ${spacing.sm};

  .title-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacing.xs};

    h3 {
      font-family: "Instrument Serif", Georgia, serif;
      font-size: clamp(2rem, 4vw, 2.6rem);
      font-weight: 400;
      color: ${colors.text.heading};
      letter-spacing: 0;
    }

    p {
      font-family: "Instrument Sans", sans-serif;
      font-size: 0.875rem;
      color: ${colors.text.secondary};
    }
  }

  [data-theme='dark'] & {
    .title-group h3 { color: #E8CFC0; }
    .title-group p { color: #CBBFA9; }
  }
`;

export const CategoryBadge = styled.div`
  background: transparent;
  color: ${colors.primary.DEFAULT};
  border: 1px solid ${colors.primary.DEFAULT};
  padding: 4px 16px;
  border-radius: 40px;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.13em;
  text-transform: uppercase;

  [data-theme='dark'] & {
    color: ${colors.accent.DEFAULT};
    border-color: ${colors.accent.DEFAULT};
  }
`;

export const FiltersViewport = styled.div`
  position: relative;

  &:hover .filters-arrow {
    opacity: 1;
  }
`;

export const FiltersScroll = styled.div`
  display: flex;
  gap: ${spacing.sm};
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: ${spacing.sm} ${spacing.sm} ${spacing.md};
  align-items: center;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterChip = styled.button`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  min-height: 46px;
  padding: 10px 12px 10px 18px;
  background: ${({ $isSelected }) => ($isSelected ? colors.primary.DEFAULT : '#FFFFFF')};
  color: ${({ $isSelected }) => ($isSelected ? '#F5E9D7' : colors.text.primary)};
  border: 1px solid ${({ $isSelected }) => ($isSelected ? colors.primary.DEFAULT : colors.border.light)};
  border-radius: ${borderRadius.pills};
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: ${({ $isSelected }) => ($isSelected ? 600 : 400)};
  cursor: pointer;
  white-space: nowrap;
  transition: ${transitions.fast};
  animation: ${fadeIn} 0.3s ease;

  &:hover {
    border-color: ${colors.primary.DEFAULT};
    color: ${({ $isSelected }) => ($isSelected ? '#F5E9D7' : colors.primary.DEFAULT)};
  }

  [data-theme='dark'] & {
    background: ${({ $isSelected }) => ($isSelected ? colors.primary.DEFAULT : '#2A2024')};
    border-color: ${({ $isSelected }) => ($isSelected ? colors.primary.DEFAULT : colors.border.dark)};
    color: ${({ $isSelected }) => ($isSelected ? '#F5E9D7' : '#F5E9D7')};
  }
`;

export const ChipArrow = styled.span`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $isSelected }) => ($isSelected ? colors.accent.DEFAULT : 'rgba(122, 30, 43, 0.08)')};
  color: ${({ $isSelected }) => ($isSelected ? '#1F1F1F' : colors.primary.DEFAULT)};
  transition: ${transitions.fast};

  ${FilterChip}:hover & {
    background: ${colors.accent.DEFAULT};
    color: #1F1F1F;
  }

  [data-theme='dark'] & {
    background: ${({ $isSelected }) => ($isSelected ? colors.accent.DEFAULT : 'rgba(245, 233, 215, 0.12)')};
    color: ${({ $isSelected }) => ($isSelected ? '#1F1F1F' : '#F5E9D7')};
  }
`;

export const NavArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => ($position === 'left' ? 'left: -6px;' : 'right: -6px;')}
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid ${colors.border.light};
  background: #F5E9D7;
  color: ${colors.primary.DEFAULT};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${transitions.fast};
  box-shadow: ${shadows.sm};
  z-index: 2;
  opacity: 0;

  &:hover:not(:disabled) {
    background: ${colors.primary.DEFAULT};
    color: #F5E9D7;
    border-color: ${colors.primary.DEFAULT};
  }

  &:disabled {
    opacity: 0 !important;
    cursor: default;
    pointer-events: none;
  }

  ${FiltersViewport}:hover &:not(:disabled) {
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }

  [data-theme='dark'] & {
    background: #2A2024;
    border-color: ${colors.border.dark};
    color: #F5E9D7;
  }
`;

export const SkeletonChip = styled.div`
  flex: 0 0 auto;
  height: 46px;
  width: 150px;
  border-radius: 9999px;
  background: linear-gradient(90deg, #EFE0C8 25%, #F5E9D7 50%, #EFE0C8 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s infinite;
`;

export const LoadingRow = styled.div`
  display: flex;
  gap: ${spacing.sm};
  overflow: hidden;
  padding: ${spacing.sm};
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.lg};
  width: 100%;
  color: ${colors.danger.DEFAULT};
  font-family: "Instrument Sans", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  gap: ${spacing.sm};
  background: #FFFFFF;
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius.lg};

  [data-theme='dark'] & {
    background: #2A2024;
    border-color: ${colors.border.dark};
  }
`;
