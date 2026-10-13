import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from '../../contexts/ThemeContext';
import useLocalStorage from "../../hooks/useLocalStorage";
import { 
  ShoppingBag, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles
} from "lucide-react";
import styled, { keyframes } from "styled-components";
import { colors, spacing, borderRadius, shadows, transitions, zIndex } from '../../design-system/tokens';

// Animations
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

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

// Styled Components
const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: ${zIndex.fixed};
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid ${colors.border.light};
  box-shadow: ${shadows.xs};
  animation: ${slideDown} 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  transition: ${transitions.emphasis};

  [data-theme="dark"] & {
    background: rgba(15, 23, 42, 0.88);
    border-bottom: 1px solid ${colors.border.dark};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  }
`;

const Container = styled.div`
  max-width: 1400px;
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

const MobileMenuButton = styled.button`
  display: none;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid ${colors.border.light};
  color: ${colors.primary[700]};
  padding: ${spacing.sm};
  cursor: pointer;
  border-radius: ${borderRadius.lg};
  transition: ${transitions.emphasis};
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }

  &:hover {
    background: ${colors.primary[50]};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 22px;
    height: 22px;
  }

  [data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: ${colors.border.dark};
    color: ${colors.accent[400]};

    &:hover {
      background: rgba(51, 65, 85, 0.8);
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  cursor: pointer;
  user-select: none;
  transition: ${transitions.spring};

  &:hover {
    transform: scale(1.03);
  }
`;

const LogoBadge = styled.div`
  width: 42px;
  height: 42px;
  border-radius: ${borderRadius.md};
  background: ${colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: ${colors.effects?.glow?.primary || shadows.primary};
  position: relative;
  overflow: hidden;
  animation: ${float} 3s ease-in-out infinite;

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

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const LogoText = styled.span`
  font-size: 1.5rem;
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

  [data-theme="dark"] & {
    background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const DesktopMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing.xl};
  flex-grow: 1;
  margin-left: ${spacing['5xl']};

  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  font-size: 0.95rem;
  cursor: pointer;
  padding: ${spacing.sm} ${spacing.xl};
  transition: ${transitions.emphasis};
  color: ${colors.text.secondary};
  font-weight: 600;
  border-radius: ${borderRadius.lg};
  position: relative;

  &:hover {
    color: ${colors.primary[700]};
    background: rgba(37, 99, 235, 0.05);
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.96);
  }

  [data-theme="dark"] & {
    color: ${colors.text.secondaryDark};

    &:hover {
      color: ${colors.primary[400]};
      background: rgba(96, 165, 250, 0.1);
    }
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-left: auto;
  min-width: 280px;
  max-width: 380px;
  flex: 1;

  @media (max-width: 900px) {
    display: none;
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${spacing.md} ${spacing.xl} ${spacing.md} 3rem;
  border: 1.5px solid ${colors.border.light};
  border-radius: ${borderRadius.xl};
  background: rgba(255, 255, 255, 0.8);
  color: ${colors.text.primary};
  font-size: 0.95rem;
  font-weight: 500;
  transition: ${transitions.standard};
  box-shadow: ${shadows.xs};

  &::placeholder {
    color: ${colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary[400]};
    background: white;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12), ${shadows.sm};
    transform: translateY(-1px);
  }

  [data-theme="dark"] & {
    background: rgba(15, 23, 42, 0.6);
    border-color: ${colors.border.dark};
    color: ${colors.text.primaryDark};

    &:focus {
      border-color: ${colors.primary[400]};
      background: rgba(30, 41, 59, 0.95);
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.18);
    }
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: ${spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text.disabled};
  pointer-events: none;
`;

const SearchResults = styled.div`
  position: absolute;
  top: calc(100% + ${spacing.sm});
  left: 0;
  width: 100%;
  min-width: 340px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius.xl};
  max-height: 380px;
  overflow-y: auto;
  z-index: ${zIndex.dropdown};
  box-shadow: ${shadows['2xl']};
  padding: ${spacing.xs};

  [data-theme="dark"] & {
    background: rgba(15, 23, 42, 0.96);
    border-color: ${colors.border.dark};
    box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.5);
  }
`;

const SearchResultItem = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  padding: ${spacing.md};
  border-radius: ${borderRadius.lg};
  cursor: pointer;
  transition: ${transitions.fast};
  text-align: left;
  border: none;
  background: transparent;
  width: 100%;

  img {
    width: 48px;
    height: 48px;
    border-radius: ${borderRadius.md};
    object-fit: cover;
    background: ${colors.gray[100]};
    flex-shrink: 0;
  }

  .info {
    flex: 1;
    min-width: 0;

    .title {
      font-size: 0.95rem;
      font-weight: 600;
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
    font-size: 0.95rem;
    font-weight: 700;
    color: ${colors.primary[600]};
    white-space: nowrap;
  }

  &:hover {
    background: rgba(37, 99, 235, 0.05);
    transform: translateX(4px);

    .title {
      color: ${colors.primary[600]};
    }
  }

  [data-theme="dark"] & {
    .info {
      .title {
        color: ${colors.text.primaryDark};
      }
      .category {
        color: ${colors.text.secondaryDark};
      }
    }
    .price {
      color: ${colors.primary[400]};
    }

    &:hover {
      background: rgba(96, 165, 250, 0.08);
      .title {
        color: ${colors.primary[300]};
      }
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  position: relative;
`;

const ThemeToggle = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid ${colors.border.light};
  color: ${colors.primary[500]};
  cursor: pointer;
  padding: ${spacing.sm};
  border-radius: ${borderRadius.lg};
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${transitions.emphasis};

  &:hover {
    transform: rotate(15deg) scale(1.08);
    background: ${colors.primary[50]};
    box-shadow: ${colors.effects?.glow?.primary || '0 0 15px rgba(37, 99, 235, 0.2)'};
  }

  &:active {
    transform: scale(0.92);
  }

  [data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.8);
    border-color: ${colors.border.dark};
    color: ${colors.accent[400]};

    &:hover {
      background: rgba(51, 65, 85, 0.8);
      box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
    }
  }
`;

const CartButton = styled.button`
  background: ${colors.gradients.primary};
  border: none;
  color: white;
  cursor: pointer;
  padding: ${spacing.sm};
  border-radius: ${borderRadius.lg};
  position: relative;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${colors.effects?.glow?.primary || shadows.primary};
  transition: ${transitions.emphasis};

  &:hover {
    transform: translateY(-2px) scale(1.08);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.5);
  }

  &:active {
    transform: scale(0.92);
  }

  [data-theme="dark"] & {
    background: ${colors.gradients.violet};
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);

    &:hover {
      box-shadow: 0 12px 30px rgba(99, 102, 241, 0.5);
    }
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background: ${colors.gradients.warm};
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

  [data-theme="dark"] & {
    border-color: #0f172a;
  }
`;

const MobileMenu = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: ${spacing.md};
  padding: ${spacing.xl} ${spacing.xl};
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: ${zIndex.dropdown};
  box-shadow: ${shadows['2xl']};
  border-top: 1px solid ${colors.border.light};
  animation: ${slideDown} 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  @media (min-width: 769px) {
    display: none;
  }

  [data-theme="dark"] & {
    background: rgba(15, 23, 42, 0.95);
    border-top: 1px solid ${colors.border.dark};
  }
`;

const MobileSearchContainer = styled.div`
  width: 100%;
  position: relative;
`;

function Header() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [cart] = useLocalStorage("cart", []);
  const searchRef = useRef(null);

  const fetchData = useCallback(async (query) => {
    if (!query.trim()) {
      setResult([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${query}&limit=6`
      );
      setResult(response?.data?.products || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData(input);
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [input, fetchData]);

  // Click outside to close search dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalCartItems = useMemo(() => 
    cart.reduce((total, item) => total + (item.quantity || 1), 0), 
    [cart]
  );

  const handleSelectProduct = (product) => {
    setIsExpanded(false);
    setInput("");
    navigate("/product", { state: { product } });
  };

  // Close mobile menu on route change
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <Nav>
      <Container>
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </MobileMenuButton>

        <LogoWrapper onClick={() => navigate('/')}>
          <LogoBadge>
            <Sparkles size={22} />
          </LogoBadge>
          <LogoText>
            Shop<span>Now</span>
          </LogoText>
        </LogoWrapper>

        <DesktopMenu>
          <MenuItem
            onClick={() => {
              const element = document.getElementById("products-category");
              if (element) {
                const offset = 90;
                const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: "smooth",
                });
              }
            }}
          >
            Explore Catalog
          </MenuItem>

          <MenuItem
            onClick={() => {
              const element = document.getElementById("customer-reviews");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Customer Reviews
          </MenuItem>

          <MenuItem
            onClick={() => {
              const element = document.getElementById("newsletter");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            VIP Club
          </MenuItem>

          <SearchContainer ref={searchRef}>
            <SearchInputWrapper>
              <SearchIconWrapper>
                <Search size={20} />
              </SearchIconWrapper>
              <SearchInput
                type="text"
                placeholder="Search premium products..."
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setIsExpanded(true);
                }}
                onFocus={() => setIsExpanded(true)}
                aria-label="Search products"
              />
            </SearchInputWrapper>

            {isExpanded && result.length > 0 && (
              <SearchResults>
                {result.map((item) => (
                  <SearchResultItem
                    key={item.id}
                    onMouseDown={() => handleSelectProduct(item)}
                    aria-label={`View ${item.title}`}
                  >
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="info">
                      <div className="title">{item.title}</div>
                      <div className="category">{item.category}</div>
                    </div>
                    <div className="price">₹{item.price}</div>
                  </SearchResultItem>
                ))}
              </SearchResults>
            )}
          </SearchContainer>
        </DesktopMenu>

        <RightSection>
          <ThemeToggle 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </ThemeToggle>

          <CartButton onClick={() => navigate("/cart")} aria-label="View shopping cart">
            <ShoppingBag size={20} />
            {totalCartItems > 0 && (
              <CartBadge aria-label={`${totalCartItems} items in cart`}>{totalCartItems}</CartBadge>
            )}
          </CartButton>
        </RightSection>
      </Container>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileSearchContainer>
          <SearchInputWrapper>
            <SearchIconWrapper>
              <Search size={18} />
            </SearchIconWrapper>
            <SearchInput
              type="text"
              placeholder="Search products..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setIsExpanded(true);
              }}
              onFocus={() => setIsExpanded(true)}
              aria-label="Search products"
            />
          </SearchInputWrapper>

          {isExpanded && result.length > 0 && (
            <SearchResults style={{ position: 'static', width: '100%', marginTop: '8px' }}>
              {result.map((item) => (
                <SearchResultItem
                  key={item.id}
                  onClick={() => {
                    handleSelectProduct(item);
                    setIsMobileMenuOpen(false);
                  }}
                  aria-label={`View ${item.title}`}
                >
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="info">
                    <div className="title">{item.title}</div>
                    <div className="category">{item.category}</div>
                  </div>
                  <div className="price">₹{item.price}</div>
                </SearchResultItem>
              ))}
            </SearchResults>
          )}
        </MobileSearchContainer>

        <MenuItem
          onClick={() => {
            closeMobileMenu();
            const element = document.getElementById("products-category");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Explore Catalog
        </MenuItem>

        <MenuItem
          onClick={() => {
            closeMobileMenu();
            const element = document.getElementById("customer-reviews");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Customer Reviews
        </MenuItem>

        <MenuItem
          onClick={() => {
            closeMobileMenu();
            const element = document.getElementById("newsletter");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          VIP Club
        </MenuItem>
      </MobileMenu>
    </Nav>
  );
}

export default Header;