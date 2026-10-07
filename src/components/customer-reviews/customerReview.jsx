import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Quote, 
  MessageSquareHeart 
} from 'lucide-react';
import reviews from './customerReviewData';

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

const ReviewsContainer = styled.section`
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(226, 232, 240, 0.85);
  border-radius: 32px;
  margin: 4rem auto;
  box-shadow: 
    0 25px 60px -15px rgba(59, 130, 246, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.02);
  max-width: 1400px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  html[data-theme="dark"] & {
    background: rgba(15, 23, 42, 0.7);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
    margin: 2.5rem auto;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: rgba(59, 130, 246, 0.1);
    color: #2563eb;
    border-radius: 9999px;
    font-size: 0.82rem;
    font-weight: 700;
    margin-bottom: 0.75rem;

    html[data-theme="dark"] & {
      background: rgba(96, 165, 250, 0.15);
      color: #60a5fa;
    }
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.02em;

    span {
      background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    html[data-theme="dark"] & {
      color: #f1f5f9;
      span {
        background: linear-gradient(135deg, #60a5fa 0%, #c084fc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  p {
    font-size: 1rem;
    color: #64748b;
    margin-top: 6px;

    html[data-theme="dark"] & {
      color: #94a3b8;
    }
  }
`;

const ReviewsWrapper = styled.div`
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => (props.direction === 'left' ? 'left: -20px;' : 'right: -20px;')}
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: 1px solid rgba(226, 232, 240, 0.9);
  color: #1e293b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover:not(:disabled) {
    transform: translateY(-50%) scale(1.1);
    background: #eff6ff;
    color: #2563eb;
    border-color: #bfdbfe;
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.25);
  }

  &:active:not(:disabled) {
    transform: translateY(-50%) scale(0.92);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  html[data-theme="dark"] & {
    background: #1e293b;
    border-color: rgba(255, 255, 255, 0.12);
    color: #f1f5f9;

    &:hover:not(:disabled) {
      background: #334155;
      color: #60a5fa;
      border-color: rgba(96, 165, 250, 0.4);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ReviewsSlider = styled.div`
  display: flex;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
`;

const SlidePage = styled.div`
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  padding: 0 0.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(14px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(226, 232, 240, 0.85);
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 6px 20px -6px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(59, 130, 246, 0.35);
    box-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.15);
  }

  .quote-bg {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: rgba(59, 130, 246, 0.08);
    pointer-events: none;
  }

  html[data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.65);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 25px -6px rgba(0, 0, 0, 0.4);

    &:hover {
      border-color: rgba(99, 102, 241, 0.4);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6);
    }

    .quote-bg {
      color: rgba(255, 255, 255, 0.04);
    }
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 1.25rem;
`;

const ProfileImage = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${props => props.color || 'linear-gradient(135deg, #3b82f6, #2563eb)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  flex: 1;

  .name-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  h4 {
    margin: 0;
    color: #0f172a;
    font-size: 1.05rem;
    font-weight: 700;

    html[data-theme="dark"] & {
      color: #f1f5f9;
    }
  }

  .verified-badge {
    color: #10b981;
    display: inline-flex;
    align-items: center;
  }

  .date {
    margin: 0;
    color: #94a3b8;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: 1rem;
  color: #f59e0b;
`;

const ReviewText = styled.p`
  color: #475569;
  line-height: 1.65;
  font-size: 0.95rem;
  margin: 0;

  html[data-theme="dark"] & {
    color: #cbd5e1;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 2.5rem;
`;

const Dot = styled.button`
  width: ${({ $isActive }) => ($isActive ? '26px' : '8px')};
  height: 8px;
  border-radius: 9999px;
  background: ${({ $isActive }) => ($isActive ? '#2563eb' : '#cbd5e1')};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  html[data-theme="dark"] & {
    background: ${({ $isActive }) => ($isActive ? '#60a5fa' : '#475569')};
  }
`;

const CustomerReviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <ReviewsContainer id="customer-reviews">
      <SectionHeader>
        <div className="badge">
          <MessageSquareHeart size={16} />
          Customer Experiences
        </div>
        <h2>
          Loved by Over <span>50,000+</span> Shoppers
        </h2>
        <p>Real verified reviews from our worldwide customer community.</p>
      </SectionHeader>

      <ReviewsWrapper>
        <NavigationButton 
          direction="left" 
          onClick={handlePrev}
          aria-label="Previous reviews"
        >
          <ChevronLeft size={22} />
        </NavigationButton>

        <div style={{ overflow: 'hidden' }}>
          <ReviewsSlider style={{ transform: `translateX(-${currentPage * 100}%)` }}>
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <SlidePage key={pageIndex}>
                {reviews.slice(pageIndex * reviewsPerPage, (pageIndex + 1) * reviewsPerPage).map((review, idx) => (
                  <ReviewCard key={review.id || idx}>
                    <Quote size={48} className="quote-bg" />
                    <ProfileContainer>
                      <ProfileImage color={review.user.color}>
                        {review.user.image ? (
                          <img src={review.user.image} alt={review.user.name} />
                        ) : (
                          review.user.initials
                        )}
                      </ProfileImage>
                      <UserInfo>
                        <div className="name-row">
                          <h4>{review.user.name}</h4>
                          <span className="verified-badge" title="Verified Buyer">
                            <CheckCircle size={15} />
                          </span>
                        </div>
                        <p className="date">{new Date(review.date).toLocaleDateString()}</p>
                      </UserInfo>
                    </ProfileContainer>

                    <RatingContainer>
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star 
                          key={starIdx} 
                          size={16} 
                          fill={starIdx < review.rating ? '#f59e0b' : 'none'} 
                        />
                      ))}
                    </RatingContainer>

                    <ReviewText>"{review.text}"</ReviewText>
                  </ReviewCard>
                ))}
              </SlidePage>
            ))}
          </ReviewsSlider>
        </div>

        <NavigationButton 
          direction="right" 
          onClick={handleNext}
          aria-label="Next reviews"
        >
          <ChevronRight size={22} />
        </NavigationButton>
      </ReviewsWrapper>

      <DotsContainer>
        {Array.from({ length: totalPages }).map((_, dotIdx) => (
          <Dot
            key={dotIdx}
            $isActive={dotIdx === currentPage}
            onClick={() => setCurrentPage(dotIdx)}
            aria-label={`Go to review page ${dotIdx + 1}`}
          />
        ))}
      </DotsContainer>
    </ReviewsContainer>
  );
};

export default CustomerReviews;
