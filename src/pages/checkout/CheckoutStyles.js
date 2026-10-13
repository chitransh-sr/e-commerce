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
  padding: ${spacing['4xl']} ${spacing.xl} ${spacing['6xl']};
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
    $active ? '#7A1E2B' : '#FFFFFF'};
  border: 1px solid ${({ $active }) => ($active ? '#7A1E2B' : '#E8D9C4')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $active }) => ($active ? '#F5E9D7' : '#9C7A6A')};
  font-size: 0.85rem;
  font-weight: 700;
  transition: all 0.2s ease;
`;

export const CheckoutHeader = styled.div`
  margin-bottom: ${spacing.xl};
  display: flex;
  align-items: center;
  gap: ${spacing.lg};
  flex-wrap: wrap;

  h1, h2 {
    font-family: "Instrument Serif", serif;
    color: #7A1E2B;
  }

  [data-theme='dark'] & {
    h1, h2 {
      font-family: "Instrument Serif", serif;
      color: #E8CFC0;
    }
  }
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
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  padding: ${spacing['3xl']};
  box-shadow: 0 2px 8px rgba(122, 30, 43, 0.08);

  h2 {
    font-family: "Instrument Serif", serif;
    font-size: 1.35rem;
    font-weight: 400;
    color: #7A1E2B;
    margin-bottom: ${spacing.xl};
    display: flex;
    align-items: center;
    gap: ${spacing.sm};
    letter-spacing: -0.02em;
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;

    h2 {
      font-family: "Instrument Serif", serif;
      color: #E8CFC0;
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
    color: #5C4A3A;

    [data-theme='dark'] & {
      color: #E8CFC0;
    }
  }

  input, select {
    padding: ${spacing.md} ${spacing.lg};
    border: 1px solid #E8D9C4;
    border-radius: 8px;
    font-size: 0.95rem;
    font-family: "Instrument Sans", sans-serif;
    background: #FFFFFF;
    color: #1F1F1F;
    transition: all 0.2s ease;

    &::placeholder {
      color: #9C7A6A;
    }

    &:focus {
      outline: none;
      border-color: #7A1E2B;
      box-shadow: 0 0 0 3px rgba(122, 30, 43, 0.12);
    }

    [data-theme='dark'] & {
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

export const ErrorText = styled.span`
  color: #A4262C;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
`;

/* Bannoji Card Preview (solid) */
export const VirtualCard = styled.div`
  width: 100%;
  max-width: 400px;
  height: 240px;
  margin: 0 auto ${spacing['3xl']};
  border-radius: 1rem;
  padding: ${spacing['2xl']};
  background: #7A1E2B;
  border: 1px solid #C9A24C;
  color: #F5E9D7;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(122, 30, 43, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .chip {
      width: 44px;
      height: 32px;
      border-radius: 6px;
      background: #C9A24C;
    }

    .brand {
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: 1px;
      font-style: italic;
      color: #F5E9D7;
    }
  }

  .card-number {
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: 2px;
    font-family: 'Courier New', monospace;
    color: #F5E9D7;
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
      color: #E8D9C4;
    }

    .val {
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      color: #F5E9D7;
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
  border: 1px solid ${({ $isSelected }) => ($isSelected ? '#7A1E2B' : '#E8D9C4')};
  border-radius: 8px;
  background: ${({ $isSelected }) => ($isSelected ? 'rgba(122, 30, 43, 0.06)' : '#FFFFFF')};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  font-weight: 700;
  font-size: 0.95rem;
  color: #1F1F1F;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(122, 30, 43, 0.06);

  &:hover {
    border-color: #C9A24C;
  }

  [data-theme='dark'] & {
    background: ${({ $isSelected }) => ($isSelected ? 'rgba(201, 162, 76, 0.12)' : '#1A0F11')};
    border-color: ${({ $isSelected }) => ($isSelected ? '#C9A24C' : '#4A2E33')};
    color: #F5E9D7;
  }
`;

/* Summary Sidebar */
export const OrderSummarySidebar = styled.div`
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
      border-radius: 8px;
      object-fit: cover;
      background: #F5E9D7;
      border: 1px solid #E8D9C4;
    }

    .info {
      flex: 1;
      min-width: 0;

      .title {
        font-size: 0.85rem;
        font-weight: 600;
        color: #1F1F1F;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .qty {
        font-size: 0.75rem;
        color: #5C4A3A;
      }
    }

    .price {
      font-size: 0.9rem;
      font-weight: 700;
      color: #7A1E2B;
    }
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;

    h3 {
      font-family: "Instrument Serif", serif;
      color: #E8CFC0;
    }

    .order-item {
      .info {
        .title {
          color: #F5E9D7;
        }
        .qty {
          color: #E8CFC0;
        }
      }
      .price {
        color: #C9A24C;
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
  font-size: 1.4rem;
  font-weight: 900;
  color: #1F1F1F;
  margin-bottom: ${spacing.xl};

  .amount {
    color: #7A1E2B;
  }

  [data-theme='dark'] & {
    color: #F5E9D7;
    .amount {
      color: #C9A24C;
    }
  }
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  padding: ${spacing.lg};
  background: #7A1E2B;
  color: #F5E9D7;
  border: none;
  border-radius: 100px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #C9A24C;
    color: #1F1F1F;
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
