import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, spacing, transitions } from '../../design-system/tokens';

/* Bannoji footer: solid burgundy (#7A1E2B), cream text, gold hovers */

export const FooterContainer = styled.footer`
  background: #7A1E2B;
  border-top: none;
  position: relative;
  margin-top: ${spacing['6xl']};
  color: #F5E9D7;
`;

export const FooterWrap = styled.div`
  padding: ${spacing['5xl']} ${spacing.xl} ${spacing['3xl']};
  display: flex;
  flex-direction: column;
  max-width: 120rem;
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
    color: #E8D9C4;
    font-family: "Instrument Sans", sans-serif;
    font-size: 0.875rem;
    line-height: 1.4;
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
  font-family: "Instrument Serif", Georgia, serif;
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 0;
  color: #F5E9D7;
  margin-bottom: ${spacing.sm};
`;

export const StyledFooterLink = styled(Link)`
  color: #E8D9C4;
  text-decoration: none;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  transition: ${transitions.fast};
  width: fit-content;

  &:hover {
    color: #C9A24C;
  }
`;

export const FooterBottomRow = styled.div`
  border-top: 1px solid rgba(245, 233, 215, 0.25);
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
  color: #E8D9C4;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
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
  border-radius: 50%;
  background: transparent;
  border: 1px solid rgba(245, 233, 215, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F5E9D7;
  font-size: 1.1rem;
  transition: ${transitions.fast};

  &:hover {
    color: #7A1E2B;
    background: #C9A24C;
    border-color: #C9A24C;
  }
`;
