import styled, { keyframes } from "styled-components";
import { colors, spacing, borderRadius, shadows, transitions, zIndex } from '../../design-system/tokens';

const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

/* Bannoji header: solid burgundy bar (#7A1E2B), cream text, sticky always */

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: ${zIndex.fixed};
  background: #7A1E2B;
  border-bottom: none;
  box-shadow: 0 2px 8px rgba(31, 31, 31, 0.12);
  animation: ${slideDown} 0.2s ease-in-out;
  transition: ${transitions.standard};

  [data-theme="dark"] & {
    background: #1F1F1F;
    border-bottom: 1px solid ${colors.border.dark};
  }
`;

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: ${spacing.md} ${spacing['5xl']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 4.75rem;

  @media (max-width: 768px) {
    padding: ${spacing.sm} ${spacing.xl};
    height: 4.25rem;
  }

  @media (max-width: 480px) {
    padding: ${spacing.sm} ${spacing.md};
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: 1px solid rgba(245, 233, 215, 0.4);
  color: #F5E9D7;
  padding: ${spacing.sm};
  cursor: pointer;
  border-radius: ${borderRadius.md};
  transition: ${transitions.fast};
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }

  &:hover {
    background: rgba(245, 233, 215, 0.12);
  }

  svg { width: 22px; height: 22px; }

  [data-theme="dark"] & {
    background: transparent;
    border-color: rgba(245, 233, 215, 0.25);
    color: #F5E9D7;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  cursor: pointer;
  user-select: none;
  transition: ${transitions.fast};

  &:hover { opacity: 0.85; }
`;

export const LogoBadge = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #F5E9D7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7A1E2B;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const LogoText = styled.span`
  font-family: "Instrument Serif", Georgia, serif;
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: 0;
  color: #F5E9D7;
  display: flex;
  align-items: center;

  span {
    color: #F5E9D7;
    margin-left: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const DesktopMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  flex-grow: 1;
  margin-left: ${spacing['5xl']};

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MenuItem = styled.button`
  background: none;
  border: none;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  padding: ${spacing.sm} ${spacing.lg};
  transition: ${transitions.fast};
  color: #F5E9D7;
  font-weight: 400;
  border-radius: ${borderRadius.pills};
  position: relative;

  &:hover {
    color: #C9A24C;
    background: rgba(245, 233, 215, 0.1);
  }

  &:active { transform: scale(0.98); }

  [data-theme="dark"] & {
    color: #F5E9D7;
    &:hover {
      color: ${colors.accent.DEFAULT};
      background: rgba(245, 233, 215, 0.08);
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-left: auto;
  min-width: 280px;
  max-width: 380px;
  flex: 1;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 0.8rem 0.8rem 3rem;
  border: 1px solid #E8D9C4;
  border-radius: ${borderRadius.md};
  background: #FFFFFF;
  color: ${colors.text.primary};
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.875rem;
  transition: ${transitions.fast};

  &::placeholder {
    color: ${colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${colors.accent.DEFAULT};
    background: #FBF4E9;
    box-shadow: 0 0 0 2px rgba(201, 162, 76, 0.35);
  }

  [data-theme="dark"] & {
    background: #2A2024;
    border-color: ${colors.border.dark};
    color: #F5E9D7;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: ${spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text.disabled};
  pointer-events: none;
`;

export const SearchResults = styled.div`
  position: absolute;
  top: calc(100% + ${spacing.sm});
  left: 0;
  width: 100%;
  min-width: 340px;
  background: #FFFFFF;
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius.md};
  max-height: 380px;
  overflow-y: auto;
  z-index: ${zIndex.dropdown};
  box-shadow: ${shadows.popover};
  padding: ${spacing.xs};

  [data-theme="dark"] & {
    background: #2A2024;
    border-color: ${colors.border.dark};
  }
`;

export const SearchResultItem = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  padding: ${spacing.md};
  border-radius: ${borderRadius.sm};
  cursor: pointer;
  transition: ${transitions.fast};
  text-align: left;
  border: none;
  background: transparent;
  width: 100%;

  img {
    width: 48px;
    height: 48px;
    border-radius: ${borderRadius.sm};
    object-fit: cover;
    background: ${colors.primary[100]};
    flex-shrink: 0;
  }

  .info {
    flex: 1;
    min-width: 0;

    .title {
      font-family: "Instrument Sans", sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      color: ${colors.text.primary};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .category {
      font-size: 0.75rem;
      color: ${colors.text.secondary};
      text-transform: capitalize;
    }
  }

  .price {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${colors.primary.DEFAULT};
    white-space: nowrap;
  }

  &:hover {
    background: ${colors.primary[50]};
    .title { color: ${colors.primary.DEFAULT}; }
  }

  [data-theme="dark"] & {
    .info .title { color: #F5E9D7; }
    .info .category { color: #CBBFA9; }
    .price { color: ${colors.accent.DEFAULT}; }
    &:hover { background: rgba(245,233,215,0.08); }
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  position: relative;
`;

export const ThemeToggle = styled.button`
  background: transparent;
  border: 1px solid rgba(245, 233, 215, 0.4);
  color: #F5E9D7;
  cursor: pointer;
  padding: ${spacing.sm};
  border-radius: 50%;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${transitions.fast};

  &:hover {
    background: rgba(245, 233, 215, 0.12);
  }

  &:active { transform: scale(0.95); }

  [data-theme="dark"] & {
    color: ${colors.accent.DEFAULT};
  }
`;

export const CartButton = styled.button`
  background: transparent;
  border: 1px solid rgba(245, 233, 215, 0.4);
  color: #F5E9D7;
  cursor: pointer;
  padding: ${spacing.sm};
  border-radius: 50%;
  position: relative;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${transitions.fast};

  &:hover {
    background: rgba(245, 233, 215, 0.12);
  }

  &:active { transform: scale(0.95); }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background: ${colors.accent.DEFAULT};
  color: #7A1E2B;
  border-radius: 9999px;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  border: 2px solid #7A1E2B;

  [data-theme="dark"] & {
    border-color: #1F1F1F;
  }
`;

export const MobileMenu = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: ${spacing.sm};
  padding: ${spacing.xl} ${spacing.xl};
  background: #7A1E2B;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: ${zIndex.dropdown};
  box-shadow: ${shadows.lg};
  border-top: 1px solid rgba(245, 233, 215, 0.2);
  animation: ${slideDown} 0.2s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }

  [data-theme="dark"] & {
    background: #1F1F1F;
    border-top: 1px solid ${colors.border.dark};
  }
`;

export const MobileSearchContainer = styled.div`
  width: 100%;
  position: relative;
`;
