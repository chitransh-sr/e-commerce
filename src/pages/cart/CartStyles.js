import styled, { keyframes } from "styled-components";
import { colors, spacing, borderRadius, shadows, transitions } from '../../design-system/tokens';

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
  animation: ${fadeIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 768px) {
    padding: ${spacing['3xl']} ${spacing.sm} ${spacing['4xl']};
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
  border-radius: ${borderRadius.lg};
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid ${colors.border.light};
  color: ${colors.text.secondary};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${transitions.emphasis};
  margin-bottom: ${spacing.xl};

  &:hover {
    background: ${colors.primary[50]};
    color: ${colors.primary[600]};
    transform: translateX(-3px);
  }

  @media (max-width: 768px) {
    margin-bottom: ${spacing.md};
    padding: ${spacing.sm} ${spacing.lg};
    font-size: 0.9rem;
  }

  [data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: ${colors.border.dark};
    color: ${colors.text.secondaryDark};

    &:hover {
      background: rgba(51, 65, 85, 0.9);
      color: ${colors.primary[300]};
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
    font-size: 2.25rem;
    font-weight: 800;
    color: ${colors.text.primary};
    letter-spacing: -0.03em;
  }

  .item-count {
    padding: 4px 14px;
    background: rgba(37, 99, 235, 0.1);
    color: ${colors.primary[600]};
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
    border: 1px solid ${colors.danger[200]};
    color: ${colors.danger[500]};
    border-radius: ${borderRadius.md};
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: ${transitions.fast};

    &:hover {
      background: ${colors.danger[50]};
      color: ${colors.danger[600]};
    }

    [data-theme='dark'] & {
      border-color: ${colors.danger[800]};
      color: ${colors.danger[400]};

      &:hover {
        background: rgba(239, 68, 68, 0.1);
        color: ${colors.danger[300]};
      }
    }
  }

  [data-theme='dark'] & {
    h1 {
      color: ${colors.text.primaryDark};
    }
    .item-count {
      background: rgba(96, 165, 250, 0.15);
      color: ${colors.primary[300]};
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
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius['2xl']};
  padding: ${spacing.xl};
  margin-bottom: ${spacing['3xl']};
  box-shadow: ${shadows.sm};

  .message {
    display: flex;
    align-items: center;
    gap: ${spacing.sm};
    font-size: 0.95rem;
    font-weight: 600;
    color: ${colors.text.secondary};
    margin-bottom: ${spacing.md};

    strong {
      color: ${colors.primary[600]};
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
      background: ${colors.gradients.primary};
      transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  [data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.8);
    border-color: ${colors.border.dark};

    .message {
      color: ${colors.text.secondaryDark};
      strong {
        color: ${colors.primary[300]};
      }
    }

    .bar-bg {
      background: rgba(255, 255, 255, 0.08);
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
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(18px);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius['2xl']};
  padding: ${spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing.xl};
  box-shadow: ${shadows.xs};
  transition: ${transitions.emphasis};

  &:hover {
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.12);
    border-color: rgba(59, 130, 246, 0.3);
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
      border-radius: ${borderRadius.md};
      object-fit: cover;
      background: ${colors.gray[100]};
      flex-shrink: 0;
    }

    .details {
      min-width: 0;

      h3 {
        font-size: 1.1rem;
        font-weight: 700;
        color: ${colors.text.primary};
        margin-bottom: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .price {
        font-size: 1.15rem;
        font-weight: 800;
        color: ${colors.primary[600]};
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
    background: rgba(15, 23, 42, 0.8);
    border-color: ${colors.border.dark};

    .item-left {
      img {
        background: #1e293b;
      }

      .details h3 {
        color: ${colors.text.primaryDark};
      }

      .details .price {
        color: ${colors.primary[300]};
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
      border-top: 1px solid ${colors.border.light};
      padding-top: ${spacing.md};

      [data-theme='dark'] & {
        border-color: ${colors.border.dark};
      }
    }
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  background: rgba(241, 245, 249, 0.9);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius.md};
  overflow: hidden;

  button {
    width: 38px;
    height: 38px;
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

  span {
    min-width: 40px;
    text-align: center;
    font-size: 0.95rem;
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

    span {
      color: ${colors.text.primaryDark};
    }
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.text.disabled};
  padding: 8px;
  border-radius: ${borderRadius.md};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${transitions.fast};

  &:hover {
    color: ${colors.danger[500]};
    background: rgba(239, 68, 68, 0.08);
  }
`;

/* Summary Card */
export const OrderSummaryCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius['2xl']};
  padding: ${spacing['3xl']};
  box-shadow: ${shadows.lg};
  position: sticky;
  top: 120px;

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${colors.text.primary};
    margin-bottom: ${spacing.xl};
    letter-spacing: -0.02em;
  }

  [data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.85);
    border-color: ${colors.border.dark};

    h3 {
      color: ${colors.text.primaryDark};
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
    border: 1.5px solid ${colors.border.light};
    border-radius: ${borderRadius.lg};
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    background: white;
    color: ${colors.text.primary};
    transition: ${transitions.standard};

    &::placeholder {
      text-transform: none;
      font-weight: 400;
      color: ${colors.text.disabled};
    }

    &:focus {
      outline: none;
      border-color: ${colors.primary[400]};
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    }
  }

  button {
    padding: ${spacing.sm} ${spacing.lg};
    background: ${colors.gradients.primary};
    color: white;
    border: none;
    border-radius: ${borderRadius.md};
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    transition: ${transitions.fast};
    box-shadow: ${colors.effects?.glow?.primary || '0 4px 14px rgba(37, 99, 235, 0.3)'};

    &:hover:not(:disabled) {
      opacity: 0.92;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  [data-theme='dark'] & {
    input {
      background: rgba(30, 41, 59, 0.8);
      border-color: ${colors.border.dark};
      color: ${colors.text.primaryDark};

      &:focus {
        border-color: ${colors.primary[400]};
        box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.18);
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
  color: ${colors.text.secondary};

  .value {
    font-weight: 600;
    color: ${colors.text.primary};
  }

  .discount-text {
    color: ${colors.success[600]};
    font-weight: 700;
  }

  [data-theme='dark'] & {
    color: ${colors.text.secondaryDark};
    .value {
      color: ${colors.text.primaryDark};
    }
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: ${colors.border.light};
  margin: ${spacing.xl} 0;

  [data-theme='dark'] & {
    background: ${colors.border.dark};
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.35rem;
  font-weight: 900;
  color: ${colors.text.primary};
  margin-bottom: ${spacing.xl};

  .total-amount {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  [data-theme='dark'] & {
    color: ${colors.text.primaryDark};
    .total-amount {
      background: linear-gradient(135deg, #60a5fa, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: ${spacing.lg};
  background: ${colors.gradients.primary};
  color: white;
  border: none;
  border-radius: ${borderRadius.xl};
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
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
    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);

    &:hover {
      box-shadow: 0 12px 30px rgba(99, 102, 241, 0.5);
    }
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius['3xl']};
  max-width: 600px;
  margin: 3rem auto;
  box-shadow: ${shadows['2xl']};

  .icon-wrapper {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: rgba(37, 99, 235, 0.1);
    color: ${colors.primary[600]};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${colors.text.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colors.text.secondary};
    margin-bottom: 2rem;
  }

  .shop-btn {
    padding: 12px 32px;
    background: ${colors.gradients.primary};
    color: white;
    border: none;
    border-radius: ${borderRadius.xl};
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
    transition: ${transitions.emphasis};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(37, 99, 235, 0.5);
    }
  }

  [data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.85);
    border-color: ${colors.border.dark};

    h2 {
      color: ${colors.text.primaryDark};
    }
    p {
      color: ${colors.text.secondaryDark};
    }
    .shop-btn {
      background: ${colors.gradients.violet};
      box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);

      &:hover {
        box-shadow: 0 12px 30px rgba(99, 102, 241, 0.5);
      }
    }
  }
`;