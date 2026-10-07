import { useState, useEffect } from 'react';
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
import {
  HeroSection,
  StyledCarouselContainer,
  StyledCarouselWrapper,
  SlideItem,
  StyledCarouselImage,
  OverlayGradient,
  SlideContent,
  OfferBadge,
  SlideTitle,
  SlideOfferText,
  HeroCtaButton,
  CarouselNavButton,
  IndicatorsContainer,
  Indicator,
  PerksGrid,
  PerkCard
} from './CarouselStyles';

function CarauselApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.images.length) % data.images.length);
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(handleNext, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay, currentIndex]);

  const scrollToProducts = () => {
    const element = document.getElementById('products-category');
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

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
                      <Flame size={14} />
                      Limited Time Drop
                    </OfferBadge>
                    <SlideTitle>{slide.title}</SlideTitle>
                    <SlideOfferText>{slide.offerText}</SlideOfferText>
                    <HeroCtaButton onClick={scrollToProducts}>
                      Shop Collection Now
                      <ArrowRight size={18} />
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
                onClick={() => setCurrentIndex(index)}
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
            <Truck size={22} />
          </div>
          <div className="text-box">
            <h4>Free Express Shipping</h4>
            <p>On all qualifying orders over $100</p>
          </div>
        </PerkCard>

        <PerkCard $bg="linear-gradient(135deg, #10b981, #059669)">
          <div className="icon-box">
            <ShieldCheck size={22} />
          </div>
          <div className="text-box">
            <h4>256-Bit Secure Pay</h4>
            <p>Certified encrypted checkout</p>
          </div>
        </PerkCard>

        <PerkCard $bg="linear-gradient(135deg, #8b5cf6, #6366f1)">
          <div className="icon-box">
            <Gem size={22} />
          </div>
          <div className="text-box">
            <h4>Verified Authentic</h4>
            <p>100% genuine top-tier brands</p>
          </div>
        </PerkCard>

        <PerkCard $bg="linear-gradient(135deg, #f97316, #ea580c)">
          <div className="icon-box">
            <RotateCcw size={22} />
          </div>
          <div className="text-box">
            <h4>30-Day Easy Returns</h4>
            <p>Instant hassle-free refunds</p>
          </div>
        </PerkCard>
      </PerksGrid>
    </HeroSection>
  );
}

export default CarauselApp;