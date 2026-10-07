import styled, { keyframes } from "styled-components";

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

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 3rem;
  }
`;

export const GridHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 0.5rem;

  .count {
    font-size: 0.95rem;
    font-weight: 600;
    color: #64748b;
    span {
      color: #2563eb;
      font-weight: 700;
    }
  }

  html[data-theme='dark'] & {
    .count {
      color: #94a3b8;
      span {
        color: #60a5fa;
      }
    }
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 2rem;
  animation: ${fadeIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 24px;
  box-shadow: 
    0 10px 30px -10px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(0, 0, 0, 0.02);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 24px 45px -12px rgba(59, 130, 246, 0.2),
      0 0 0 1px rgba(59, 130, 246, 0.3);
    border-color: rgba(59, 130, 246, 0.3);
  }

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.85);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 
      0 12px 35px -10px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.04);

    &:hover {
      box-shadow: 
        0 24px 45px -12px rgba(0, 0, 0, 0.7),
        0 0 30px -5px rgba(99, 102, 241, 0.3);
      border-color: rgba(99, 102, 241, 0.4);
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1.5rem;

  html[data-theme='dark'] & {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${ProductCard}:hover & {
    transform: scale(1.08);
  }
`;

export const TopBadges = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  z-index: 2;
`;

export const DiscountBadge = styled.div`
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
`;

export const WishlistButton = styled.button`
  pointer-events: auto;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  color: ${({ $isWishlisted }) => ($isWishlisted ? '#ef4444' : '#64748b')};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: scale(1.15);
    color: #ef4444;
  }

  &:active {
    transform: scale(0.9);
  }

  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.85);
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ProductInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CategoryTag = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #3b82f6;
  letter-spacing: 0.5px;
  margin-bottom: 6px;

  html[data-theme='dark'] & {
    color: #60a5fa;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.35;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease;

  ${ProductCard}:hover & {
    color: #2563eb;
  }

  html[data-theme='dark'] & {
    color: #f1f5f9;

    ${ProductCard}:hover & {
      color: #60a5fa;
    }
  }
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 14px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;

  .star-icon {
    color: #f59e0b;
    fill: #f59e0b;
  }

  .rating-score {
    color: #0f172a;
    font-weight: 700;
  }

  .rating-count {
    color: #94a3b8;
    font-size: 0.75rem;
  }

  html[data-theme='dark'] & {
    color: #94a3b8;

    .rating-score {
      color: #f1f5f9;
    }
  }
`;

export const PriceAndCartSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid rgba(226, 232, 240, 0.7);

  html[data-theme='dark'] & {
    border-color: rgba(255, 255, 255, 0.08);
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;

  .current-price {
    font-size: 1.35rem;
    font-weight: 800;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    html[data-theme='dark'] & {
      background: linear-gradient(135deg, #60a5fa, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .old-price {
    font-size: 0.8rem;
    color: #94a3b8;
    text-decoration: line-through;
    font-weight: 500;
  }
`;

export const QuickAddButton = styled.button`
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
  color: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.5);
  }

  &:active {
    transform: scale(0.92);
  }

  html[data-theme='dark'] & {
    background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
    box-shadow: 0 4px 14px rgba(249, 115, 22, 0.35);

    &:hover {
      box-shadow: 0 8px 20px rgba(249, 115, 22, 0.5);
    }
  }
`;

/* Skeleton Placeholder */
export const SkeletonCard = styled.div`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  height: 400px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(226, 232, 240, 0.8);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite;
  }

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.6);
    border-color: rgba(255, 255, 255, 0.08);

    &::before {
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
    }
  }
`;

/* Pagination */
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  margin-top: 3.5rem;
`;

export const PaginationButton = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(37, 99, 235, 0.45);
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: #94a3b8;
    box-shadow: none;
  }

  html[data-theme='dark'] & {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

    &:hover:not(:disabled) {
      box-shadow: 0 8px 22px rgba(99, 102, 241, 0.45);
    }

    &:disabled {
      background: #475569;
    }
  }
`;

export const PaginationText = styled.span`
  font-size: 0.92rem;
  color: #475569;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 14px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);

  span {
    color: #2563eb;
    font-weight: 700;
  }

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
    color: #94a3b8;

    span {
      color: #60a5fa;
    }
  }
`;
