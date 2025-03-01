import { useState, useEffect } from 'react';
import data from '../../../CarouselData.json';
import {
  StyledCarouselContainer,
  StyledCarouselWrapper,
  StyledCarouselContent,
  StyledCarouselImage,
  CarouselButton,
  IndicatorsContainer,
  Indicator
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
    let interval;
    if (isAutoPlay) {
      interval = setInterval(handleNext, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, currentIndex]);

  return (
    <StyledCarouselContainer
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
      className='full-width'
    >
      <StyledCarouselWrapper>
        <CarouselButton position="left" onClick={handlePrev}>&#10094;</CarouselButton>
        
        <StyledCarouselContent>
          <StyledCarouselImage
            src={data.images[currentIndex].url}
            alt={data.images[currentIndex].title}
          />
        </StyledCarouselContent>

        <CarouselButton position="right" onClick={handleNext}>&#10095;</CarouselButton>
      </StyledCarouselWrapper>
      <IndicatorsContainer>
        {data.images.map((_, index) => (
          <Indicator 
            key={index}
            isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </IndicatorsContainer>
    </StyledCarouselContainer>
  );
}

export default CarauselApp;