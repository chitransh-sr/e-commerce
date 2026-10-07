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

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
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

export const CheckoutHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2.2rem;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.03em;
  }

  p {
    color: #64748b;
    font-size: 0.95rem;
    margin-top: 4px;
  }

  html[data-theme='dark'] & {
    h1 {
      color: #f1f5f9;
    }
    p {
      color: #94a3b8;
    }
  }
`;

export const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2.5rem;
  align-items: flex-start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const CheckoutFormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SectionCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);

  h2 {
    font-size: 1.35rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
    letter-spacing: -0.02em;
  }

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.85);
    border-color: rgba(255, 255, 255, 0.08);

    h2 {
      color: #f1f5f9;
    }
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 1.25rem;

  label {
    font-size: 0.88rem;
    font-weight: 700;
    color: #334155;

    html[data-theme='dark'] & {
      color: #cbd5e1;
    }
  }

  input, select {
    padding: 12px 16px;
    border: 1.5px solid rgba(226, 232, 240, 0.9);
    border-radius: 14px;
    font-size: 0.95rem;
    background: white;
    color: #0f172a;
    transition: all 0.25s ease;

    &::placeholder {
      color: #94a3b8;
    }

    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
    }

    html[data-theme='dark'] & {
      background: rgba(30, 41, 59, 0.8);
      border-color: rgba(255, 255, 255, 0.1);
      color: #f1f5f9;

      &:focus {
        border-color: #60a5fa;
      }
    }
  }
`;

export const ErrorText = styled.span`
  color: #ef4444;
  font-size: 0.8rem;
  font-weight: 600;
`;

/* Futuristic Virtual Credit Card */
export const VirtualCard = styled.div`
  width: 100%;
  max-width: 380px;
  height: 220px;
  margin: 0 auto 2rem;
  border-radius: 20px;
  padding: 1.75rem;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #312e81 100%);
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 20px 40px -10px rgba(49, 46, 129, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.15);
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
    }
  }

  .card-number {
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: 2px;
    font-family: monospace;
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
      text-transform: uppercase;
    }
  }
`;

export const PaymentMethodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.75rem;
`;

export const PaymentOption = styled.div`
  padding: 1rem 1.25rem;
  border-radius: 16px;
  border: 2px solid ${({ $isSelected }) => ($isSelected ? '#2563eb' : 'rgba(226, 232, 240, 0.9)')};
  background: ${({ $isSelected }) => ($isSelected ? 'rgba(59, 130, 246, 0.08)' : 'white')};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 0.95rem;
  color: #0f172a;
  transition: all 0.25s ease;

  &:hover {
    border-color: #3b82f6;
  }

  html[data-theme='dark'] & {
    background: ${({ $isSelected }) => ($isSelected ? 'rgba(96, 165, 250, 0.15)' : 'rgba(30, 41, 59, 0.8)')};
    border-color: ${({ $isSelected }) => ($isSelected ? '#60a5fa' : 'rgba(255, 255, 255, 0.1)')};
    color: #f1f5f9;
  }
`;

/* Summary Sidebar */
export const OrderSummarySidebar = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 100px;

  h3 {
    font-size: 1.35rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 1.5rem;
  }

  .items-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 240px;
    overflow-y: auto;
    margin-bottom: 1.5rem;
    padding-right: 4px;
  }

  .order-item {
    display: flex;
    align-items: center;
    gap: 12px;

    img {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      object-fit: cover;
      background: #f1f5f9;
    }

    .info {
      flex: 1;
      min-width: 0;

      .title {
        font-size: 0.85rem;
        font-weight: 600;
        color: #0f172a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .qty {
        font-size: 0.75rem;
        color: #64748b;
      }
    }

    .price {
      font-size: 0.9rem;
      font-weight: 700;
      color: #2563eb;
    }
  }

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.85);
    border-color: rgba(255, 255, 255, 0.08);

    h3 {
      color: #f1f5f9;
    }

    .order-item .info .title {
      color: #f1f5f9;
    }

    .order-item .price {
      color: #60a5fa;
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
  font-size: 1.4rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1.5rem;

  .amount {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  html[data-theme='dark'] & {
    color: #f1f5f9;
    .amount {
      background: linear-gradient(135deg, #60a5fa, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 1.05rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

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
