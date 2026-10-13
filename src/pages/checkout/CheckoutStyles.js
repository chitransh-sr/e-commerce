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
  padding: ${spacing['4xl']} ${spacing.xl} ${spacing['6xl']};
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

export const CheckoutSteps = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  margin-bottom: ${spacing['3xl']};
`;

export const CheckoutStep = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ $active }) =>
    $active ? colors.gradients.primary : 'rgba(148, 153, 175, 0.3)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.85rem;
  font-weight: 700;
  transition: ${transitions.emphasis};
  box-shadow: ${({ $active }) =>
    $active ? '0 4px 14px rgba(37, 99, 235, 0.3)' : 'none'};
`;

export const CheckoutHeader = styled.div`
  margin-bottom: ${spacing.xl};
  display: flex;
  align-items: center;
  gap: ${spacing.lg};
  flex-wrap: wrap;
`;

export const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: ${spacing['3xl']};
  align-items: flex-start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const CheckoutFormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing['3xl']};
`;

export const SectionCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius['2xl']};
  padding: ${spacing['3xl']};
  box-shadow: ${shadows.sm};

  h2 {
    font-size: 1.35rem;
    font-weight: 800;
    color: ${colors.text.primary};
    margin-bottom: ${spacing.xl};
    display: flex;
    align-items: center;
    gap: ${spacing.sm};
    letter-spacing: -0.02em;
  }

  [data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.85);
    border-color: ${colors.border.dark};

    h2 {
      color: ${colors.text.primaryDark};
    }
  }

  @media (max-width: 600px) {
    padding: ${spacing.xl};
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.xl};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
  margin-bottom: ${spacing.xl};

  label {
    font-size: 0.88rem;
    font-weight: 700;
    color: ${colors.text.secondary};

    [data-theme='dark'] & {
      color: ${colors.text.secondaryDark};
    }
  }

  input, select {
    padding: ${spacing.md} ${spacing.lg};
    border: 1.5px solid ${colors.border.light};
    border-radius: ${borderRadius.lg};
    font-size: 0.95rem;
    background: white;
    color: ${colors.text.primary};
    transition: ${transitions.standard};

    &::placeholder {
      color: ${colors.text.disabled};
    }

    &:focus {
      outline: none;
      border-color: ${colors.primary[400]};
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    }

    [data-theme='dark'] & {
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

export const ErrorText = styled.span`
  color: ${colors.danger[500]};
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
`;

/* Futuristic Virtual Credit Card */
export const VirtualCard = styled.div`
  width: 100%;
  max-width: 400px;
  height: 240px;
  margin: 0 auto ${spacing['3xl']};
  border-radius: ${borderRadius['2xl']};
  padding: ${spacing['2xl']};
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #312e81 100%);
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: ${shadows['2xl']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
    pointer-events: none;
    animation: var(--shine) 6s linear infinite;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .chip {
      width: 44px;
      height: 32px;
      border-radius: 6px;
      background: linear-gradient(135deg, #fbbf24, #d97706);
      box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
    }

    .brand {
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: 1px;
      font-style: italic;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }
  }

  .card-number {
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: 2px;
    font-family: 'Courier New', monospace;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  .card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .label {
      font-size: 0.65rem;
      text-transform: uppercase;
      opacity: 0.7;
      letter-spacing: 0.5px;
    }

    .val {
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
  }

  @media (max-width: 600px) {
    max-width: 100%;
    height: 200px;
    padding: ${spacing.xl};
  }
`;

export const PaymentMethodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.md};
  margin-bottom: ${spacing['3xl']};
`;

export const PaymentOption = styled.div`
  padding: ${spacing.xl};
  border: 2px solid ${({ $isSelected }) => ($isSelected ? colors.primary[600] : 'rgba(226, 232, 240, 0.9)')};
  border-radius: ${borderRadius.xl};
  background: ${({ $isSelected }) => ($isSelected ? 'rgba(37, 99, 235, 0.05)' : 'white')};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  font-weight: 700;
  font-size: 0.95rem;
  color: ${colors.text.primary};
  transition: ${transitions.emphasis};
  box-shadow: ${shadows.xs};

  &:hover {
    border-color: ${colors.primary[400]};
  }

  [data-theme='dark'] & {
    background: ${({ $isSelected }) => ($isSelected ? 'rgba(96, 165, 250, 0.1)' : 'rgba(30, 41, 59, 0.8)')};
    border-color: ${({ $isSelected }) => ($isSelected ? colors.primary[400] : 'rgba(255, 255, 255, 0.1)')};
    color: ${colors.text.primaryDark};
  }
`;

/* Summary Sidebar */
export const OrderSummarySidebar = styled.div`
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
  }

  .items-list {
    display: flex;
    flex-direction: column;
    gap: ${spacing.md};
    max-height: 280px;
    overflow-y: auto;
    margin-bottom: ${spacing.xl};
    padding-right: ${spacing.xs};
  }

  .order-item {
    display: flex;
    align-items: center;
    gap: ${spacing.md};

    img {
      width: 48px;
      height: 48px;
      border-radius: ${borderRadius.md};
      object-fit: cover;
      background: ${colors.gray[100]};
    }

    .info {
      flex: 1;
      min-width: 0;

      .title {
        font-size: 0.85rem;
        font-weight: 600;
        color: ${colors.text.primary};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .qty {
        font-size: 0.75rem;
        color: ${colors.text.secondary};
      }
    }

    .price {
      font-size: 0.9rem;
      font-weight: 700;
      color: ${colors.primary[600]};
    }
  }

  [data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.85);
    border-color: ${colors.border.dark};

    h3 {
      color: ${colors.text.primaryDark};
    }

    .order-item {
      .info {
        .title {
          color: ${colors.text.primaryDark};
        }
        .qty {
          color: ${colors.text.secondaryDark};
        }
      }
      .price {
        color: ${colors.primary[300]};
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
  font-size: 1.4rem;
  font-weight: 900;
  color: ${colors.text.primary};
  margin-bottom: ${spacing.xl};

  .amount {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  [data-theme='dark'] & {
    color: ${colors.text.primaryDark};
    .amount {
      background: linear-gradient(135deg, #60a5fa, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  padding: ${spacing.lg};
  background: ${colors.gradients.success};
  color: white;
  border: none;
  border-radius: ${borderRadius.xl};
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  transition: ${transitions.emphasis};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(16, 185, 129, 0.5);
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;