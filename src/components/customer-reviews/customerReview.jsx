import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import reviews from './customerReviewData';

const ReviewsContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 24px;
  margin: 3rem 0;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.1);
  max-width: 100%;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #3b82f6, #f97316, #10b981);
  }
`;

const ReviewsTitle = styled.h2`
  font-size: 3rem;
  color: #1e293b;
  margin: 2rem 0;
  text-align: center;
  font-weight: 800;
  position: relative;
  padding-bottom: 2rem;
  font-family: 'Inter', sans-serif;

  &::after {
    content: '';
    display: block;
    width: 120px;
    height: 6px;
    background: linear-gradient(90deg, #3b82f6, #f97316);
    border-radius: 3px;
    margin: 1rem auto;
  }

  svg {
    width: 36px;
    height: 36px;
    fill: #f97316;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -15px;
  }
`;

const ReviewsWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #3b82f6, #f97316);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  color: white;
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 30px rgba(59, 130, 246, 0.5);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: translateY(-50%) scale(1);
  }
  
  svg {
    width: 24px;
    height: 24px;
    stroke: white;
    stroke-width: 2;
  }
  
  ${props => props.direction === 'left' ? 'left: -25px;' : 'right: -25px;'}
`;

const ReviewsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

const ReviewsSlider = styled.div`
  display: flex;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ReviewCard = styled.div`
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #f97316, #10b981);
    border-radius: 20px 20px 0 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.05), transparent);
    transform: rotate(45deg);
    transition: all 0.6s ease;
    opacity: 0;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 16px 48px rgba(59, 130, 246, 0.15);
    border-color: #3b82f6;
  }
  
  &:hover::after {
    opacity: 1;
    top: -100%;
    right: -100%;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${props => props.color || '#3b82f6'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-right: 1.5rem;
  overflow: hidden;
  border: 4px solid transparent;
  background-clip: padding-box;
  position: relative;
  font-size: 1.2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(135deg, #3b82f6, #f97316, #10b981);
    border-radius: 50%;
    z-index: -1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h3`
  margin: 0;
  color: #1e293b;
  font-size: 1.3rem;
  font-weight: 700;
  transition: color 0.3s ease;
  font-family: 'Inter', sans-serif;
  
  ${ReviewCard}:hover & {
    color: #3b82f6;
  }
`;

const ReviewDate = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 500;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 1rem 0;
`;

const StarFull = styled.svg.attrs({
  viewBox: '0 0 24 24',
  children: <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>,
})`
  width: 24px;
  height: 24px;
  fill: ${props => props.$filled ? '#f97316' : '#e2e8f0'};
  transition: all 0.3s ease;
  drop-shadow: 0 2px 4px rgba(249, 115, 22, 0.2);
`;

const StarHalf = styled.svg.attrs({
  viewBox: '0 0 24 24',
  children: (
    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6zM12 2v14.8l-3.6 2.8 1.4-4.2-3.6-2.8h4.4l1.4-4.2z"/>
  ),
})`
  width: 24px;
  height: 24px;
  fill: #f97316;
  drop-shadow: 0 2px 4px rgba(249, 115, 22, 0.2);
`;

const ReviewText = styled.p`
  color: #475569;
  line-height: 1.7;
  margin: 0;
  font-size: 1.05rem;
  transition: color 0.3s ease;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  
  ${ReviewCard}:hover & {
    color: #1e293b;
  }
`;

const getStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarFull key={i} $filled />);
  }

  if (hasHalfStar) {
    stars.push(<StarHalf key={stars.length} />);
  }

  while (stars.length < 5) {
    stars.push(<StarFull key={stars.length} $filled={false} />);
  }

  return stars;
};

const CustomerReview = ({ review }) => {
  return (
    <ReviewCard>
      <ProfileContainer>
        <ProfileImage color={review.user.color}>
          {review.user.image ? (
            <img src={review.user.image} alt={review.user.name} />
          ) : (
            review.user.initials
          )}
        </ProfileImage>
        <UserInfo>
          <UserName>{review.user.name}</UserName>
          <ReviewDate>{new Date(review.date).toLocaleDateString()}</ReviewDate>
        </UserInfo>
      </ProfileContainer>
      <RatingContainer>
        {getStars(review.rating)}
      </RatingContainer>
      <ReviewText>{review.text}</ReviewText>
    </ReviewCard>
  );
};

const CustomerReviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const scrollContainerRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (currentPage < totalPages - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 100);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 100);
    }
  };

  const getCurrentReviews = () => {
    const startIndex = currentPage * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    return reviews.slice(startIndex, endIndex);
  };

  return (
    <ReviewsContainer id="customer-reviews">
      <ReviewsTitle>
        Customer Reviews
      </ReviewsTitle>
      <ReviewsWrapper>
        <NavigationButton 
          direction="left" 
          onClick={handlePrev}
          disabled={currentPage === 0 || isTransitioning}
        >
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </NavigationButton>
        <NavigationButton 
          direction="right" 
          onClick={handleNext}
          disabled={currentPage === totalPages - 1 || isTransitioning}
        >
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </NavigationButton>
        <ReviewsContent>
          <ReviewsSlider 
            ref={scrollContainerRef}
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} style={{ 
                minWidth: '100%', 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                padding: '0 2rem'
              }}>
                {reviews.slice(pageIndex * reviewsPerPage, (pageIndex + 1) * reviewsPerPage).map((review, reviewIndex) => (
                  <CustomerReview key={`${pageIndex}-${reviewIndex}`} review={review} />
                ))}
              </div>
            ))}
          </ReviewsSlider>
        </ReviewsContent>
      </ReviewsWrapper>
    </ReviewsContainer>
  );
};

export default CustomerReviews;
