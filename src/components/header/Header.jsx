import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from '../../contexts/ThemeContext';
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  Nav,
  Container,
  MobileMenuButton,
  Logo,
  DesktopMenu,
  MenuItem,
  SearchContainer,
  SearchInput,
  SearchResults,
  ThemeToggle,
  CartButton,
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

  const fetchData = async (query) => {
    if (!query) return;
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );
      setResult(response?.data?.products);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData(input);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [input]);

  return (
    <Nav>
      <Container>
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </MobileMenuButton>
        <Logo
          width="260"
          height="100"
          viewBox="0 0 150 90"
          xmlns="http://www.w3.org/2000/svg"
          onClick={()=>(navigate('/'))}
        >
          <g
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 24h20l10 30h100l10-20H44" />
            <circle cx="64" cy="64" r="5" fill="#f97316" stroke="#f97316" />
            <circle cx="114" cy="64" r="5" fill="#f97316" />
          </g>
          <text
            x="44"
            y="50"
            fontFamily="Inter, sans-serif"
            fontSize="20"
            fontWeight="bold"
            fill="#1e40af"
          >
            Shop<tspan fill="#f97316">Now</tspan>
          </text>
        </Logo>
        <DesktopMenu>
          <MenuItem
            onClick={() => {
              const element = document.getElementById("products-category");
              if (element) {
                const offset = 100;
                const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: "smooth",
                });
              }
            }}
          >
            Products
          </MenuItem>
          <MenuItem
            onClick={() =>
              document
                .getElementById("newsletter")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Subscribe
          </MenuItem>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search products..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              onBlur={() => setIsExpanded(false)}
            />
            {isExpanded && result.length > 0 && (
              <SearchResults>
                {result.map((item) => (
                  <div key={item.id}>{item.title}</div>
                ))}
              </SearchResults>
            )}
          </SearchContainer>
        </DesktopMenu>

        <RightSection>
          <ThemeToggle 
            onClick={toggleTheme}
            data-theme={isDarkMode ? "dark" : "light"}
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </ThemeToggle>
          <CartButton onClick={() => navigate("/cart")}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span style={{
              position: 'absolute',
              top: '-6px',
              right: '-6px',
              background: cart.length > 0 ? '#ef4444' : '#94a3b8',
              color: 'white',
              borderRadius: '50%',
              width: '16px',
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8px',
              fontWeight: 'bold',
              minWidth: '16px',
              maxWidth: '16px',
              border: '2px solid white',
              zIndex: 9999,
              pointerEvents: 'none',
              lineHeight: 1,
              padding: '0',
              boxSizing: 'border-box',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {cart.reduce((total, item) => total + (item.quantity || 1), 0)}
            </span>
          </CartButton>
        </RightSection>
      </Container>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MenuItem
          onClick={() => {
            const element = document.getElementById("products-category");
            if (element) {
              const offset = 100;
              const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
              });
            }
          }}
        >
          Products
        </MenuItem>
        <MenuItem
          onClick={() => {
            const element = document.getElementById("newsletter");
            if (element) {
              const offset = 100;
              const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
              });
            }
          }}
        >
          Subscribe
        </MenuItem>
        <MenuItem
          onClick={() => {
            const element = document.getElementById("customer-reviews");
            if (element) {
              const offset = 100;
              const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
              });
            }
          }}
        >
          Reviews
        </MenuItem>
        <MobileSearchContainer>
          <SearchInput
            type="text"
            placeholder="Search products..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
          />
          {isExpanded && result.length > 0 && (
            <SearchResults>
              {result.map((item) => (
                <div key={item.id}>{item.title}</div>
              ))}
            </SearchResults>
          )}
        </MobileSearchContainer>
      </MobileMenu>
    </Nav>
  );
}

export default Header;