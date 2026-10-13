import styled, { keyframes } from "styled-components";
import { colors, spacing, borderRadius, shadows, transitions } from '../../design-system/tokens';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: ${spacing['5xl']} ${spacing['5xl']};
  position: relative;

  @media (max-width: 768px) {
    padding: ${spacing['4xl']} ${spacing.md};
  }
`;

export const GridHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${spacing['4xl']};
  padding: 0 ${spacing.sm};
  flex-wrap: wrap;
  gap: ${spacing.md};

  .heading-group {
    h2 {
      font-family: "Instrument Serif", Georgia, serif;
      font-size: clamp(2.25rem, 4.8vw, 3rem);
      font-weight: 400;
      color: ${colors.text.heading};
    }
    p {
      font-family: "Instrument Sans", sans-serif;
      font-size: 0.875rem;
      color: ${colors.text.secondary};
      margin-top: ${spacing.xs};
    }
  }

  .count {
    font-family: "Instrument Sans", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${colors.text.secondary};

    span {
      color: ${colors.primary.DEFAULT};
      font-weight: 600;
    }
  }

  [data-theme='dark'] & {
    .heading-group h2 { color: #E8CFC0; }
    .heading-group p, .count { color: #CBBFA9; }
    .count span { color: ${colors.accent.DEFAULT}; }
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${spacing['4xl']} ${spacing['3xl']};
  animation: ${fadeIn} 0.4s ease-in-out;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.xl};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background: #FFFFFF;
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius.xl};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: ${transitions.cardHover};
  cursor: pointer;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }

  [data-theme='dark'] & {
    background: #2A2024;
    border-color: ${colors.border.dark};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  background: ${colors.primary[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: ${spacing.xl};

  [data-theme='dark'] & {
    background: #1F1F1F;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

export const TopBadges = styled.div`
  position: absolute;
  top: ${spacing.md};
  left: ${spacing.md};
  right: ${spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  z-index: 2;
`;

export const DiscountBadge = styled.div`
  background: ${colors.primary.DEFAULT};
  color: #F5E9D7;
  padding: 4px 12px 4px 8px;
  border-radius: 40px;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

export const TrendingBadge = styled.div`
  background: ${colors.accent.DEFAULT};
  color: #1F1F1F;
  padding: 4px 12px;
  border-radius: 40px;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

export const WishlistButton = styled.button`
  pointer-events: auto;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 1px solid ${colors.border.light};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${transitions.fast};
  color: ${({ $isWishlisted }) => ($isWishlisted ? '#7A1E2B' : '#6B6257')};

  &:hover {
    color: #7A1E2B;
    border-color: #7A1E2B;
  }

  &:active { transform: scale(0.92); }

  [data-theme='dark'] & {
    background: #1F1F1F;
    border-color: ${colors.border.dark};
    color: ${({ $isWishlisted }) => ($isWishlisted ? '#C9A24C' : '#CBBFA9')};
  }
`;

export const ProductInfo = styled.div`
  padding: ${spacing.xl};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CategoryTag = styled.span`
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${colors.text.secondary};
  letter-spacing: 0.13em;
  margin-bottom: ${spacing.sm};
`;

export const ProductTitle = styled.h3`
  font-family: "Instrument Serif", Georgia, serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${colors.text.heading};
  line-height: 1.25;
  margin-bottom: ${spacing.md};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;

  ${ProductCard}:hover & {
    color: ${colors.primary.DEFAULT};
  }

  [data-theme='dark'] & {
    color: #E8CFC0;
  }
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: ${spacing.md};
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.875rem;
  color: ${colors.text.secondary};

  .star-icon {
    color: #C9A24C;
    fill: #C9A24C;
  }

  .rating-score {
    color: ${colors.text.primary};
    font-weight: 600;
  }

  .rating-count {
    color: ${colors.text.disabled};
    font-size: 0.75rem;
  }

  [data-theme='dark'] & {
    color: #CBBFA9;
    .rating-score { color: #F5E9D7; }
  }
`;

export const PriceAndCartSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: ${spacing.md};
  border-top: 1px solid ${colors.border.light};

  [data-theme='dark'] & {
    border-color: ${colors.border.dark};
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  .current-price {
    font-family: "Instrument Sans", sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${colors.primary.DEFAULT};

    [data-theme='dark'] & {
      color: ${colors.accent.DEFAULT};
    }
  }

  .old-price {
    font-size: 0.8rem;
    color: ${colors.text.disabled};
    text-decoration: line-through;
    font-weight: 400;
  }
`;

export const QuickAddButton = styled.button`
  background: ${colors.primary.DEFAULT};
  color: #F5E9D7;
  border: none;
  min-width: 44px;
  min-height: 44px;
  padding: 0 20px;
  height: 44px;
  border-radius: ${borderRadius.pills};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: ${shadows.primary};
  transition: ${transitions.fast};

  &:hover {
    background: ${colors.accent.DEFAULT};
    color: #1F1F1F;
    transform: translateY(-1px);
  }

  &:active { transform: scale(0.96); }
`;

export const SoldOutBadge = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(31, 31, 31, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F5E9D7;
  font-family: "Instrument Serif", Georgia, serif;
  font-size: 1.5rem;
  z-index: 1;
`;

export const SkeletonCard = styled.div`
  background: ${colors.primary[100]};
  border-radius: ${borderRadius.xl};
  height: 430px;
  border: 1px solid ${colors.border.light};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing['3xl']};
  margin-top: ${spacing['7xl']};
`;

export const PaginationButton = styled.button`
  padding: 16px 24px;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #F5E9D7;
  background: ${colors.primary.DEFAULT};
  border: none;
  border-radius: ${borderRadius.pills};
  cursor: pointer;
  box-shadow: ${shadows.primary};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  transition: ${transitions.fast};

  &:hover:not(:disabled) {
    background: ${colors.accent.DEFAULT};
    color: #1F1F1F;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: ${colors.gray[400]};
  }
`;

export const PaginationText = styled.span`
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.875rem;
  color: ${colors.text.secondary};
  font-weight: 400;
  padding: ${spacing.sm} ${spacing['2xl']};
  background: #FFFFFF;
  border-radius: ${borderRadius.pills};
  border: 1px solid ${colors.border.light};

  span {
    color: ${colors.primary.DEFAULT};
    font-weight: 600;
  }

  [data-theme='dark'] & {
    background: #2A2024;
    border-color: ${colors.border.dark};
    color: #CBBFA9;
    span { color: ${colors.accent.DEFAULT}; }
  }
`;
