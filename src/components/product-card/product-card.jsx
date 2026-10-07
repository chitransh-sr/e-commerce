import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useToast } from "../../contexts/ToastContext";
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Sparkles 
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
  WishlistButton,
  ProductInfo,
  CategoryTag,
  ProductTitle,
  ProductRating,
  PriceAndCartSection,
  PriceBox,
  QuickAddButton,
  SkeletonCard,
  PaginationContainer,
  PaginationButton,
  PaginationText,
} from "./product-cardStyles";

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [totalProducts, setTotalProducts] = useState(0);
  const [cart, setCart] = useLocalStorage("cart", []);
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

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
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

    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);

    showToast({
      heading: "Added to Bag",
      message: `${product.title} has been added.`,
      image: product.thumbnail,
      showCartButton: true,
    });
  };

  const handleToggleWishlist = (e, product) => {
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
        message: `❤️ ${product.title} saved to your favorites!`,
      });
    }
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
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
        ) : (
          products.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            const isAdded = !!addedIds[product.id];
            const originalPrice = Math.round(product.price * 1.25);

            return (
              <ProductCard
                key={product.id}
                onClick={() => handleCardClick(product)}
              >
                <ImageWrapper>
                  <TopBadges>
                    <DiscountBadge>-20% OFF</DiscountBadge>
                    <WishlistButton
                      $isWishlisted={isWishlisted}
                      onClick={(e) => handleToggleWishlist(e, product)}
                      aria-label="Save to wishlist"
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
                      <span className="current-price">${product.price}</span>
                      <span className="old-price">${originalPrice}</span>
                    </PriceBox>

                    <QuickAddButton
                      onClick={(e) => handleQuickAdd(e, product)}
                      aria-label="Add to cart"
                      title="Add to cart"
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
              setCurrentPage((prev) => prev - 1);
              window.scrollTo({ top: 400, behavior: "smooth" });
            }}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={18} />
            Previous
          </PaginationButton>

          <PaginationText>
            Page <span>{currentPage}</span> of {totalPages}
          </PaginationText>

          <PaginationButton
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
              window.scrollTo({ top: 400, behavior: "smooth" });
            }}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
            <ChevronRight size={18} />
          </PaginationButton>
        </PaginationContainer>
      )}
    </Container>
  );
};

export default Products;
