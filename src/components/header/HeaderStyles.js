import styled from "styled-components";

export const Nav = styled.nav`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  animation: slideDown 0.6s ease-out;

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    border-bottom: 1px solid rgba(59, 130, 246, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 4.5rem;

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: transparent;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: linear-gradient(145deg, #f8fafc, #ffffff);
  border: 1px solid rgba(226, 232, 240, 0.8);
  color: #1e40af;
  padding: 0.75rem;
  cursor: pointer;
  min-width: 48px;
  min-height: 48px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: linear-gradient(145deg, #eff6ff, #ffffff);
    border-color: #3b82f6;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(59, 130, 246, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: linear-gradient(145deg, #1e293b, #0f172a);
    border-color: rgba(59, 130, 246, 0.3);
    color: #f97316;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      background: linear-gradient(145deg, #334155, #1e293b);
      border-color: #f97316;
      box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2);
    }
  }
`;

export const Logo = styled.svg`
  width: 160px;
  height: auto;
  margin-right: 2rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 4px 8px rgba(59, 130, 246, 0.2));
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

    &:hover {
      filter: drop-shadow(0 4px 8px rgba(249, 115, 22, 0.3));
    }
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.button`
  background: none;
  border: none;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #1e293b;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  border-radius: 10px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #f97316);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
    border-radius: 2px;
  }

  &:hover {
    color: #3b82f6;
    background: linear-gradient(145deg, #eff6ff, #ffffff);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
  }

  &:hover::before {
    width: 70%;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(59, 130, 246, 0.1);
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #f1f5f9;

    &:hover {
      color: #f97316;
      background: linear-gradient(145deg, rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.05));
      box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2);
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-left: auto;
`;

export const SearchInput = styled.input`
  padding: 0.875rem 1.25rem;
  border: 2px solid rgba(226, 232, 240, 0.8);
  border-radius: 14px;
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  color: #1e293b;
  font-size: 0.9rem;
  width: 280px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', sans-serif;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);

  &::placeholder {
    color: #94a3b8;
    font-style: italic;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);
    transform: translateY(-1px);
  }

  &:hover {
    border-color: #cbd5e1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(0, 0, 0, 0.02);
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: linear-gradient(145deg, #1e293b, #0f172a);
    border-color: rgba(59, 130, 246, 0.3);
    color: #f1f5f9;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);

    &::placeholder {
      color: #94a3b8;
    }

    &:focus {
      border-color: #f97316;
      background: #1e293b;
      box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.2), inset 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:hover {
      border-color: rgba(59, 130, 246, 0.5);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 14px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 100;
  box-shadow: 0 4px 25px -5px rgba(0, 0, 0, 0.1);

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }

  div {
    padding: 0.75rem 1rem;
    color: #1e293b;
    cursor: pointer;
    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
    transition: all 0.2s ease;
    font-size: 0.9rem;

    &:hover {
      background: #f8fafc;
      color: #3b82f6;
      padding-left: 1.25rem;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: #1e293b;
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 4px 25px -5px rgba(0, 0, 0, 0.3);

    &::-webkit-scrollbar-track {
      background: #0f172a;
    }

    &::-webkit-scrollbar-thumb {
      background: #475569;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #64748b;
    }

    div {
      color: #f1f5f9;
      border-bottom-color: rgba(59, 130, 246, 0.2);

      &:hover {
        background: #334155;
        color: #f97316;
      }
    }
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
  position: relative;
  z-index: 1;
`;

export const ThemeToggle = styled.button`
  background: linear-gradient(145deg, #f8fafc, #ffffff);
  border: 2px solid rgba(226, 232, 240, 0.8);
  color: #3b82f6;
  cursor: pointer;
  padding: 0.875rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 14px;
  position: relative;
  z-index: 12;
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.15);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.6s ease;
  }

  /* Dark mode styles */
  &[data-theme="dark"] {
    background: linear-gradient(145deg, #1e293b, #0f172a);
    border-color: rgba(59, 130, 246, 0.3);
    color: #f97316;
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.2);

    &:active {
      box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
    }

    &::before {
      background: linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.1), transparent);
    }
  }
`;

export const CartButton = styled.button`
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.875rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 14px;
  position: relative;
  z-index: 10;
  overflow: visible; /* Changed to visible to show badge */
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  /* Dark mode styles */
  &[data-theme="dark"] {
    background: linear-gradient(135deg, #f97316, #ea580c);
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
  }
`;

export const MobileMenu = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 1000;
  align-items: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  backdrop-filter: blur(20px);
  animation: slideDown 0.3s ease-out;

  @media (min-width: 769px) {
    display: none;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    border-top: 1px solid rgba(59, 130, 246, 0.3);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  }

  @keyframes slideDown {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const MobileSearchContainer = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;
`;