import styled, { keyframes } from "styled-components";
import { spacing } from '../../design-system/tokens';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${spacing['5xl']} ${spacing.xl} ${spacing['6xl']};
  background: #F5E9D7;
  font-family: "Instrument Sans", sans-serif;
  animation: ${fadeInUp} 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 768px) {
    padding: ${spacing['3xl']} ${spacing.md} ${spacing['4xl']};
  }

  [data-theme='dark'] & {
    background: #1A0F11;
  }
`;

export const BreadcrumbRow = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.xl};
  font-size: 0.95rem;
  color: #5C4A3A;
  padding: 0 ${spacing.sm};

  .link {
    cursor: pointer;
    color: #7A1E2B;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: ${spacing.xs};
    transition: color 0.2s ease;

    &:hover {
      color: #C9A24C;
      text-decoration: underline;
    }
  }

  .separator {
    color: #C9A24C;
    [data-theme='dark'] & {
      color: #4A2E33;
    }
  }

  .current {
    color: #1F1F1F;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
  }

  [data-theme='dark'] & {
    color: #E8CFC0;
    .link {
      color: #C9A24C;
    }
    .current {
      color: #F5E9D7;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const ProductDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: ${spacing['5xl']};
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  padding: ${spacing['3xl']};
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(122, 30, 43, 0.08);
  gap: ${spacing['4xl']} !important;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${spacing['3xl']};
    padding: ${spacing['2xl']};
  }

  @media (max-width: 640px) {
    padding: ${spacing.xl};
    border-radius: 1rem;
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  }
`;

export const ImageGalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.sm};
  margin-bottom: ${spacing.md};

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #E8D9C4;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #7A1E2B;
    transform: scale(1.05);
  }

  [data-theme='dark'] & {
    border-color: #4A2E33;
  }
`;

export const MainImageCard = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  background: #F5E9D7;
  border-radius: 1rem;
  border: 1px solid #E8D9C4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing['2xl']};
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }

  [data-theme='dark'] & {
    background: #1A0F11;
    border-color: #4A2E33;
  }

  @media (max-width: 640px) {
    height: 360px;
    padding: ${spacing.lg};
  }
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CategoryPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.xs};
  padding: 6px 14px;
  background: rgba(122, 30, 43, 0.08);
  color: #7A1E2B;
  border: 1px solid #E8D9C4;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: fit-content;
  margin-bottom: ${spacing.md};

  [data-theme='dark'] & {
    background: rgba(201, 162, 76, 0.12);
    color: #C9A24C;
    border-color: #4A2E33;
  }
`;

export const Title = styled.h1`
  font-family: "Instrument Serif", serif;
  font-size: 2.4rem;
  font-weight: 400;
  color: #7A1E2B;
  line-height: 1.2;
  margin-bottom: ${spacing.md};
  letter-spacing: -0.03em;

  [data-theme='dark'] & {
    font-family: "Instrument Serif", serif;
    color: #E8CFC0;
  }

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  margin-bottom: ${spacing.xl};

  .stars {
    display: flex;
    align-items: center;
    gap: 2px;
    color: #C9A24C;
  }

  .score {
    font-size: 1rem;
    font-weight: 700;
    color: #1F1F1F;
  }

  .in-stock {
    display: inline-flex;
    align-items: center;
    gap: ${spacing.xs};
    padding: 4px 12px;
    background: rgba(122, 30, 43, 0.08);
    color: #7A1E2B;
    border: 1px solid #E8D9C4;
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 700;
  }

  [data-theme='dark'] & {
    .score {
      color: #F5E9D7;
    }
    .in-stock {
      color: #C9A24C;
      background: rgba(201, 162, 76, 0.12);
      border-color: #4A2E33;
    }
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing.xl};
  margin-bottom: ${spacing.xl};
  padding-bottom: ${spacing.xl};
  border-bottom: 1px solid #E8D9C4;

  .price {
    font-size: 2.5rem;
    font-weight: 800;
    color: #7A1E2B;
  }

  .original-price {
    font-size: 1.25rem;
    color: #9C7A6A;
    text-decoration: line-through;
    font-weight: 500;
  }

  .save-badge {
    background: #7A1E2B;
    color: #F5E9D7;
    font-size: 0.8rem;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 8px;
  }

  [data-theme='dark'] & {
    border-color: #4A2E33;
    .price {
      color: #C9A24C;
    }
    .save-badge {
      background: #C9A24C;
      color: #1F1F1F;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #5C4A3A;
  margin-bottom: ${spacing.xl};

  [data-theme='dark'] & {
    color: #E8CFC0;
  }
`;

export const ActionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xl};
  margin-bottom: ${spacing['3xl']};
`;

export const QuantityControlRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xl};

  span.label {
    font-size: 1rem;
    font-weight: 700;
    color: #1F1F1F;

    [data-theme='dark'] & {
      color: #F5E9D7;
    }
  }
`;

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 100px;
  overflow: hidden;

  button {
    width: 42px;
    height: 42px;
    border: none;
    background: transparent;
    color: #7A1E2B;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      background: rgba(122, 30, 43, 0.08);
      color: #7A1E2B;
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  .count {
    min-width: 48px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 700;
    color: #1F1F1F;
  }

  [data-theme='dark'] & {
    background: #1A0F11;
    border-color: #4A2E33;

    button {
      color: #E8CFC0;
      &:hover:not(:disabled) {
        background: rgba(201, 162, 76, 0.15);
        color: #C9A24C;
      }
    }

    .count {
      color: #F5E9D7;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${spacing.md};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const AddToCartBtn = styled.button`
  flex: 1;
  padding: ${spacing.lg} ${spacing['2xl']};
  background: #7A1E2B;
  color: #F5E9D7;
  border: none;
  border-radius: 100px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  transition: all 0.2s ease;

  &:hover {
    background: #C9A24C;
    color: #1F1F1F;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.96);
  }

  [data-theme='dark'] & {
    background: #7A1E2B;
    color: #F5E9D7;

    &:hover {
      background: #C9A24C;
      color: #1F1F1F;
    }
  }
`;

export const BuyNowBtn = styled.button`
  flex: 1;
  padding: ${spacing.lg} ${spacing['2xl']};
  background: #FFFFFF;
  color: #7A1E2B;
  border: 1px solid #7A1E2B;
  border-radius: 100px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  transition: all 0.2s ease;

  &:hover {
    background: #C9A24C;
    border-color: #C9A24C;
    color: #1F1F1F;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.96);
  }

  [data-theme='dark'] & {
    background: transparent;
    border-color: #C9A24C;
    color: #C9A24C;

    &:hover {
      background: #C9A24C;
      color: #1F1F1F;
    }
  }
`;

export const FeatureChips = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing.sm};
  padding-top: ${spacing.xl};
  border-top: 1px solid #E8D9C4;

  .chip {
    display: flex;
    align-items: center;
    gap: ${spacing.sm};
    font-size: 0.9rem;
    font-weight: 600;
    color: #5C4A3A;
    padding: ${spacing.sm} ${spacing.md};
    background: #F5E9D7;
    border: 1px solid #E8D9C4;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
      border-color: #C9A24C;
    }
  }

  [data-theme='dark'] & {
    border-color: #4A2E33;
    .chip {
      color: #E8CFC0;
      background: #1A0F11;
      border-color: #4A2E33;
    }
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
