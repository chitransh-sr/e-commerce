import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-top: 1px solid rgba(226, 232, 240, 0.9);
  position: relative;
  margin-top: 5rem;
  box-shadow: 0 -15px 40px rgba(0, 0, 0, 0.03);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
  }

  html[data-theme="dark"] & {
    background: rgba(10, 15, 29, 0.95);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 -20px 50px rgba(0, 0, 0, 0.5);
  }
`;

export const FooterWrap = styled.div`
  padding: 60px 24px 35px;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

export const FooterTopRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  p {
    color: #64748b;
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: 340px;

    html[data-theme="dark"] & {
      color: #94a3b8;
    }
  }
`;

export const FooterLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColumnTitle = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #0f172a;
  margin-bottom: 6px;

  html[data-theme="dark"] & {
    color: #f1f5f9;
  }
`;

export const StyledFooterLink = styled(Link)`
  color: #64748b;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.25s ease;
  width: fit-content;

  &:hover {
    color: #2563eb;
    transform: translateX(4px);
  }

  html[data-theme="dark"] & {
    color: #94a3b8;

    &:hover {
      color: #60a5fa;
    }
  }
`;

export const FooterBottomRow = styled.div`
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  html[data-theme="dark"] & {
    border-color: rgba(255, 255, 255, 0.08);
  }
`;

export const Copyright = styled.div`
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 500;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SocialButton = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(241, 245, 249, 0.8);
  border: 1px solid rgba(226, 232, 240, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  font-size: 1.1rem;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    color: white;
    background: linear-gradient(135deg, #2563eb, #8b5cf6);
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);
  }

  html[data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(255, 255, 255, 0.08);
    color: #cbd5e1;

    &:hover {
      background: linear-gradient(135deg, #3b82f6, #ec4899);
    }
  }
`;