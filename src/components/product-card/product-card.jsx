import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useToast } from "../../contexts/ToastContext";
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  Check
} from "lucide-react";
import styled, { keyframes } from "styled-components";
import { colors, spacing, borderRadius, shadows, transitions } from '../../design-system/tokens';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// Styled Components
export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: ${spacing['5xl']} ${spacing['5xl']};
  position: relative;

  @media (max-width: 768px) {
    padding: ${spacing['4xl']} ${spacing.md};
  }
`;

export const GridHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing['4xl']};
  padding: 0 ${spacing.sm};

  .count {
    font-size: 0.95rem;
    font-weight: 600;
    color: ${colors.text.secondary};
    
    span {
      color: ${colors.primary[600]};
      font-weight: 700;
    }
  }

  [data-theme='dark'] & {
    .count {
      color: ${colors.text.secondaryDark};
      span {
        color: ${colors.primary[400]};
      }
    }
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${spacing['4xl']} ${spacing['3xl']};
  animation: ${fadeIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.xl};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${colors.border.light};
  border-radius: ${borderRadius['2xl']};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: ${transitions.cardHover};
  cursor: pointer;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 25px 55px -12px rgba(37, 99, 235, 0.2),
      0 0 0 1px rgba(37, 99, 235, 0.3);
    border-color: rgba(59, 130, 246, 0.3);
  }

  [data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.85);
    border-color: ${colors.border.dark};
    box-shadow: ${shadows.md};

    &:hover {
      box-shadow: 
        0 25px 55px -12px rgba(0, 0, 0, 0.6),
        0 0 30px -5px rgba(99, 102, 241, 0.3);
      border-color: rgba(99, 102, 241, 0.4);
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: ${spacing.xl};

  [data-theme='dark'] & {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${ProductCard}:hover & {
    transform: scale(1.08);
  }
`;

export const TopBadges = styled.div`
  position: absolute;
  top: ${spacing.md};
  left: ${spacing.md};
  right: ${spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  z-index: 2;
`;

export const DiscountBadge = styled.div`
  background: ${colors.gradients.warm};
  color: white;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

export const TrendingBadge = styled.div`
  background: rgba(16, 185, 129, 0.9);
  color: white;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 0.7rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
`;

export const WishlistButton = styled.button`
  pointer-events: auto;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid ${colors.border.light};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  color: ${({ $isWishlisted }) => ($isWishlisted ? '#ef4444' : '#64748b')};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: scale(1.15);
    color: #ef4444;
    background: white;
    border-color: #ef4444;
  }

  &:active {
    transform: scale(0.9);
  }

  [data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.85);
    border-color: ${colors.border.dark};

    &:hover {
      background: rgba(45, 55, 72, 0.9);
    }
  }
`;

export const ProductInfo = styled.div`
  padding: ${spacing.xl};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CategoryTag = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${colors.primary[600]};
  letter-spacing: 0.5px;
  margin-bottom: ${spacing.sm};

  [data-theme='dark'] & {
    color: ${colors.primary[400]};
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${colors.text.primary};
  line-height: 1.35;
  margin-bottom: ${spacing.md};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease;
  display: block;

  ${ProductCard}:hover & {
    color: ${colors.primary[600]};
  }

  [data-theme='dark'] & {
    color: ${colors.text.primaryDark};

    ${ProductCard}:hover & {
      color: ${colors.primary[300]};
    }
  }
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: ${spacing.md};
  font-size: 0.9rem;
  font-weight: 600;
  color: ${colors.text.secondary};

  .star-icon {
    color: #f59e0b;
    fill: #f59e0b;
  }

  .rating-score {
    color: ${colors.text.primary};
    font-weight: 700;
  }

  .rating-count {
    color: ${colors.text.disabled};
    font-size: 0.75rem;
  }

  [data-theme='dark'] & {
    color: ${colors.text.secondaryDark};

    .rating-score {
      color: ${colors.text.primaryDark};
    }
  }
`;

export const PriceAndCartSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: ${spacing.md};
  border-top: 1px solid ${colors.border.light};

  [data-theme='dark'] & {
    border-color: ${colors.border.dark};
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  .current-price {
    font-size: 1.4rem;
    font-weight: 800;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    [data-theme='dark'] & {
      background: linear-gradient(135deg, #60a5fa, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .old-price {
    font-size: 0.8rem;
    color: ${colors.text.disabled};
    text-decoration: line-through;
    font-weight: 500;
  }
`;

export const QuickAddButton = styled.button`
  background: ${colors.gradients.primary};
  color: white;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: ${borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${shadows.primary};
  transition: ${transitions.emphasis};

  &:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 12px 24px rgba(37, 99, 235, 0.45);
  }

  &:active {
    transform: scale(0.92);
  }

  [data-theme='dark'] & {
    background: ${colors.gradients.violet};
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);

    &:hover {
      box-shadow: 0 12px 24px rgba(99, 102, 241, 0.5);
    }
  }
`;

export const SoldOutBadge = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius['2xl']};
  color: white;
  font-size: 1.1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
`;

/* Skeleton Placeholder */
export const SkeletonCard = styled.div`
  background: rgba(226, 232, 240, 0.4);
  border-radius: ${borderRadius['2xl']};
  height: 430px;
  overflow: hidden;
  position: relative;
  border: 1px solid ${colors.border.light};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite;
  }

  [data-theme='dark'] & {
    background: rgba(45, 55, 72, 0.5);
    border-color: ${colors.border.dark};

    &::before {
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
    }
  }
`;

/* Pagination */
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing['3xl']};
  margin-top: ${spacing['7xl']};
`;

export const PaginationButton = styled.button`
  padding: ${spacing.md} ${spacing['4xl']};
  font-size: 0.95rem;
  font-weight: 700;
  color: white;
  background: ${colors.gradients.primary};
  border: none;
  border-radius: ${borderRadius.lg};
  cursor: pointer;
  box-shadow: ${shadows.primary};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  transition: ${transitions.emphasis};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.5);
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    background: ${colors.gray[400]};
  }

  [data-theme='dark'] & {
    background: ${colors.gradients.violet};
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

    &:hover:not(:disabled) {
      box-shadow: 0 12px 30px rgba(99, 102, 241, 0.5);
    }

    &:disabled {
      background: ${colors.gray[600]};
    }
  }
`;

export const PaginationText = styled.span`
  font-size: 1rem;
  color: ${colors.text.secondary};
  font-weight: 600;
  padding: ${spacing.sm} ${spacing['2xl']};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: ${borderRadius.lg};
  border: 1px solid ${colors.border.light};
  box-shadow: ${shadows.xs};

  span {
    color: ${colors.primary[600]};
    font-weight: 700;
  }

  [data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.8);
    border-color: ${colors.border.dark};
    color: ${colors.text.secondaryDark};

    span {
      color: ${colors.primary[300]};
    }
  }
`;

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [totalProducts, setTotalProducts] = useState(0);
  const [, setCart] = useLocalStorage("cart", []);
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  const [addedIds, setAddedIds] = useState({});
  const { showToast } = useToast();
  const navigate = useNavigate();

  // Reset to page 1 whenever category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url, skip;
        if (selectedCategory) {
          url = `https://dummyjson.com/products/category/${selectedCategory}`;
          skip = 0;
        } else {
          skip = (currentPage - 1) * itemsPerPage;
          url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`;
        }

        const response = await axios.get(url);

        if (selectedCategory) {
          const startIndex = (currentPage - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          setProducts(response.data.products.slice(startIndex, endIndex));
          setTotalProducts(response.data.products.length);
        } else {
          setProducts(response.data.products);
          setTotalProducts(response.data.total);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handleCardClick = (product) => {
    navigate("/product", { state: { product } });
  };

  const handleQuickAdd = async (e, product) => {
    e.stopPropagation();
    
    // Prevent double-click
    if (addedIds[product.id]) return;
    
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    showToast({
      heading: "Added to Bag",
      message: `${product.title} has been added.`,
      image: product.thumbnail,
      showCartButton: true,
    });

    // Reset after animation
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const handleToggleWishlist = async (e, product) => {
    e.stopPropagation();
    const isWishlisted = wishlist.includes(product.id);
    
    if (isWishlisted) {
      setWishlist(wishlist.filter((id) => id !== product.id));
      showToast({
        heading: "Removed from Wishlist",
        message: `${product.title} removed from saved items.`,
      });
    } else {
      setWishlist([...wishlist, product.id]);
      showToast({
        heading: "Saved to Wishlist",
        message: `${product.title} saved to your favorites!`,
      });
    }
  };

  // Calculate discount percentage
  const getDiscountPercent = (product) => {
    const originalPrice = Math.round(product.price * 1.25);
    return Math.round((1 - product.price / originalPrice) * 100);
  };

  return (
    <Container>
      <GridHeader>
        <div className="count">
          Showing <span>{products.length}</span> of {totalProducts} items
        </div>
      </GridHeader>

      <ProductGrid>
        {loading ? (
          Array.from({ length: itemsPerPage }).map((_, i) => <SkeletonCard key={`skeleton-${i}`} />)
        ) : (
          products.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            const isAdded = !!addedIds[product.id];
            const originalPrice = Math.round(product.price * 1.25);
            const discountPercent = getDiscountPercent(product);
            const isOnSale = discountPercent > 0;

            return (
              <ProductCard
                key={product.id}
                onClick={() => handleCardClick(product)}
              >
                <ImageWrapper>
                  <TopBadges>
                    {isOnSale && (
                      <DiscountBadge>
                        -{discountPercent}% OFF
                      </DiscountBadge>
                    )}
                    <WishlistButton
                      $isWishlisted={isWishlisted}
                      onClick={(e) => handleToggleWishlist(e, product)}
                      aria-label={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
                    >
                      <Heart
                        size={18}
                        fill={isWishlisted ? "#ef4444" : "none"}
                      />
                    </WishlistButton>
                  </TopBadges>

                  <ProductImage
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                  />
                  
                  {product.stock === 0 && <SoldOutBadge>Sold Out</SoldOutBadge>}
                </ImageWrapper>

                <ProductInfo>
                  <CategoryTag>{product.category || "General"}</CategoryTag>
                  <ProductTitle title={product.title}>
                    {product.title}
                  </ProductTitle>

                  <ProductRating>
                    <Star size={16} className="star-icon" />
                    <span className="rating-score">{product.rating}</span>
                    <span className="rating-count">/ 5.0</span>
                  </ProductRating>

                  <PriceAndCartSection>
                    <PriceBox>
                      <span className="current-price">₹{product.price}</span>
                      {isOnSale && (
                        <span className="old-price">₹{originalPrice}</span>
                      )}
                    </PriceBox>

                    <QuickAddButton
                      onClick={(e) => handleQuickAdd(e, product)}
                      aria-label="Add to cart"
                      title="Add to cart"
                      $isAdded={isAdded}
                    >
                      {isAdded ? (
                        <Check size={20} />
                      ) : (
                        <ShoppingBag size={20} />
                      )}
                    </QuickAddButton>
                  </PriceAndCartSection>
                </ProductInfo>
              </ProductCard>
            );
          })
        )}
      </ProductGrid>

      {totalPages > 1 && (
        <PaginationContainer>
          <PaginationButton
            onClick={() => {
              setCurrentPage((prev) => Math.max(prev - 1, 1));
              window.scrollTo({ top: 400, behavior: "smooth" });
            }}
            disabled={currentPage === 1 || loading}
            aria-label="Previous page"
          >
            <ChevronLeft size={18} />
            Previous
          </PaginationButton>

          <PaginationText>
            Page <span>{currentPage}</span> of {totalPages}
          </PaginationText>

          <PaginationButton
            onClick={() => {
              setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              window.scrollTo({ top: 400, behavior: "smooth" });
            }}
            disabled={currentPage === totalPages || loading || totalProducts === 0}
            aria-label="Next page"
          >
            Next
            <ChevronRight size={18} />
          </PaginationButton>
        </PaginationContainer>
      )}
    </Container>
  );
};

Products.propTypes = {
  selectedCategory: PropTypes.string,
};

Products.defaultProps = {
  selectedCategory: null,
};

export default Products;