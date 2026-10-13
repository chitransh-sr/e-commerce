import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, spacing, borderRadius, transitions } from '../../design-system/tokens';

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-top: 1px solid ${colors.border.dark};
  position: relative;
  margin-top: ${spacing['6xl']};
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  color: ${colors.text.primaryDark};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${colors.gradients.primary};
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
    background-size: 200% auto;
    animation: var(--shine) 3s linear infinite;
  }
`;

export const FooterWrap = styled.div`
  padding: ${spacing['5xl']} ${spacing.xl} ${spacing['3xl']};
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: ${spacing['3xl']} ${spacing.md} ${spacing.xl};
  }
`;

export const FooterTopRow = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.9fr 0.9fr 0.9fr;
  gap: ${spacing['3xl']};
  margin-bottom: ${spacing['4xl']};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: ${spacing['2xl']};
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: ${spacing.xl};
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};

  p {
    color: ${colors.text.secondaryDark};
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: 340px;
  }

  .social-links {
    display: flex;
    gap: ${spacing.sm};
    margin-top: ${spacing.md};
  }
`;

export const FooterLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

export const ColumnTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${colors.text.primaryDark};
  margin-bottom: ${spacing.sm};
`;

export const StyledFooterLink = styled(Link)`
  color: ${colors.text.secondaryDark};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: ${transitions.fast};
  width: fit-content;
  position: relative;

  &:hover {
    color: ${colors.primary[400]};
    transform: translateX(4px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${colors.primary[400]};
    transition: width 0.25s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const FooterBottomRow = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: ${spacing['3xl']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${spacing.md};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.div`
  color: ${colors.text.secondaryDark};
  font-size: 0.85rem;
  font-weight: 500;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  margin-top: ${spacing.md};
`;

export const SocialButton = styled.a`
  width: 42px;
  height: 42px;
  border-radius: ${borderRadius.lg};
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text.secondaryDark};
  font-size: 1.1rem;
  transition: ${transitions.emphasis};

  &:hover {
    color: white;
    background: ${colors.gradients.primary};
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  }
`;