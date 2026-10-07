import React, { useState, useEffect, useRef } from "react";
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
  Sparkles, 
  Flame,
  ArrowRight
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
  SearchContainer,
  SearchInputWrapper,
  SearchInput,
  SearchIconWrapper,
  SearchResults,
  SearchResultItem,
  ThemeToggle,
  CartButton,
  CartBadge,
  MobileMenu,
  RightSection,
  MobileSearchContainer
} from "./HeaderStyles";

function Header() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [cart] = useLocalStorage("cart", []);
  const searchRef = useRef(null);

  const fetchData = async (query) => {
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
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData(input);
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [input]);

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

  const totalCartItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  const handleSelectProduct = (product) => {
    setIsExpanded(false);
    setInput("");
    navigate("/product", { state: { product } });
  };

  return (
    <Nav>
      <Container>
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
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
                <Search size={18} />
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
              />
            </SearchInputWrapper>

            {isExpanded && result.length > 0 && (
              <SearchResults>
                {result.map((item) => (
                  <SearchResultItem
                    key={item.id}
                    onMouseDown={() => handleSelectProduct(item)}
                  >
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="info">
                      <div className="title">{item.title}</div>
                      <div className="category">{item.category}</div>
                    </div>
                    <div className="price">${item.price}</div>
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
              <CartBadge>{totalCartItems}</CartBadge>
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
            />
          </SearchInputWrapper>

          {isExpanded && result.length > 0 && (
            <SearchResults>
              {result.map((item) => (
                <SearchResultItem
                  key={item.id}
                  onClick={() => {
                    handleSelectProduct(item);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="info">
                    <div className="title">{item.title}</div>
                    <div className="category">{item.category}</div>
                  </div>
                  <div className="price">${item.price}</div>
                </SearchResultItem>
              ))}
            </SearchResults>
          )}
        </MobileSearchContainer>

        <MenuItem
          onClick={() => {
            setIsMobileMenuOpen(false);
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
            setIsMobileMenuOpen(false);
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
            setIsMobileMenuOpen(false);
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