import styled, { keyframes } from "styled-components";

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

export const FullWidthWrapper = styled.div`
  min-height: 100vh;
  padding: 3rem 1.5rem 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

export const SuccessCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 36px;
  padding: 3.5rem 3rem;
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

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.9);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 30px 80px -15px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 640px) {
    padding: 2.5rem 1.5rem;
  }
`;

export const SuccessIcon = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.75rem;
  box-shadow: 
    0 10px 30px rgba(16, 185, 129, 0.45),
    0 0 0 10px rgba(16, 185, 129, 0.15);
  animation: ${popIn} 0.8s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const OrderTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: 900;
  color: #0f172a;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
  line-height: 1.2;

  html[data-theme='dark'] & {
    color: #f1f5f9;
  }

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

export const OrderMessage = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  max-width: 580px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;

  html[data-theme='dark'] & {
    color: #94a3b8;
  }
`;

export const OrderNumber = styled.div`
  background: rgba(241, 245, 249, 0.8);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 16px;
  padding: 12px 24px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 2.5rem;

  .order-label {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #64748b;
    letter-spacing: 0.5px;
  }

  .order-value {
    font-size: 1.05rem;
    font-weight: 800;
    color: #2563eb;
    font-family: monospace;
  }

  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(255, 255, 255, 0.08);

    .order-label {
      color: #94a3b8;
    }
    .order-value {
      color: #60a5fa;
    }
  }
`;

/* Order Timeline Tracker */
export const TimelineTracker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
  padding: 0 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 40px;
    right: 40px;
    height: 3px;
    background: rgba(226, 232, 240, 0.9);
    z-index: 0;

    html[data-theme='dark'] & {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  .step {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .circle {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: white;
      border: 3px solid #cbd5e1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #64748b;
      font-size: 0.85rem;
      font-weight: 700;
      transition: all 0.3s ease;

      html[data-theme='dark'] & {
        background: #1e293b;
        border-color: #475569;
        color: #94a3b8;
      }
    }

    &.completed .circle {
      background: #10b981;
      border-color: #10b981;
      color: white;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
    }

    &.active .circle {
      background: #2563eb;
      border-color: #2563eb;
      color: white;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
    }

    .label {
      font-size: 0.8rem;
      font-weight: 700;
      color: #475569;

      html[data-theme='dark'] & {
        color: #94a3b8;
      }
    }
  }

  @media (max-width: 600px) {
    .label {
      font-size: 0.7rem;
    }
  }
`;

export const OrderDetails = styled.div`
  background: rgba(248, 250, 252, 0.85);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 24px;
  padding: 1.75rem 2rem;
  margin-bottom: 2.5rem;
  text-align: left;

  h3 {
    font-size: 1.15rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid rgba(226, 232, 240, 0.7);
    font-size: 0.92rem;

    &:last-child {
      border-bottom: none;
    }

    .label {
      color: #64748b;
      font-weight: 500;
    }

    .value {
      color: #0f172a;
      font-weight: 700;
    }
  }

  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.7);
    border-color: rgba(255, 255, 255, 0.08);

    h3 {
      color: #f1f5f9;
    }

    .detail-row {
      border-color: rgba(255, 255, 255, 0.06);

      .label {
        color: #94a3b8;
      }
      .value {
        color: #f1f5f9;
      }
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
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
  }
`;

export const SecondaryButton = styled.button`
  padding: 1rem 2rem;
  background: white;
  color: #334155;
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 16px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
    transform: translateY(-2px);
  }

  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
    color: #cbd5e1;

    &:hover {
      background: rgba(51, 65, 85, 0.9);
      color: #f1f5f9;
    }
  }
`;
