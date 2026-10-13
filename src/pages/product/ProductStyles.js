import styled, { keyframes } from "styled-components";
import { colors, spacing, borderRadius, shadows, transitions } from '../../design-system/tokens';

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
  animation: ${fadeInUp} 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 768px) {
    padding: ${spacing['3xl']} ${spacing.md} ${spacing['4xl']};
  }
`;

export const BreadcrumbRow = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.xl};
  font-size: 0.95rem;
  color: ${colors.text.secondary};
  padding: 0 ${spacing.sm};

  .link {
    cursor: pointer;
    color: ${colors.primary[600]};
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: ${spacing.xs};
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.primary[700]};
      text-decoration: underline;
    }
  }

  .separator {
    color: ${colors.gray[300]};
    [data-theme='dark'] & {
      color: ${colors.gray[600]};
    }
  }

  .current {
    color: ${colors.text.primary};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
  }

  [data-theme='dark'] & {
    color: ${colors.text.secondaryDark};
    .current {
      color: ${colors.text.primaryDark};
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
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid ${colors.border.light};
  padding: ${spacing['3xl']};
  border-radius: ${borderRadius['3xl']};
  box-shadow: ${shadows.lg};
  gap: ${spacing['4xl']} !important;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${spacing['3xl']};
    padding: ${spacing['2xl']};
  }

  @media (max-width: 640px) {
    padding: ${spacing.xl};
    border-radius: ${borderRadius['2xl']};
  }

  [data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.85);
    border-color: ${colors.border.dark};
    box-shadow: 0 25px 60px -10px rgba(0, 0, 0, 0.5);
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
  border-radius: ${borderRadius.md};
  border: 2px solid ${colors.border.light};
  cursor: pointer;
  transition: ${transitions.fast};

  &:hover {
    border-color: ${colors.primary[400]};
    transform: scale(1.05);
  }

  [data-theme='dark'] & {
    border-color: ${colors.border.dark};
  }
`;

export const MainImageCard = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: ${borderRadius['2xl']};
  border: 1px solid ${colors.border.light};
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
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    border-color: ${colors.border.dark};
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
  background: rgba(37, 99, 235, 0.1);
  color: ${colors.primary[600]};
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: fit-content;
  margin-bottom: ${spacing.md};

  [data-theme='dark'] & {
    background: rgba(96, 165, 250, 0.15);
    color: ${colors.primary[300]};
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
  color: ${colors.text.primary};
  line-height: 1.2;
  margin-bottom: ${spacing.md};
  letter-spacing: -0.03em;

  [data-theme='dark'] & {
    color: ${colors.text.primaryDark};
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
    color: #f59e0b;
  }

  .score {
    font-size: 1rem;
    font-weight: 700;
    color: ${colors.text.primary};
  }

  .in-stock {
    display: inline-flex;
    align-items: center;
    gap: ${spacing.xs};
    padding: 4px 12px;
    background: rgba(16, 185, 129, 0.12);
    color: ${colors.success[700]};
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 700;
  }

  [data-theme='dark'] & {
    .score {
      color: ${colors.text.primaryDark};
    }
    .in-stock {
      color: ${colors.success[400]};
      background: rgba(16, 185, 129, 0.2);
    }
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing.xl};
  margin-bottom: ${spacing.xl};
  padding-bottom: ${spacing.xl};
  border-bottom: 1px solid ${colors.border.light};

  .price {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    [data-theme='dark'] & {
      background: linear-gradient(135deg, #60a5fa, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .original-price {
    font-size: 1.25rem;
    color: ${colors.text.disabled};
    text-decoration: line-through;
    font-weight: 500;
  }

  .save-badge {
    background: ${colors.success[500]};
    color: white;
    font-size: 0.8rem;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 8px;
  }

  [data-theme='dark'] & {
    border-color: ${colors.border.dark};
  }
`;

export const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${colors.text.secondary};
  margin-bottom: ${spacing.xl};

  [data-theme='dark'] & {
    color: ${colors.text.secondaryDark};
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
    color: ${colors.text.primary};

    [data-theme='dark'] & {
      color: ${colors.text.primaryDark};
    }
  }
`;

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(241, 245, 249, 0.9);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius.lg};
  overflow: hidden;

  button {
    width: 42px;
    height: 42px;
    border: none;
    background: transparent;
    color: ${colors.text.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: ${transitions.fast};

    &:hover:not(:disabled) {
      background: rgba(37, 99, 235, 0.12);
      color: ${colors.primary[600]};
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
    color: ${colors.text.primary};
  }

  [data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: ${colors.border.dark};

    button {
      color: ${colors.text.primaryDark};
      &:hover:not(:disabled) {
        background: rgba(96, 165, 250, 0.15);
        color: ${colors.primary[300]};
      }
    }

    .count {
      color: ${colors.text.primaryDark};
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
  background: ${colors.gradients.primary};
  color: white;
  border: none;
  border-radius: ${borderRadius.lg};
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
  transition: ${transitions.emphasis};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }

  [data-theme='dark'] & {
    background: ${colors.gradients.violet};
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);

    &:hover {
      box-shadow: 0 12px 30px rgba(99, 102, 241, 0.5);
    }
  }
`;

export const BuyNowBtn = styled.button`
  flex: 1;
  padding: ${spacing.lg} ${spacing['2xl']};
  background: ${colors.gradients.warm};
  color: white;
  border: none;
  border-radius: ${borderRadius.lg};
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);
  transition: ${transitions.emphasis};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(245, 158, 11, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const FeatureChips = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing.sm};
  padding-top: ${spacing.xl};
  border-top: 1px solid ${colors.border.light};

  .chip {
    display: flex;
    align-items: center;
    gap: ${spacing.sm};
    font-size: 0.9rem;
    font-weight: 600;
    color: ${colors.text.secondary};
    padding: ${spacing.sm} ${spacing.md};
    background: rgba(248, 250, 252, 0.9);
    border-radius: ${borderRadius.lg};
    transition: ${transitions.fast};

    &:hover {
      background: rgba(241, 245, 249, 0.9);
    }
  }

  [data-theme='dark'] & {
    border-color: ${colors.border.dark};
    .chip {
      color: ${colors.text.secondaryDark};
      background: rgba(30, 41, 59, 0.7);
    }
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;