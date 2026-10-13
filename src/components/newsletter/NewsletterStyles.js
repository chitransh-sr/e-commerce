import styled, { keyframes } from 'styled-components';
import { colors, spacing, borderRadius, shadows, transitions } from '../../design-system/tokens';

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 25px 60px -15px rgba(37, 99, 235, 0.2), 0 0 30px rgba(139, 92, 246, 0.15);
  }
  50% {
    box-shadow: 0 30px 70px -10px rgba(37, 99, 235, 0.3), 0 0 45px rgba(139, 92, 246, 0.25);
  }
`;

export const NewsletterContainer = styled.div`
  max-width: 1200px;
  margin: ${spacing['6xl']} auto;
  padding: ${spacing['5xl']} ${spacing['4xl']};
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: ${borderRadius['3xl']};
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${pulseGlow} 6s infinite;
  transition: ${transitions.emphasis};

  @media (max-width: 768px) {
    padding: ${spacing['3xl']} ${spacing.lg};
    margin: ${spacing['4xl']} ${spacing.md};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${colors.gradients.primary};
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
    background-size: 200% auto;
    animation: var(--shine) 4s linear infinite;
  }

  html[data-theme="dark"] & {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    border-color: ${colors.border.dark};
  }
`;

export const VipBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  padding: 8px 20px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: ${spacing.xl};
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${colors.text.primary};
  margin-bottom: ${spacing.md};
  letter-spacing: -0.03em;
  line-height: 1.15;

  span {
    background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  [data-theme="dark"] & {
    color: ${colors.text.primaryDark};
    span {
      background: linear-gradient(135deg, #60a5fa 0%, #c084fc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  color: ${colors.text.secondary};
  font-size: 1.1rem;
  margin-bottom: ${spacing['4xl']};
  line-height: 1.6;
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;

  [data-theme="dark"] & {
    color: ${colors.text.secondaryDark};
  }
`;

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  margin-bottom: ${spacing['3xl']};
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
`;

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  padding: ${spacing.sm} ${spacing.lg};
  background: rgba(255, 255, 255, 0.8);
  border-radius: ${borderRadius.xl};
  font-size: 0.95rem;
  font-weight: 600;
  color: ${colors.text.secondary};
  transition: ${transitions.fast};

  svg {
    color: ${colors.primary[600]};
    flex-shrink: 0;
  }

  [data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.8);
    color: ${colors.text.secondaryDark};

    svg {
      color: ${colors.primary[400]};
    }
  }
`;

export const Form = styled.form`
  display: flex;
  gap: ${spacing.md};
  justify-content: center;
  max-width: 560px;
  margin: 0 auto ${spacing.xl};

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${spacing.sm};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;

  .icon {
    position: absolute;
    left: ${spacing.md};
    color: ${colors.text.disabled};
    pointer-events: none;
    z-index: 1;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: ${spacing.md} ${spacing.xl} ${spacing.md} 3rem;
  border: 1.5px solid ${colors.border.light};
  border-radius: ${borderRadius.xl};
  font-size: 0.95rem;
  background: white;
  color: ${colors.text.primary};
  transition: ${transitions.standard};
  box-shadow: ${shadows.xs};

  &::placeholder {
    color: ${colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary[400]};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12), ${shadows.sm};
    transform: translateY(-1px);
  }

  [data-theme="dark"] & {
    background: rgba(15, 23, 42, 0.7);
    border-color: ${colors.border.dark};
    color: ${colors.text.primaryDark};

    &:focus {
      border-color: ${colors.primary[400]};
      background: rgba(30, 41, 59, 0.95);
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.18);
    }
  }
`;

export const Button = styled.button`
  padding: ${spacing.md} ${spacing['3xl']};
  background: ${colors.gradients.primary};
  color: white;
  border: none;
  border-radius: ${borderRadius.xl};
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: ${transitions.emphasis};
  box-shadow: ${shadows.primary};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }

  [data-theme="dark"] & {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);

    &:hover {
      box-shadow: 0 12px 30px rgba(99, 102, 241, 0.5);
    }
  }
`;

export const StatsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing['3xl']};
  margin-bottom: ${spacing.lg};

  @media (max-width: 600px) {
    gap: ${spacing.xl};
    flex-wrap: wrap;
  }
`;

export const StatItem = styled.div`
  text-align: center;

  .number {
    display: block;
    font-size: 1.75rem;
    font-weight: 800;
    background: linear-gradient(135deg, #2563eb, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
  }

  .label {
    font-size: 0.8rem;
    color: ${colors.text.secondary};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  [data-theme="dark"] & {
    .label {
      color: ${colors.text.secondaryDark};
    }
  }
`;

export const TrustRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  margin-top: ${spacing.lg};
  color: ${colors.text.secondary};
  font-size: 0.9rem;
  font-weight: 500;

  [data-theme="dark"] & {
    color: ${colors.text.secondaryDark};
  }
`;

export const SuccessMessage = styled.div`
  margin-top: ${spacing.lg};
  padding: ${spacing.md} ${spacing['2xl']};
  background: rgba(16, 185, 129, 0.12);
  color: #059669;
  border-radius: ${borderRadius.xl};
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  font-weight: 700;
  font-size: 0.95rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.15);

  [data-theme="dark"] & {
    background: rgba(16, 185, 129, 0.2);
    color: #34d399;
  }
`;