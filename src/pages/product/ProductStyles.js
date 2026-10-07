import styled, { keyframes } from "styled-components";

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
  padding: 2rem 2rem 5rem;
  animation: ${fadeInUp} 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 768px) {
    padding: 1rem 1rem 3rem;
  }
`;

export const BreadcrumbRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #64748b;

  .link {
    cursor: pointer;
    color: #3b82f6;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: color 0.2s ease;

    &:hover {
      color: #1d4ed8;
      text-decoration: underline;
    }
  }

  .separator {
    color: #cbd5e1;
  }

  .current {
    color: #0f172a;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
  }

  html[data-theme='dark'] & {
    color: #94a3b8;
    .current {
      color: #f1f5f9;
    }
  }
`;

export const ProductDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 3.5rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  padding: 3rem;
  border-radius: 32px;
  box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.06);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 2rem;
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
    border-radius: 24px;
  }

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.85);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 25px 60px -10px rgba(0, 0, 0, 0.5);
  }
`;

export const ImageGalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const MainImageCard = styled.div`
  position: relative;
  width: 100%;
  height: 440px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 24px;
  border: 1px solid rgba(226, 232, 240, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.08);
    }
  }

  html[data-theme='dark'] & {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    border-color: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 640px) {
    height: 320px;
    padding: 1.5rem;
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
  gap: 6px;
  padding: 6px 14px;
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: fit-content;
  margin-bottom: 1rem;

  html[data-theme='dark'] & {
    background: rgba(96, 165, 250, 0.15);
    color: #60a5fa;
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;

  html[data-theme='dark'] & {
    color: #f1f5f9;
  }

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.5rem;

  .stars {
    display: flex;
    align-items: center;
    gap: 3px;
    color: #f59e0b;
  }

  .score {
    font-size: 0.95rem;
    font-weight: 700;
    color: #0f172a;
  }

  .in-stock {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(16, 185, 129, 0.12);
    color: #059669;
    border-radius: 9999px;
    font-size: 0.78rem;
    font-weight: 700;
  }

  html[data-theme='dark'] & {
    .score {
      color: #f1f5f9;
    }
    .in-stock {
      color: #34d399;
      background: rgba(16, 185, 129, 0.2);
    }
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);

  .price {
    font-size: 2.6rem;
    font-weight: 900;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    html[data-theme='dark'] & {
      background: linear-gradient(135deg, #60a5fa, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .original-price {
    font-size: 1.25rem;
    color: #94a3b8;
    text-decoration: line-through;
    font-weight: 500;
  }

  .save-badge {
    background: #10b981;
    color: white;
    font-size: 0.75rem;
    font-weight: 800;
    padding: 4px 8px;
    border-radius: 8px;
  }

  html[data-theme='dark'] & {
    border-color: rgba(255, 255, 255, 0.08);
  }
`;

export const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 2rem;

  html[data-theme='dark'] & {
    color: #cbd5e1;
  }
`;

export const ActionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`;

export const QuantityControlRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  span.label {
    font-size: 0.95rem;
    font-weight: 700;
    color: #0f172a;

    html[data-theme='dark'] & {
      color: #f1f5f9;
    }
  }
`;

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(241, 245, 249, 0.9);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 14px;
  overflow: hidden;

  button {
    width: 38px;
    height: 38px;
    border: none;
    background: transparent;
    color: #1e293b;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      background: rgba(59, 130, 246, 0.15);
      color: #2563eb;
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  .count {
    min-width: 44px;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    color: #0f172a;
  }

  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(255, 255, 255, 0.1);

    button {
      color: #f1f5f9;
      &:hover:not(:disabled) {
        background: rgba(96, 165, 250, 0.2);
        color: #60a5fa;
      }
    }

    .count {
      color: #f1f5f9;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const AddToCartBtn = styled.button`
  flex: 1;
  padding: 1.1rem 2rem;
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }

  html[data-theme='dark'] & {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
  }
`;

export const BuyNowBtn = styled.button`
  flex: 1;
  padding: 1.1rem 2rem;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.35);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(249, 115, 22, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const FeatureChips = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(226, 232, 240, 0.8);

  .chip {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #475569;
  }

  html[data-theme='dark'] & {
    border-color: rgba(255, 255, 255, 0.08);
    .chip {
      color: #94a3b8;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
