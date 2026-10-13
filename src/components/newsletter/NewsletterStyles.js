import styled, { keyframes } from 'styled-components';
import { spacing, borderRadius, shadows, transitions } from '../../design-system/tokens';

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 12px 32px -12px rgba(122, 30, 43, 0.18);
  }
  50% {
    box-shadow: 0 16px 40px -12px rgba(122, 30, 43, 0.28);
  }
`;

export const NewsletterContainer = styled.div`
  max-width: 1200px;
  margin: ${spacing['6xl']} auto;
  padding: ${spacing['5xl']} ${spacing['4xl']};
  background: #F5E9D7;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(31, 31, 31, 0.15);
  transition: ${transitions.emphasis};
  font-family: "Instrument Sans", sans-serif;

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
    background: #7A1E2B;
  }

  html[data-theme="dark"] & {
    background: #1F1F1F;
    border-color: #E8D9C4;
  }
`;

export const VipBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  padding: 8px 20px;
  background: #7A1E2B;
  color: #F5E9D7;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 800;
  font-family: "Instrument Sans", sans-serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: ${spacing.xl};
  box-shadow: 0 4px 15px rgba(122, 30, 43, 0.3);
`;

export const Title = styled.h3`
  font-family: "Instrument Serif", serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: #7A1E2B;
  margin-bottom: ${spacing.md};
  letter-spacing: -0.03em;
  line-height: 1.15;

  span {
    color: #7A1E2B;
  }

  [data-theme="dark"] & {
    color: #E8CFC0;
    span {
      color: #C9A24C;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-family: "Instrument Sans", sans-serif;
  color: #1F1F1F;
  font-size: 1.1rem;
  margin-bottom: ${spacing['4xl']};
  line-height: 1.6;
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;

  [data-theme="dark"] & {
    color: #CBBFA9;
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
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: "Instrument Sans", sans-serif;
  color: #1F1F1F;
  transition: ${transitions.fast};

  svg {
    color: #7A1E2B;
    flex-shrink: 0;
  }

  [data-theme="dark"] & {
    background: #2A2024;
    border-color: #E8D9C4;
    color: #F5E9D7;

    svg {
      color: #C9A24C;
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
    color: #CBBFA9;
    pointer-events: none;
    z-index: 1;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: ${spacing.md} ${spacing.xl} ${spacing.md} 3rem;
  border: 1.5px solid #E8D9C4;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: "Instrument Sans", sans-serif;
  background: #FFFFFF;
  color: #1F1F1F;
  transition: ${transitions.standard};
  box-shadow: ${shadows.xs};

  &::placeholder {
    color: #CBBFA9;
  }

  &:focus {
    outline: none;
    border-color: #7A1E2B;
    box-shadow: 0 0 0 3px rgba(201, 162, 76, 0.25), ${shadows.sm};
    transform: translateY(-1px);
  }

  [data-theme="dark"] & {
    background: #2A2024;
    border-color: #E8D9C4;
    color: #F5E9D7;

    &:focus {
      border-color: #C9A24C;
      background: #2A2024;
      box-shadow: 0 0 0 3px rgba(201, 162, 76, 0.25);
    }
  }
`;

export const Button = styled.button`
  padding: ${spacing.md} ${spacing['3xl']};
  background: #7A1E2B;
  color: #F5E9D7;
  border: none;
  border-radius: 100px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: "Instrument Sans", sans-serif;
  cursor: pointer;
  transition: ${transitions.emphasis};
  box-shadow: ${shadows.primary};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    background: #C9A24C;
    color: #1F1F1F;
    box-shadow: 0 12px 30px rgba(122, 30, 43, 0.35);
  }

  &:active {
    transform: scale(0.96);
  }

  [data-theme="dark"] & {
    background: #7A1E2B;
    color: #F5E9D7;
    box-shadow: 0 4px 14px rgba(122, 30, 43, 0.4);

    &:hover {
      background: #C9A24C;
      color: #1F1F1F;
      box-shadow: 0 12px 30px rgba(201, 162, 76, 0.4);
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
    font-family: "Instrument Serif", serif;
    font-size: 1.75rem;
    font-weight: 800;
    color: #7A1E2B;
    line-height: 1.2;
  }

  .label {
    font-family: "Instrument Sans", sans-serif;
    font-size: 0.8rem;
    color: #1F1F1F;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  [data-theme="dark"] & {
    .number {
      color: #E8CFC0;
    }
    .label {
      color: #CBBFA9;
    }
  }
`;

export const TrustRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  margin-top: ${spacing.lg};
  color: #1F1F1F;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;

  [data-theme="dark"] & {
    color: #CBBFA9;
  }
`;

export const SuccessMessage = styled.div`
  margin-top: ${spacing.lg};
  padding: ${spacing.md} ${spacing['2xl']};
  background: #FFFFFF;
  color: #7A1E2B;
  border-radius: 1rem;
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  font-weight: 700;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.95rem;
  border: 1px solid #C9A24C;
  box-shadow: 0 4px 15px rgba(122, 30, 43, 0.15);

  [data-theme="dark"] & {
    background: #2A2024;
    color: #E8CFC0;
  }
`;
