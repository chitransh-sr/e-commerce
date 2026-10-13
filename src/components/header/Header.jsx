import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from '../../contexts/ThemeContext';
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  ShoppingBag,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles
} from "lucide-react";
import {
  Nav,
  Container,
  MobileMenuButton,
  LogoWrapper,
  LogoBadge,
  LogoText,
  DesktopMenu,
  MenuItem,
  RightSection,
  ThemeToggle,
  CartButton,
  CartBadge,
  MobileMenu,
} from "./HeaderStyles";
import AnnouncementBar from "../announcement/AnnouncementBar";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [cart] = useLocalStorage("cart", []);

  const totalCartItems = useMemo(() =>
    cart.reduce((total, item) => total + (item.quantity || 1), 0),
    [cart]
  );

  const go = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
    <AnnouncementBar />
    <Nav>
      <Container>
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </MobileMenuButton>

        <LogoWrapper onClick={() => go('/')}>
          <LogoBadge>
            <Sparkles size={22} />
          </LogoBadge>
          <LogoText>
            Shop<span>Now</span>
          </LogoText>
        </LogoWrapper>

        <DesktopMenu>
          <MenuItem
            onClick={() => go('/')}
            style={isActive('/') ? { color: '#C9A24C' } : undefined}
          >
            Home
          </MenuItem>

          <MenuItem
            onClick={() => go('/new-arrivals')}
            style={isActive('/new-arrivals') ? { color: '#C9A24C' } : undefined}
          >
            New Arrivals
          </MenuItem>

          <MenuItem
            onClick={() => go('/about')}
            style={isActive('/about') ? { color: '#C9A24C' } : undefined}
          >
            About Us
          </MenuItem>

          <MenuItem
            onClick={() => go('/contact')}
            style={isActive('/contact') ? { color: '#C9A24C' } : undefined}
          >
            Contact
          </MenuItem>
        </DesktopMenu>

        <RightSection>
          <ThemeToggle
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </ThemeToggle>

          <CartButton onClick={() => go("/cart")} aria-label="View shopping cart">
            <ShoppingBag size={20} />
            {totalCartItems > 0 && (
              <CartBadge aria-label={`${totalCartItems} items in cart`}>{totalCartItems}</CartBadge>
            )}
          </CartButton>
        </RightSection>
      </Container>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MenuItem onClick={() => go('/')}>Home</MenuItem>
        <MenuItem onClick={() => go('/new-arrivals')}>New Arrivals</MenuItem>
        <MenuItem onClick={() => go('/about')}>About Us</MenuItem>
        <MenuItem onClick={() => go('/contact')}>Contact</MenuItem>
      </MobileMenu>
    </Nav>
    </>
  );
}

export default Header;
