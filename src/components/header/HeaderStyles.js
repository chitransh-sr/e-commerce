import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const pulseBadge = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.22);
  }
`;

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.04);
  animation: ${slideDown} 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  transition: all 0.3s ease;

  html[data-theme="dark"] & {
    background: rgba(10, 15, 29, 0.82);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.85rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 4.75rem;

  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
    height: 4.25rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(226, 232, 240, 0.8);
  color: #1e40af;
  padding: 0.6rem;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: #eff6ff;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 22px;
    height: 22px;
  }

  html[data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
    color: #f97316;

    &:hover {
      background: rgba(51, 65, 85, 0.8);
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: scale(1.03);
  }
`;

export const LogoBadge = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: shine 4s infinite;
  }
`;

export const LogoText = styled.span`
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #0f172a 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;

  span {
    background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 2px;
  }

  html[data-theme="dark"] & {
    background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-grow: 1;
  margin-left: 2.5rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MenuItem = styled.button`
  background: none;
  border: none;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0.6rem 1rem;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  color: #475569;
  font-weight: 600;
  border-radius: 12px;
  position: relative;

  &:hover {
    color: #2563eb;
    background: rgba(59, 130, 246, 0.08);
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.96);
  }

  html[data-theme="dark"] & {
    color: #94a3b8;

    &:hover {
      color: #60a5fa;
      background: rgba(96, 165, 250, 0.12);
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-left: auto;
  min-width: 260px;
  max-width: 320px;
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
  padding: 0.75rem 1rem 0.75rem 2.6rem;
  border: 1.5px solid rgba(226, 232, 240, 0.9);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.7);
  color: #0f172a;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15), 0 8px 20px -4px rgba(59, 130, 246, 0.12);
    transform: translateY(-1px);
  }

  html[data-theme="dark"] & {
    background: rgba(15, 23, 42, 0.6);
    border-color: rgba(255, 255, 255, 0.12);
    color: #f1f5f9;

    &:focus {
      border-color: #60a5fa;
      background: rgba(30, 41, 59, 0.9);
      box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.2);
    }
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  pointer-events: none;
`;

export const SearchResults = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  min-width: 340px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 18px;
  max-height: 380px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.18);
  padding: 8px;

  html[data-theme="dark"] & {
    background: rgba(15, 23, 42, 0.96);
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.6);
  }
`;

export const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  img {
    width: 44px;
    height: 44px;
    border-radius: 8px;
    object-fit: cover;
    background: #f1f5f9;
  }

  .info {
    flex: 1;
    min-width: 0;

    .title {
      font-size: 0.9rem;
      font-weight: 600;
      color: #1e293b;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .category {
      font-size: 0.75rem;
      color: #64748b;
      text-transform: capitalize;
    }
  }

  .price {
    font-size: 0.95rem;
    font-weight: 700;
    color: #2563eb;
  }

  &:hover {
    background: rgba(59, 130, 246, 0.1);
    transform: translateX(4px);

    .title {
      color: #2563eb;
    }
  }

  html[data-theme="dark"] & {
    .info .title {
      color: #f1f5f9;
    }
    .info .category {
      color: #94a3b8;
    }
    .price {
      color: #60a5fa;
    }

    &:hover {
      background: rgba(96, 165, 250, 0.15);
      .title {
        color: #93c5fd;
      }
    }
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const ThemeToggle = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(226, 232, 240, 0.8);
  color: #3b82f6;
  cursor: pointer;
  padding: 0.7rem;
  border-radius: 14px;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: rotate(15deg) scale(1.08);
    background: #eff6ff;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
  }

  &:active {
    transform: scale(0.92);
  }

  html[data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
    color: #fbbf24;

    &:hover {
      background: rgba(51, 65, 85, 0.8);
      box-shadow: 0 4px 15px rgba(251, 191, 36, 0.2);
    }
  }
`;

export const CartButton = styled.button`
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.7rem;
  border-radius: 14px;
  position: relative;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.35);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.45);
  }

  &:active {
    transform: scale(0.95);
  }

  html[data-theme="dark"] & {
    background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.35);

    &:hover {
      box-shadow: 0 8px 24px rgba(249, 115, 22, 0.45);
    }
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  border-radius: 9999px;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 800;
  border: 2px solid white;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
  animation: ${pulseBadge} 2s infinite;

  html[data-theme="dark"] & {
    border-color: #0f172a;
  }
`;

export const MobileMenu = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  animation: ${slideDown} 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  @media (min-width: 769px) {
    display: none;
  }

  html[data-theme="dark"] & {
    background: rgba(15, 23, 42, 0.95);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const MobileSearchContainer = styled.div`
  width: 100%;
  position: relative;
`;