import styled, { keyframes } from "styled-components";
import { spacing } from '../../design-system/tokens';

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
  min-height: calc(100vh - 80px);
  padding: ${spacing['5xl']} ${spacing.xl} ${spacing['6xl']};
  background: #F5E9D7;
  font-family: "Instrument Sans", sans-serif;
  animation: ${fadeIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 768px) {
    padding: ${spacing['3xl']} ${spacing.sm} ${spacing['4xl']};
  }

  [data-theme='dark'] & {
    background: #1A0F11;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  padding: ${spacing.sm} ${spacing.xl};
  border-radius: 100px;
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  color: #7A1E2B;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: ${spacing.xl};

  &:hover {
    background: #F5E9D7;
    color: #7A1E2B;
    border-color: #C9A24C;
    transform: translateX(-3px);
  }

  @media (max-width: 768px) {
    margin-bottom: ${spacing.md};
    padding: ${spacing.sm} ${spacing.lg};
    font-size: 0.9rem;
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;
    color: #E8CFC0;

    &:hover {
      background: #3A1E23;
      color: #C9A24C;
      border-color: #C9A24C;
    }
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  margin-bottom: ${spacing['3xl']};
  flex-wrap: wrap;

  h1 {
    font-family: "Instrument Serif", serif;
    font-size: 2.25rem;
    font-weight: 400;
    color: #7A1E2B;
    letter-spacing: -0.03em;
  }

  .item-count {
    padding: 4px 14px;
    background: rgba(122, 30, 43, 0.08);
    color: #7A1E2B;
    border: 1px solid #E8D9C4;
    border-radius: 9999px;
    font-size: 0.9rem;
    font-weight: 700;
  }

  .clear-btn {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    background: transparent;
    border: 1px solid #E8D9C4;
    color: #A4262C;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(122, 30, 43, 0.06);
      color: #7A1E2B;
      border-color: #7A1E2B;
    }

    [data-theme='dark'] & {
      border-color: #4A2E33;
      color: #E8CFC0;

      &:hover {
        background: rgba(201, 162, 76, 0.12);
        color: #C9A24C;
      }
    }
  }

  [data-theme='dark'] & {
    h1 {
      font-family: "Instrument Serif", serif;
      color: #E8CFC0;
    }
    .item-count {
      background: rgba(201, 162, 76, 0.15);
      color: #C9A24C;
      border-color: #4A2E33;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.875rem;
    }
  }
`;

/* Shipping Progress Bar */
export const ShippingProgressBarCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  padding: ${spacing.xl};
  margin-bottom: ${spacing['3xl']};
  box-shadow: 0 2px 8px rgba(122, 30, 43, 0.08);

  .message {
    display: flex;
    align-items: center;
    gap: ${spacing.sm};
    font-size: 0.95rem;
    font-weight: 600;
    color: #5C4A3A;
    margin-bottom: ${spacing.md};

    strong {
      color: #7A1E2B;
    }
  }

  .bar-bg {
    width: 100%;
    height: 8px;
    background: #F5E9D7;
    border: 1px solid #E8D9C4;
    border-radius: 9999px;
    overflow: hidden;

    .bar-fill {
      height: 100%;
      border-radius: 9999px;
      background: #7A1E2B;
      transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;

    .message {
      color: #E8CFC0;
      strong {
        color: #C9A24C;
      }
    }

    .bar-bg {
      background: #1A0F11;
      border-color: #4A2E33;
    }
  }
`;

export const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: ${spacing['3xl']};
  align-items: flex-start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: ${spacing['3xl']};
  }
`;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

export const CartItemCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  padding: ${spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing.xl};
  box-shadow: 0 2px 8px rgba(122, 30, 43, 0.08);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(122, 30, 43, 0.12);
    border-color: #C9A24C;
  }

  .item-left {
    display: flex;
    align-items: center;
    gap: ${spacing.xl};
    min-width: 0;
    flex: 1;

    img {
      width: 72px;
      height: 72px;
      border-radius: 8px;
      object-fit: cover;
      background: #F5E9D7;
      border: 1px solid #E8D9C4;
      flex-shrink: 0;
    }

    .details {
      min-width: 0;

      h3 {
        font-family: "Instrument Serif", serif;
        font-size: 1.1rem;
        font-weight: 400;
        color: #7A1E2B;
        margin-bottom: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .price {
        font-size: 1.15rem;
        font-weight: 800;
        color: #7A1E2B;
      }
    }
  }

  .item-right {
    display: flex;
    align-items: center;
    gap: ${spacing.xl};
    flex-shrink: 0;
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;

    .item-left {
      img {
        background: #1A0F11;
        border-color: #4A2E33;
      }

      .details h3 {
        font-family: "Instrument Serif", serif;
        color: #E8CFC0;
      }

      .details .price {
        color: #C9A24C;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    .item-right {
      width: 100%;
      justify-content: space-between;
      border-top: 1px solid #E8D9C4;
      padding-top: ${spacing.md};

      [data-theme='dark'] & {
        border-color: #4A2E33;
      }
    }
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 100px;
  overflow: hidden;

  button {
    width: 38px;
    height: 38px;
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

  span {
    min-width: 40px;
    text-align: center;
    font-size: 0.95rem;
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

    span {
      color: #F5E9D7;
    }
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #9C7A6A;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: #A4262C;
    background: rgba(122, 30, 43, 0.06);
  }
`;

/* Summary Card */
export const OrderSummaryCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  padding: ${spacing['3xl']};
  box-shadow: 0 2px 8px rgba(122, 30, 43, 0.08);
  position: sticky;
  top: 120px;

  h3 {
    font-family: "Instrument Serif", serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: #7A1E2B;
    margin-bottom: ${spacing.xl};
    letter-spacing: -0.02em;
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;

    h3 {
      font-family: "Instrument Serif", serif;
      color: #E8CFC0;
    }
  }
`;

export const PromoCodeBox = styled.div`
  display: flex;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.xl};

  input {
    flex: 1;
    padding: ${spacing.sm} ${spacing.md};
    border: 1px solid #E8D9C4;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    background: #FFFFFF;
    color: #1F1F1F;
    transition: all 0.2s ease;

    &::placeholder {
      text-transform: none;
      font-weight: 400;
      color: #9C7A6A;
    }

    &:focus {
      outline: none;
      border-color: #7A1E2B;
      box-shadow: 0 0 0 3px rgba(122, 30, 43, 0.12);
    }
  }

  button {
    padding: ${spacing.sm} ${spacing.lg};
    background: #7A1E2B;
    color: #F5E9D7;
    border: none;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      background: #C9A24C;
      color: #1F1F1F;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  [data-theme='dark'] & {
    input {
      background: #1A0F11;
      border-color: #4A2E33;
      color: #F5E9D7;

      &:focus {
        border-color: #C9A24C;
        box-shadow: 0 0 0 3px rgba(201, 162, 76, 0.2);
      }
    }
  }
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.md};
  font-size: 0.95rem;
  color: #5C4A3A;

  .value {
    font-weight: 600;
    color: #1F1F1F;
  }

  .discount-text {
    color: #7A1E2B;
    font-weight: 700;
  }

  [data-theme='dark'] & {
    color: #E8CFC0;
    .value {
      color: #F5E9D7;
    }
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: #E8D9C4;
  margin: ${spacing.xl} 0;

  [data-theme='dark'] & {
    background: #4A2E33;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.35rem;
  font-weight: 900;
  color: #1F1F1F;
  margin-bottom: ${spacing.xl};

  .total-amount {
    color: #7A1E2B;
  }

  [data-theme='dark'] & {
    color: #F5E9D7;
    .total-amount {
      color: #C9A24C;
    }
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: ${spacing.lg};
  background: #7A1E2B;
  color: #F5E9D7;
  border: none;
  border-radius: 100px;
  font-size: 1.05rem;
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

export const EmptyCart = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  max-width: 600px;
  margin: 3rem auto;
  box-shadow: 0 2px 8px rgba(122, 30, 43, 0.08);

  .icon-wrapper {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: rgba(122, 30, 43, 0.08);
    border: 1px solid #E8D9C4;
    color: #7A1E2B;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }

  h2 {
    font-family: "Instrument Serif", serif;
    font-size: 2rem;
    font-weight: 400;
    color: #7A1E2B;
    margin-bottom: 0.5rem;
  }

  p {
    color: #5C4A3A;
    margin-bottom: 2rem;
  }

  .shop-btn {
    padding: 12px 32px;
    background: #7A1E2B;
    color: #F5E9D7;
    border: none;
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #C9A24C;
      color: #1F1F1F;
      transform: translateY(-2px);
    }
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;

    h2 {
      font-family: "Instrument Serif", serif;
      color: #E8CFC0;
    }
    p {
      color: #E8CFC0;
    }
    .icon-wrapper {
      background: rgba(201, 162, 76, 0.12);
      border-color: #4A2E33;
      color: #C9A24C;
    }
    .shop-btn {
      background: #7A1E2B;
      color: #F5E9D7;

      &:hover {
        background: #C9A24C;
        color: #1F1F1F;
      }
    }
  }
`;
