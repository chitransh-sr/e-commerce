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

export const FullWidthWrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 1.5rem 5rem;
  animation: ${fadeIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(226, 232, 240, 0.9);
  color: #334155;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  margin-bottom: 2rem;

  &:hover {
    background: #eff6ff;
    color: #2563eb;
    transform: translateX(-3px);
  }

  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
    color: #cbd5e1;

    &:hover {
      background: rgba(51, 65, 85, 0.9);
      color: #60a5fa;
    }
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 2.2rem;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.03em;
  }

  .item-count {
    padding: 4px 12px;
    background: rgba(59, 130, 246, 0.1);
    color: #2563eb;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 700;
  }

  html[data-theme='dark'] & {
    h1 {
      color: #f1f5f9;
    }
    .item-count {
      background: rgba(96, 165, 250, 0.15);
      color: #60a5fa;
    }
  }
`;

/* Shipping Progress Bar */
export const ShippingProgressBarCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 20px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);

  .message {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    color: #334155;
    margin-bottom: 10px;

    strong {
      color: #2563eb;
    }
  }

  .bar-bg {
    width: 100%;
    height: 8px;
    background: rgba(226, 232, 240, 0.8);
    border-radius: 9999px;
    overflow: hidden;

    .bar-fill {
      height: 100%;
      border-radius: 9999px;
      background: linear-gradient(90deg, #3b82f6, #10b981);
      transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.8);
    border-color: rgba(255, 255, 255, 0.08);

    .message {
      color: #cbd5e1;
      strong {
        color: #60a5fa;
      }
    }

    .bar-bg {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 2.5rem;
  align-items: flex-start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CartItemCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 20px;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.12);
    border-color: rgba(59, 130, 246, 0.3);
  }

  .item-left {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    min-width: 0;
    flex: 1;

    img {
      width: 72px;
      height: 72px;
      border-radius: 14px;
      object-fit: cover;
      background: #f1f5f9;
      flex-shrink: 0;
    }

    .details {
      min-width: 0;

      h3 {
        font-size: 1.05rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .price {
        font-size: 1.15rem;
        font-weight: 800;
        color: #2563eb;
      }
    }
  }

  .item-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-shrink: 0;
  }

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.8);
    border-color: rgba(255, 255, 255, 0.08);

    .item-left {
      img {
        background: #1e293b;
      }

      .details h3 {
        color: #f1f5f9;
      }

      .details .price {
        color: #60a5fa;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    .item-right {
      width: 100%;
      justify-content: space-between;
      border-top: 1px solid rgba(226, 232, 240, 0.8);
      padding-top: 12px;
    }
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  background: rgba(241, 245, 249, 0.9);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 12px;
  overflow: hidden;

  button {
    width: 34px;
    height: 34px;
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

  span {
    min-width: 36px;
    text-align: center;
    font-size: 0.95rem;
    font-weight: 700;
    color: #0f172a;
  }

  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(255, 255, 255, 0.1);

    button {
      color: #f1f5f9;
    }

    span {
      color: #f1f5f9;
    }
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #94a3b8;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: #ef4444;
    background: rgba(239, 68, 68, 0.1);
  }
`;

/* Summary Card */
export const OrderSummaryCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.35rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.85);
    border-color: rgba(255, 255, 255, 0.08);

    h3 {
      color: #f1f5f9;
    }
  }
`;

export const PromoCodeBox = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1.5rem;

  input {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid rgba(226, 232, 240, 0.9);
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    background: white;
    color: #0f172a;

    &::placeholder {
      text-transform: none;
      font-weight: 400;
      color: #94a3b8;
    }

    &:focus {
      outline: none;
      border-color: #3b82f6;
    }
  }

  button {
    padding: 10px 18px;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.9;
    }
  }

  html[data-theme='dark'] & {
    input {
      background: rgba(30, 41, 59, 0.8);
      border-color: rgba(255, 255, 255, 0.1);
      color: #f1f5f9;
    }
  }
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.85rem;
  font-size: 0.95rem;
  color: #64748b;

  .value {
    font-weight: 600;
    color: #0f172a;
  }

  .discount-text {
    color: #10b981;
    font-weight: 700;
  }

  html[data-theme='dark'] & {
    color: #94a3b8;
    .value {
      color: #f1f5f9;
    }
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: rgba(226, 232, 240, 0.8);
  margin: 1.25rem 0;

  html[data-theme='dark'] & {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.35rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1.5rem;

  .total-amount {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  html[data-theme='dark'] & {
    color: #f1f5f9;
    .total-amount {
      background: linear-gradient(135deg, #60a5fa, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 1.1rem;
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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

export const EmptyCart = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 32px;
  max-width: 600px;
  margin: 3rem auto;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.05);

  .icon-wrapper {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: rgba(59, 130, 246, 0.1);
    color: #2563eb;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
    margin-bottom: 2rem;
  }

  .shop-btn {
    padding: 12px 32px;
    background: linear-gradient(135deg, #2563eb, #4f46e5);
    color: white;
    border: none;
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
    transition: all 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(37, 99, 235, 0.5);
    }
  }

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.85);
    border-color: rgba(255, 255, 255, 0.08);

    h2 {
      color: #f1f5f9;
    }
    p {
      color: #94a3b8;
    }
  }
`;
