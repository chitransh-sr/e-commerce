import { useState } from 'react';
import styled from 'styled-components';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Quote, 
  MessageSquareHeart 
} from 'lucide-react';
import reviews from './customerReviewData';


const ReviewsContainer = styled.section`
  padding: 4rem 2rem;
  background: #F5E9D7;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  margin: 4rem auto;
  box-shadow: 0 12px 32px -12px rgba(122, 30, 43, 0.18);
  max-width: 1400px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  font-family: "Instrument Sans", sans-serif;

  html[data-theme="dark"] & {
    background: #1F1F1F;
    border-color: #E8D9C4;
    box-shadow: 0 12px 32px -12px rgba(0, 0, 0, 0.5);
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
    background: #7A1E2B;
    color: #F5E9D7;
    border-radius: 100px;
    font-size: 0.82rem;
    font-weight: 700;
    font-family: "Instrument Sans", sans-serif;
    margin-bottom: 0.75rem;

    html[data-theme="dark"] & {
      background: #7A1E2B;
      color: #F5E9D7;
    }
  }

  h2 {
    font-family: "Instrument Serif", serif;
    font-size: 2.4rem;
    font-weight: 900;
    color: #7A1E2B;
    letter-spacing: -0.02em;

    span {
      color: #7A1E2B;
    }

    html[data-theme="dark"] & {
      color: #E8CFC0;
      span {
        color: #C9A24C;
      }
    }
  }

  p {
    font-family: "Instrument Sans", sans-serif;
    font-size: 1rem;
    color: #1F1F1F;
    margin-top: 6px;

    html[data-theme="dark"] & {
      color: #CBBFA9;
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
  border-radius: 100px;
  background: #7A1E2B;
  border: 1px solid #7A1E2B;
  color: #F5E9D7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 8px 25px rgba(122, 30, 43, 0.25);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover:not(:disabled) {
    transform: translateY(-50%) scale(1.1);
    background: #C9A24C;
    color: #1F1F1F;
    border-color: #C9A24C;
    box-shadow: 0 12px 30px rgba(201, 162, 76, 0.35);
  }

  &:active:not(:disabled) {
    transform: translateY(-50%) scale(0.92);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  html[data-theme="dark"] & {
    background: #7A1E2B;
    border-color: #7A1E2B;
    color: #F5E9D7;

    &:hover:not(:disabled) {
      background: #C9A24C;
      color: #1F1F1F;
      border-color: #C9A24C;
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
  background: #FFFFFF;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #E8D9C4;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 6px 20px -6px rgba(122, 30, 43, 0.1);
  font-family: "Instrument Sans", sans-serif;

  &:hover {
    border-color: #C9A24C;
  }

  .quote-bg {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: rgba(201, 162, 76, 0.25);
    pointer-events: none;
  }

  html[data-theme="dark"] & {
    background: #2A2024;
    border-color: #E8D9C4;
    box-shadow: 0 8px 25px -6px rgba(0, 0, 0, 0.4);

    &:hover {
      border-color: #C9A24C;
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6);
    }

    .quote-bg {
      color: rgba(201, 162, 76, 0.2);
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
  background: ${props => props.color || '#7A1E2B'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F5E9D7;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(122, 30, 43, 0.2);
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
    font-family: "Instrument Serif", serif;
    color: #7A1E2B;
    font-size: 1.05rem;
    font-weight: 700;

    html[data-theme="dark"] & {
      color: #E8CFC0;
    }
  }

  .verified-badge {
    color: #C9A24C;
    display: inline-flex;
    align-items: center;
  }

  .date {
    margin: 0;
    color: #CBBFA9;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: 1rem;
  color: #C9A24C;
`;

const ReviewText = styled.p`
  color: #1F1F1F;
  line-height: 1.65;
  font-size: 0.95rem;
  font-family: "Instrument Sans", sans-serif;
  margin: 0;

  html[data-theme="dark"] & {
    color: #F5E9D7;
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
  border-radius: 100px;
  background: ${({ $isActive }) => ($isActive ? '#7A1E2B' : '#E8D9C4')};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  html[data-theme="dark"] & {
    background: ${({ $isActive }) => ($isActive ? '#C9A24C' : '#CBBFA9')};
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
                          fill={starIdx < review.rating ? '#C9A24C' : 'none'} 
                        />
                      ))}
                    </RatingContainer>

                    <ReviewText>&ldquo;{review.text}&rdquo;</ReviewText>
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
