import styled, { keyframes } from 'styled-components';
import { colors, spacing, borderRadius, shadows, transitions, zIndex } from '../../design-system/tokens';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const HeroSection = styled.div`
  max-width: 120rem;
  margin: ${spacing.xl} auto ${spacing['5xl']};
  padding: 0 ${spacing.xl};

  @media (max-width: 768px) {
    padding: 0 ${spacing.md};
    margin: ${spacing.lg} auto ${spacing['4xl']};
  }
`;

export const StyledCarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${borderRadius.xl};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.border.light};
  animation: ${fadeIn} 0.4s ease-in-out;
  background: #1F1F1F;
  height: 640px;

  @media (max-width: 1024px) {
    height: 520px;
  }

  @media (max-width: 768px) {
    height: 420px;
    border-radius: ${borderRadius.lg};
  }

  @media (max-width: 480px) {
    height: 340px;
    margin: ${spacing.md} auto;
  }
`;

export const StyledCarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SlideItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  pointer-events: ${({ $isActive }) => ($isActive ? 'auto' : 'none')};
`;

export const StyledCarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const OverlayGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(31, 31, 31, 0.75) 0%,
    rgba(31, 31, 31, 0.35) 45%,
    rgba(31, 31, 31, 0.05) 70%,
    transparent 100%
  );
  z-index: 1;
`;

export const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${spacing['5xl']} ${spacing['4xl']};
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 640px;

  @media (max-width: 1024px) {
    padding: ${spacing['3xl']} ${spacing['2xl']};
    max-width: 560px;
  }

  @media (max-width: 768px) {
    padding: ${spacing.xl} ${spacing.lg};
    max-width: 100%;
  }
`;

export const OfferBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px 6px 12px;
  background: ${colors.accent.DEFAULT};
  color: #1F1F1F;
  border-radius: 40px;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  margin-bottom: ${spacing.xl};

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: ${spacing.lg};
  }
`;

export const SlideTitle = styled.h2`
  font-family: "Instrument Serif", Georgia, serif;
  font-size: clamp(2.25rem, 4.8vw, 3.5rem);
  font-weight: 400;
  color: #FFFFFF;
  line-height: 1.1;
  margin-bottom: ${spacing.md};
  letter-spacing: 0;
`;

export const SlideOfferText = styled.p`
  font-family: "Instrument Sans", sans-serif;
  font-size: 1rem;
  color: #F5E9D7;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: ${spacing['4xl']};
  max-width: 560px;

  @media (max-width: 768px) {
    margin-bottom: ${spacing.xl};
  }
`;

export const HeroCtaButton = styled.button`
  background: ${colors.primary.DEFAULT};
  color: #F5E9D7;
  border: none;
  padding: 16px 32px;
  border-radius: ${borderRadius.pills};
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: ${shadows.primary};
  transition: ${transitions.fast};

  &:hover {
    background: ${colors.accent.DEFAULT};
    color: #1F1F1F;
    transform: translateY(-1px);
  }

  &:active { transform: scale(0.98); }
`;

export const CarouselNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => ($position === 'left' ? 'left: 1.5rem;' : 'right: 1.5rem;')}
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(245, 233, 215, 0.9);
  border: 1px solid ${colors.border.light};
  color: ${colors.primary.DEFAULT};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: ${zIndex.dropdown};
  transition: ${transitions.fast};

  &:hover {
    background: ${colors.primary.DEFAULT};
    color: #F5E9D7;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    ${({ $position }) => ($position === 'left' ? 'left: 0.75rem;' : 'right: 0.75rem;')}
  }
`;

export const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: ${spacing.xl};
  right: ${spacing['4xl']};
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: ${zIndex.dropdown};

  @media (max-width: 768px) {
    bottom: ${spacing.md};
    right: ${spacing.md};
  }
`;

export const Indicator = styled.button`
  height: 6px;
  width: ${({ $isActive }) => ($isActive ? '28px' : '10px')};
  background: ${({ $isActive }) => ($isActive ? '#C9A24C' : 'rgba(245, 233, 215, 0.5)')};
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #F5E9D7;
  }
`;

export const PerksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.xl};
  margin-top: ${spacing['4xl']};

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.lg};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const PerkCard = styled.div`
  background: #FFFFFF;
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius.lg};
  padding: ${spacing.xl};
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  transition: ${transitions.fast};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.md};
  }

  .icon-box {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ $bg }) => $bg || colors.primary.DEFAULT};
    color: #F5E9D7;
    flex-shrink: 0;
  }

  .text-box {
    h4 {
      font-family: "Instrument Sans", sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: ${colors.text.primary};
      margin-bottom: 2px;
    }

    p {
      font-size: 0.8rem;
      color: ${colors.text.secondary};
      line-height: 1.4;
    }
  }

  [data-theme='dark'] & {
    background: #2A2024;
    border-color: ${colors.border.dark};

    .text-box {
      h4 { color: #F5E9D7; }
      p { color: #CBBFA9; }
    }
  }
`;
