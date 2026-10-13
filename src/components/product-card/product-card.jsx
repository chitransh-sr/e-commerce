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

import {
  Container,
  GridHeader,
  ProductGrid,
  ProductCard,
  ImageWrapper,
  ProductImage,
  TopBadges,
  DiscountBadge,
  TrendingBadge,
  WishlistButton,
  ProductInfo,
  CategoryTag,
  ProductTitle,
  ProductRating,
  PriceAndCartSection,
  PriceBox,
  QuickAddButton,
  SoldOutBadge,
  SkeletonCard,
  PaginationContainer,
  PaginationButton,
  PaginationText,
} from './product-cardStyles';

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
                        fill={isWishlisted ? "#7A1E2B" : "none"}
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