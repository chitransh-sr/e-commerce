import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
        >
          <g
            fill="none"
            stroke="#FF6600"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 24h20l10 30h100l10-20H44" />
            <circle cx="64" cy="64" r="5" fill="#FF6600" />
            <circle cx="114" cy="64" r="5" fill="#FF6600" />
          </g>
          <text
            x="44"
            y="50"
            fontFamily="Arial, sans-serif"
            fontSize="20"
            fontWeight="bold"
            fill="white"
          >
            Shop<tspan fill="#FF6600">Now</tspan>
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
          </CartButton>
        </RightSection>
      </Container>

      <MobileMenu isOpen={isMobileMenuOpen}>
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