import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUpText = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroSection = styled.div`
  max-width: 1400px;
  margin: 1.5rem auto 3rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin: 1rem auto 2rem;
  }
`;

export const StyledCarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  box-shadow: 
    0 25px 60px -15px rgba(59, 130, 246, 0.2),
    0 10px 30px -10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  animation: ${fadeIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  background: #0f172a;

  html[data-theme='dark'] & {
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 
      0 30px 70px -15px rgba(0, 0, 0, 0.6),
      0 0 40px -10px rgba(99, 102, 241, 0.25);
  }
`;

export const StyledCarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 420px;
  }

  @media (max-width: 768px) {
    height: 360px;
  }

  @media (max-width: 480px) {
    height: 320px;
  }
`;

export const SlideItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transform: scale(${({ $isActive }) => ($isActive ? 1 : 1.05)});
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: ${({ $isActive }) => ($isActive ? 'auto' : 'none')};
`;

export const StyledCarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.85);
  transition: transform 0.6s ease;

  ${StyledCarouselContainer}:hover & {
    transform: scale(1.03);
  }
`;

export const OverlayGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg, 
    rgba(15, 23, 42, 0.85) 0%, 
    rgba(15, 23, 42, 0.5) 45%, 
    transparent 100%
  );
  z-index: 1;
`;

export const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 3.5rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 700px;
  animation: ${slideUpText} 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const OfferBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(249, 115, 22, 0.9);
  color: white;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);
  backdrop-filter: blur(10px);
`;

export const SlideTitle = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 0.75rem;
  letter-spacing: -0.03em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const SlideOfferText = styled.p`
  font-size: 1.25rem;
  color: #e2e8f0;
  font-weight: 500;
  margin-bottom: 1.75rem;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }
`;

export const HeroCtaButton = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  padding: 12px 26px;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.5);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.65);
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const CarouselNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => ($position === 'left' ? 'left: 1.5rem;' : 'right: 1.5rem;')}
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.45);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(-50%) scale(0.92);
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    ${({ $position }) => ($position === 'left' ? 'left: 0.75rem;' : 'right: 0.75rem;')}
  }
`;

export const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1.5rem;
  }
`;

export const Indicator = styled.div`
  height: 6px;
  width: ${({ $isActive }) => ($isActive ? '32px' : '10px')};
  background: ${({ $isActive }) => ($isActive ? '#3b82f6' : 'rgba(255, 255, 255, 0.4)')};
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: ${({ $isActive }) => ($isActive ? '0 0 12px rgba(59, 130, 246, 0.8)' : 'none')};

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

/* Perks Section Under Hero */
export const PerksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const PerkCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 20px;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px -10px rgba(59, 130, 246, 0.15);
    border-color: rgba(59, 130, 246, 0.3);
  }

  .icon-box {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ $bg }) => $bg || 'linear-gradient(135deg, #3b82f6, #2563eb)'};
    color: white;
    flex-shrink: 0;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  }

  .text-box {
    h4 {
      font-size: 0.95rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 2px;
    }
    p {
      font-size: 0.8rem;
      color: #64748b;
      line-height: 1.3;
    }
  }

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.7);
    border-color: rgba(255, 255, 255, 0.08);

    .text-box h4 {
      color: #f1f5f9;
    }
    .text-box p {
      color: #94a3b8;
    }

    &:hover {
      box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.4);
      border-color: rgba(99, 102, 241, 0.3);
    }
  }
`;