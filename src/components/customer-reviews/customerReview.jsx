import React from 'react';
import styled from 'styled-components';
import reviews from './customerReviewData';

const ReviewsContainer = styled.section`
  padding: 2rem;
  background: #ffffff;
  border-radius: 15px;
  margin: 2rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  overflow: hidden;
`;

const ReviewsTitle = styled.h2`
  font-size: 2.5rem;
  color: #2d3436;
  margin: 1.5rem 0;
  text-align: center;
  font-weight: 700;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    display: block;
    width: 350px;
    height: 4px;
    background: #fdcb6e;
    border-radius: 2px;
    margin: 0.5rem auto;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: #fdcb6e;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -10px;
  }
`;

const ReviewsContent = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`;

const ReviewCard = styled.div`
  min-width: 300px;
  max-width: 350px;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 0 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.color || '#74b9ff'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-right: 1rem;
  overflow: hidden;
  border: 2px solid #fdcb6e;

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
  color: #2d3436;
  font-size: 1.2rem;
  font-weight: 600;
`;

const ReviewDate = styled.p`
  margin: 0;
  color: #636e72;
  font-size: 0.9rem;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin: 0.5rem 0;
`;

const StarFull = styled.svg.attrs({
  viewBox: '0 0 24 24',
  children: <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>,
})`
  width: 22px;
  height: 22px;
  fill: ${props => props.$filled ? '#fdcb6e' : '#dfe6e9'};
`;

const StarHalf = styled.svg.attrs({
  viewBox: '0 0 24 24',
  children: (
    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6zM12 2v14.8l-3.6 2.8 1.4-4.2-3.6-2.8h4.4l1.4-4.2z"/>
  ),
})`
  width: 22px;
  height: 22px;
  fill: #fdcb6e;
`;

const ReviewText = styled.p`
  color: #2d3436;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
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
  return (
    <ReviewsContainer>
      <ReviewsTitle>
        Customer Reviews
      </ReviewsTitle>
      <ReviewsContent>
        {reviews.map((review, index) => (
          <CustomerReview key={index} review={review} />
        ))}
      </ReviewsContent>
    </ReviewsContainer>
  );
};

export default CustomerReviews;
