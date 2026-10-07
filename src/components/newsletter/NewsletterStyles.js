import styled, { keyframes } from 'styled-components';

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 20px 60px -15px rgba(59, 130, 246, 0.25), 0 0 30px rgba(139, 92, 246, 0.15);
  }
  50% {
    box-shadow: 0 25px 70px -10px rgba(59, 130, 246, 0.4), 0 0 45px rgba(139, 92, 246, 0.25);
  }
`;

export const NewsletterContainer = styled.div`
  max-width: 1100px;
  margin: 5rem auto;
  padding: 4rem 3rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${pulseGlow} 6s infinite;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin: 3rem 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
    background-size: 200% auto;
    animation: shine 4s linear infinite;
  }

  html[data-theme="dark"] & {
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%);
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

export const VipBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
`;

export const Title = styled.h3`
  font-size: 2.6rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 0.85rem;
  letter-spacing: -0.03em;
  line-height: 1.2;

  span {
    background: linear-gradient(135deg, #2563eb, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  html[data-theme="dark"] & {
    color: #f1f5f9;
    span {
      background: linear-gradient(135deg, #60a5fa, #c084fc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  margin-bottom: 2.25rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  html[data-theme="dark"] & {
    color: #94a3b8;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 12px;
  justify-content: center;
  max-width: 520px;
  margin: 0 auto;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;

  .icon {
    position: absolute;
    left: 16px;
    color: #94a3b8;
    pointer-events: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.25rem 1rem 3rem;
  border: 1.5px solid rgba(226, 232, 240, 0.9);
  border-radius: 16px;
  font-size: 0.95rem;
  background: white;
  color: #0f172a;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15), 0 8px 20px -4px rgba(59, 130, 246, 0.12);
  }

  html[data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
    color: #f1f5f9;

    &:focus {
      border-color: #60a5fa;
      background: rgba(30, 41, 59, 1);
      box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.2);
    }
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.5);
    background: linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%);
  }

  &:active {
    transform: scale(0.96);
  }

  html[data-theme="dark"] & {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);

    &:hover {
      box-shadow: 0 12px 30px rgba(99, 102, 241, 0.5);
    }
  }
`;

export const TrustRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 1.5rem;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 500;

  html[data-theme="dark"] & {
    color: #94a3b8;
  }
`;

export const SuccessMessage = styled.div`
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  background: rgba(16, 185, 129, 0.12);
  color: #059669;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.15);

  html[data-theme="dark"] & {
    background: rgba(16, 185, 129, 0.2);
    color: #34d399;
  }
`;
