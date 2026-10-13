import styled, { keyframes } from "styled-components";
import { spacing } from '../../design-system/tokens';

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  60% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

export const FullWidthWrapper = styled.div`
  min-height: calc(100vh - 80px);
  padding: ${spacing['6xl']} ${spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5E9D7;
  font-family: "Instrument Sans", sans-serif;

  [data-theme='dark'] & {
    background: #1A0F11;
  }
`;

export const Container = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
`;

export const SuccessCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  padding: ${spacing['5xl']} ${spacing['3xl']};
  box-shadow: 0 2px 8px rgba(122, 30, 43, 0.08);
  text-align: center;
  animation: ${popIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: #7A1E2B;
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 640px) {
    padding: ${spacing['3xl']} ${spacing.xl};
  }
`;

export const SuccessIcon = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #7A1E2B;
  border: 2px solid #C9A24C;
  color: #F5E9D7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${spacing['3xl']};
  box-shadow: 0 4px 16px rgba(122, 30, 43, 0.25);
  animation: ${popIn} 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 640px) {
    width: 80px;
    height: 80px;
    margin-bottom: ${spacing['2xl']};
  }
`;

export const OrderTitle = styled.h1`
  font-family: "Instrument Serif", serif;
  font-size: 2.75rem;
  font-weight: 400;
  color: #7A1E2B;
  letter-spacing: -0.03em;
  margin-bottom: ${spacing.lg};
  line-height: 1.15;

  [data-theme='dark'] & {
    font-family: "Instrument Serif", serif;
    color: #E8CFC0;
  }

  @media (max-width: 640px) {
    font-size: 2.1rem;
  }
`;

export const OrderMessage = styled.p`
  font-size: 1.1rem;
  color: #5C4A3A;
  max-width: 580px;
  margin: 0 auto ${spacing['3xl']};
  line-height: 1.7;

  [data-theme='dark'] & {
    color: #E8CFC0;
  }
`;

export const OrderNumber = styled.div`
  background: #F5E9D7;
  border: 1px solid #E8D9C4;
  border-radius: 8px;
  padding: ${spacing.sm} ${spacing['2xl']};
  display: inline-flex;
  align-items: center;
  gap: ${spacing.md};
  margin-bottom: ${spacing['3xl']};
  animation: ${pulse} 3s ease-in-out infinite;

  .order-label {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #5C4A3A;
    letter-spacing: 0.5px;
  }

  .order-value {
    font-size: 1.1rem;
    font-weight: 800;
    color: #7A1E2B;
    font-family: 'Courier New', monospace;
  }

  [data-theme='dark'] & {
    background: #1A0F11;
    border-color: #4A2E33;

    .order-label {
      color: #E8CFC0;
    }
    .order-value {
      color: #C9A24C;
    }
  }
`;

export const OrderSummaryMini = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.md};
  margin-bottom: ${spacing['3xl']};

  .summary-item {
    text-align: center;
    padding: ${spacing.md};
    background: #FFFFFF;
    border: 1px solid #E8D9C4;
    border-radius: 8px;

    .label {
      font-size: 0.75rem;
      font-weight: 600;
      color: #5C4A3A;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }

    .value {
      font-size: 1rem;
      font-weight: 700;
      color: #1F1F1F;
    }

    .total {
      color: #7A1E2B;
      font-size: 1.15rem;
    }
  }

  [data-theme='dark'] & {
    .summary-item {
      background: #1A0F11;
      border-color: #4A2E33;

      .label {
        color: #E8CFC0;
      }
      .value {
        color: #F5E9D7;
      }
      .total {
        color: #C9A24C;
      }
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// Order Timeline Tracker
export const TimelineTracker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing['4xl']};
  position: relative;
  padding: 0 ${spacing.sm};

  &::before {
    content: '';
    position: absolute;
    top: 22px;
    left: 40px;
    right: 40px;
    height: 3px;
    background: #E8D9C4;
    z-index: 0;

    [data-theme='dark'] & {
      background: #4A2E33;
    }
  }

  .step {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacing.xs};

    .circle {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #FFFFFF;
      border: 2px solid #E8D9C4;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #9C7A6A;
      font-size: 0.85rem;
      font-weight: 700;
      transition: all 0.3s ease;

      [data-theme='dark'] & {
        background: #1A0F11;
        border-color: #4A2E33;
        color: #E8CFC0;
      }
    }

    &.completed .circle {
      background: #7A1E2B;
      border-color: #7A1E2B;
      color: #F5E9D7;
    }

    &.active .circle {
      background: #7A1E2B;
      border-color: #C9A24C;
      color: #F5E9D7;
      animation: ${pulse} 2s ease-in-out infinite;
    }

    .label {
      font-size: 0.85rem;
      font-weight: 700;
      color: #5C4A3A;

      [data-theme='dark'] & {
        color: #E8CFC0;
      }
    }
  }

  @media (max-width: 640px) {
    .step {
      .circle {
        width: 38px;
        height: 38px;
      }

      .label {
        font-size: 0.75rem;
      }
    }
  }
`;

export const OrderDetails = styled.div`
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  padding: ${spacing['2xl']} ${spacing['2xl']};
  margin-bottom: ${spacing['4xl']};
  text-align: left;

  h3 {
    font-family: "Instrument Serif", serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: #7A1E2B;
    margin-bottom: ${spacing.xl};
    display: flex;
    align-items: center;
    gap: ${spacing.sm};
  }

  .detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${spacing.sm} 0;
    border-bottom: 1px solid #E8D9C4;
    font-size: 0.95rem;

    &:last-child {
      border-bottom: none;
    }

    &.highlight {
      background: rgba(122, 30, 43, 0.05);
      margin: ${spacing.sm} 0;
      border-radius: 8px;
      padding: ${spacing.sm} ${spacing.md};
    }

    .label {
      color: #5C4A3A;
      font-weight: 500;
    }

    .value {
      color: #1F1F1F;
      font-weight: 700;
    }

    .order-num {
      font-family: 'Courier New', monospace;
      font-size: 1rem;
    }

    .amount {
      color: #7A1E2B;
      font-size: 1.15rem;
    }
  }

  [data-theme='dark'] & {
    background: #1A0F11;
    border-color: #4A2E33;

    h3 {
      font-family: "Instrument Serif", serif;
      color: #E8CFC0;
    }

    .detail-row {
      border-color: #4A2E33;

      .label {
        color: #E8CFC0;
      }
      .value {
        color: #F5E9D7;
      }
      .amount {
        color: #C9A24C;
      }
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: ${spacing.xl};
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  padding: ${spacing.lg} ${spacing['3xl']};
  background: #7A1E2B;
  color: #F5E9D7;
  border: none;
  border-radius: 100px;
  font-size: 1rem;
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

export const SecondaryButton = styled.button`
  padding: ${spacing.lg} ${spacing['3xl']};
  background: #FFFFFF;
  color: #7A1E2B;
  border: 1px solid #E8D9C4;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  transition: all 0.2s ease;

  &:hover {
    background: #F5E9D7;
    border-color: #C9A24C;
    transform: translateY(-2px);
  }

  [data-theme='dark'] & {
    background: #1A0F11;
    border-color: #4A2E33;
    color: #E8CFC0;

    &:hover {
      background: #2A161A;
      border-color: #C9A24C;
      color: #C9A24C;
    }
  }
`;
