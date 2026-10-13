import styled, { keyframes } from "styled-components";
import { colors, spacing, borderRadius, transitions } from '../../design-system/tokens';

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
`;

export const Container = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
`;

export const SuccessCard = styled.div`
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: ${borderRadius['3xl']};
  padding: ${spacing['5xl']} ${spacing['3xl']};
  box-shadow: 
    0 25px 70px -15px rgba(16, 185, 129, 0.25),
    0 0 0 1px rgba(16, 185, 129, 0.1);
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
    background: linear-gradient(90deg, #10b981, #06b6d4, #3b82f6);
  }

  &:hover {
    box-shadow: 
      0 30px 80px -15px rgba(16, 185, 129, 0.3),
      0 0 0 1px rgba(16, 185, 129, 0.15);
  }

  [data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.9);
    border-color: ${colors.border.dark};
    box-shadow: 0 30px 80px -15px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 640px) {
    padding: ${spacing['3xl']} ${spacing.xl};
  }
`;

export const SuccessIcon = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${spacing['3xl']};
  box-shadow: 
    0 10px 30px rgba(16, 185, 129, 0.45),
    0 0 0 12px rgba(16, 185, 129, 0.15);
  animation: ${popIn} 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 640px) {
    width: 80px;
    height: 80px;
    margin-bottom: ${spacing['2xl']};
  }
`;

export const OrderTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  color: ${colors.text.primary};
  letter-spacing: -0.03em;
  margin-bottom: ${spacing.lg};
  line-height: 1.15;

  [data-theme='dark'] & {
    color: ${colors.text.primaryDark};
  }

  @media (max-width: 640px) {
    font-size: 2.1rem;
  }
`;

export const OrderMessage = styled.p`
  font-size: 1.1rem;
  color: ${colors.text.secondary};
  max-width: 580px;
  margin: 0 auto ${spacing['3xl']};
  line-height: 1.7;

  [data-theme='dark'] & {
    color: ${colors.text.secondaryDark};
  }
`;

export const OrderNumber = styled.div`
  background: rgba(241, 245, 249, 0.8);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius.xl};
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
    color: ${colors.text.secondary};
    letter-spacing: 0.5px;
  }

  .order-value {
    font-size: 1.1rem;
    font-weight: 800;
    color: ${colors.primary[600]};
    font-family: 'Courier New', monospace;
  }

  [data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: ${colors.border.dark};

    .order-label {
      color: ${colors.text.secondaryDark};
    }
    .order-value {
      color: ${colors.primary[300]};
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
    background: rgba(248, 250, 252, 0.8);
    border: 1px solid ${colors.border.light};
    border-radius: ${borderRadius.lg};

    .label {
      font-size: 0.75rem;
      font-weight: 600;
      color: ${colors.text.secondary};
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }

    .value {
      font-size: 1rem;
      font-weight: 700;
      color: ${colors.text.primary};
    }

    .total {
      color: ${colors.primary[600]};
      font-size: 1.15rem;
    }
  }

  [data-theme='dark'] & {
    .summary-item {
      background: rgba(30, 41, 59, 0.8);
      border-color: ${colors.border.dark};

      .label {
        color: ${colors.text.secondaryDark};
      }
      .value {
        color: ${colors.text.primaryDark};
      }
      .total {
        color: ${colors.primary[300]};
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
    background: ${colors.gray[200]};
    z-index: 0;

    [data-theme='dark'] & {
      background: rgba(255, 255, 255, 0.1);
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
      background: white;
      border: 3px solid ${colors.gray[200]};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.text.disabled};
      font-size: 0.85rem;
      font-weight: 700;
      transition: all 0.3s ease;

      [data-theme='dark'] & {
        background: #1e293b;
        border-color: #475569;
        color: ${colors.text.secondaryDark};
      }
    }

    &.completed .circle {
      background: ${colors.success[500]};
      border-color: ${colors.success[500]};
      color: white;
      box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
    }

    &.active .circle {
      background: ${colors.primary[600]};
      border-color: ${colors.primary[600]};
      color: white;
      box-shadow: 0 0 12px rgba(37, 99, 235, 0.4);
      animation: ${pulse} 2s ease-in-out infinite;
    }

    .label {
      font-size: 0.85rem;
      font-weight: 700;
      color: ${colors.text.secondary};

      [data-theme='dark'] & {
        color: ${colors.text.secondaryDark};
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
  background: rgba(248, 250, 252, 0.8);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius['2xl']};
  padding: ${spacing['2xl']} ${spacing['2xl']};
  margin-bottom: ${spacing['4xl']};
  text-align: left;

  h3 {
    font-size: 1.25rem;
    font-weight: 800;
    color: ${colors.text.primary};
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
    border-bottom: 1px solid ${colors.border.light};
    font-size: 0.95rem;

    &:last-child {
      border-bottom: none;
    }

    &.highlight {
      background: rgba(37, 99, 235, 0.03);
      margin: ${spacing.sm} 0;
      border-radius: ${borderRadius.md};
      padding: ${spacing.sm} ${spacing.md};
    }

    .label {
      color: ${colors.text.secondary};
      font-weight: 500;
    }

    .value {
      color: ${colors.text.primary};
      font-weight: 700;
    }

    .order-num {
      font-family: 'Courier New', monospace;
      font-size: 1rem;
    }

    .amount {
      color: ${colors.primary[600]};
      font-size: 1.15rem;
    }
  }

  [data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.7);
    border-color: ${colors.border.dark};

    h3 {
      color: ${colors.text.primaryDark};
    }

    .detail-row {
      border-color: rgba(255, 255, 255, 0.06);

      .label {
        color: ${colors.text.secondaryDark};
      }
      .value {
        color: ${colors.text.primaryDark};
      }
      .amount {
        color: ${colors.primary[300]};
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
  background: ${colors.gradients.primary};
  color: white;
  border: none;
  border-radius: ${borderRadius.xl};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
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

export const SecondaryButton = styled.button`
  padding: ${spacing.lg} ${spacing['3xl']};
  background: transparent;
  color: ${colors.text.secondary};
  border: 1.5px solid ${colors.border.light};
  border-radius: ${borderRadius.xl};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  transition: ${transitions.emphasis};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  [data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: ${colors.border.dark};
    color: ${colors.text.primaryDark};

    &:hover {
      background: rgba(45, 55, 72, 0.9);
    }
  }
`;