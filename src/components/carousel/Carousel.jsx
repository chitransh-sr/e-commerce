import { useState, useEffect, useCallback } from 'react';
import data from '../../../CarouselData.json';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Flame, 
  Truck, 
  ShieldCheck, 
  Gem, 
  RotateCcw
} from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import { colors, spacing, borderRadius, shadows, transitions, zIndex } from '../../design-system/tokens';

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

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(249, 115, 22, 0); }
`;

export const HeroSection = styled.div`
  max-width: 1400px;
  margin: ${spacing.xl} auto ${spacing['5xl']};
  padding: 0 ${spacing.xl};
  animation: ${fadeIn} 0.5s ease;

  @media (max-width: 768px) {
    padding: 0 ${spacing.md};
    margin: ${spacing.lg} auto ${spacing['4xl']};
  }
`;

export const StyledCarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${borderRadius['3xl']};
  box-shadow: ${shadows.xl};
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  background: #0f172a;
  height: 720px;

  [data-theme='dark'] & {
    border-color: ${colors.border.dark};
    box-shadow: ${shadows['3xl']};
    height: 680px;
  }

  @media (max-width: 1024px) {
    height: 560px;
    border-radius: ${borderRadius['2xl']};

    [data-theme='dark'] & {
      height: 520px;
    }
  }

  @media (max-width: 768px) {
    height: 420px;
    border-radius: ${borderRadius.xl};

    [data-theme='dark'] & {
      height: 380px;
    }
  }

  @media (max-width: 480px) {
    height: 320px;
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
  transform: scale(${({ $isActive }) => ($isActive ? 1 : 1.05)});
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: ${({ $isActive }) => ($isActive ? 'auto' : 'none')};
`;

export const StyledCarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.75) saturate(0.9);
  transition: transform 0.8s ease;

  ${StyledCarouselContainer}:hover & {
    transform: scale(1.03);
  }
`;

export const OverlayGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg, 
    rgba(15, 23, 42, 0.92) 0%, 
    rgba(15, 23, 42, 0.55) 45%, 
    rgba(15, 23, 42, 0.15) 70%,
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
  animation: ${slideUpText} 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (max-width: 1024px) {
    padding: ${spacing['3xl']} ${spacing['2xl']};
    max-width: 560px;
  }

  @media (max-width: 768px) {
    padding: ${spacing.xl} ${spacing.lg};
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: ${spacing.lg} ${spacing.md};
  }
`;

export const OfferBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: ${colors.gradients.warm};
  color: white;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${spacing.xl};
  box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);
  backdrop-filter: blur(10px);
  animation: ${pulse} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.75rem;
    margin-bottom: ${spacing.lg};
  }
`;

export const SlideTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: ${spacing.xl};
  letter-spacing: -0.03em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: ${spacing.lg};
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const SlideOfferText = styled.p`
  font-size: 1.3rem;
  color: #e2e8f0;
  font-weight: 500;
  margin-bottom: ${spacing['4xl']};
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  max-width: 560px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: ${spacing.xl};
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: ${spacing.lg};
  }
`;

export const HeroCtaButton = styled.button`
  background: ${colors.gradients.primary};
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: ${borderRadius.xl};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.5);
  transition: ${transitions.emphasis};

  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.65);
    background: linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 0.95rem;
  }
`;

export const CarouselNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => ($position === 'left' ? 'left: 1.5rem;' : 'right: 1.5rem;')}
  width: 56px;
  height: 56px;
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
  z-index: ${zIndex.dropdown};
  transition: ${transitions.emphasis};

  &:hover {
    background: rgba(255, 255, 255, 0.45);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(-50%) scale(0.92);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    ${({ $position }) => ($position === 'left' ? 'left: 0.75rem;' : 'right: 0.75rem;')}
  }
`;

export const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: ${spacing.xl};
  right: ${spacing['4xl']};
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: ${zIndex.dropdown};

  @media (max-width: 768px) {
    bottom: ${spacing.md};
    right: ${spacing.md};
  }
`;

export const Indicator = styled.button`
  height: 6px;
  width: ${({ $isActive }) => ($isActive ? '32px' : '12px')};
  background: ${({ $isActive }) => ($isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.4)')};
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: ${({ $isActive }) => ($isActive ? '0 0 8px rgba(255, 255, 255, 0.8)' : 'none')};

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

/* Perks Section Under Hero */
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
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius['2xl']};
  padding: ${spacing.xl};
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  transition: ${transitions.emphasis};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${shadows.xl};
    border-color: rgba(59, 130, 246, 0.3);
  }

  .icon-box {
    width: 52px;
    height: 52px;
    border-radius: ${borderRadius.lg};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ $bg }) => $bg || colors.gradients.primary};
    color: white;
    flex-shrink: 0;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  }

  .text-box {
    h4 {
      font-size: 0.95rem;
      font-weight: 700;
      color: ${colors.text.primary};
      margin-bottom: 2px;
    }

    p {
      font-size: 0.8rem;
      color: ${colors.text.secondary};
      line-height: 1.3;
    }
  }

  [data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.7);
    border-color: ${colors.border.dark};

    &:hover {
      box-shadow: ${shadows.xl};
      border-color: rgba(99, 102, 241, 0.3);
    }

    .text-box {
      h4 {
        color: ${colors.text.primaryDark};
      }
      p {
        color: ${colors.text.secondaryDark};
      }
    }
  }
`;

function CarauselApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % data.images.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + data.images.length) % data.images.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(handleNext, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlay, currentIndex, handleNext]);

  const scrollToProducts = useCallback(() => {
    const element = document.getElementById('products-category');
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <HeroSection>
      <StyledCarouselContainer
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <StyledCarouselWrapper>
          <CarouselNavButton 
            $position="left" 
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </CarouselNavButton>

          {data.images.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <SlideItem key={slide.id || index} $isActive={isActive}>
                <StyledCarouselImage
                  src={slide.url}
                  alt={slide.title}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <OverlayGradient />
                {isActive && (
                  <SlideContent>
                    <OfferBadge>
                      <Flame size={16} />
                      Limited Time Drop
                    </OfferBadge>
                    <SlideTitle>{slide.title}</SlideTitle>
                    <SlideOfferText>{slide.offerText}</SlideOfferText>
                    <HeroCtaButton onClick={scrollToProducts}>
                      Shop Collection Now
                      <ArrowRight size={20} />
                    </HeroCtaButton>
                  </SlideContent>
                )}
              </SlideItem>
            );
          })}

          <CarouselNavButton 
            $position="right" 
            onClick={handleNext}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </CarouselNavButton>

          <IndicatorsContainer>
            {data.images.map((_, index) => (
              <Indicator
                key={index}
                $isActive={index === currentIndex}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </IndicatorsContainer>
        </StyledCarouselWrapper>
      </StyledCarouselContainer>

      {/* Modern Perks Strip */}
      <PerksGrid>
        <PerkCard $bg="linear-gradient(135deg, #3b82f6, #2563eb)">
          <div className="icon-box">
            <Truck size={24} />
          </div>
          <div className="text-box">
            <h4>Free Express Shipping</h4>
            <p>On all orders over ₹5,000</p>
          </div>
        </PerkCard>

        <PerkCard $bg="linear-gradient(135deg, #10b981, #059669)">
          <div className="icon-box">
            <ShieldCheck size={24} />
          </div>
          <div className="text-box">
            <h4>256-Bit Secure Pay</h4>
            <p>Certified encrypted checkout</p>
          </div>
        </PerkCard>

        <PerkCard $bg="linear-gradient(135deg, #8b5cf6, #6366f1)">
          <div className="icon-box">
            <Gem size={24} />
          </div>
          <div className="text-box">
            <h4>Verified Authenticity</h4>
            <p>100% genuine premium brands</p>
          </div>
        </PerkCard>

        <PerkCard $bg="linear-gradient(135deg, #f97316, #ea580c)">
          <div className="icon-box">
            <RotateCcw size={24} />
          </div>
          <div className="text-box">
            <h4>30-Day Easy Returns</h4>
            <p>Hassle-free refunds</p>
          </div>
        </PerkCard>
      </PerksGrid>
    </HeroSection>
  );
}

export default CarauselApp;