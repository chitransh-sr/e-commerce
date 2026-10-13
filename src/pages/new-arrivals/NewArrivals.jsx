import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useToast } from "../../contexts/ToastContext";
import { Star, ShoppingBag, Heart, Check } from "lucide-react";
import { spacing } from '../../design-system/tokens';
import {
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
  SoldOutBadge,
  SkeletonCard,
} from '../../components/product-card/product-cardStyles';

const PageWrap = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${spacing['5xl']} ${spacing['5xl']};

  @media (max-width: 768px) {
    padding: ${spacing['4xl']} ${spacing.md};
  }
`;

const Hero = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.sm};
  margin-bottom: ${spacing['4xl']};
`;

const Eyebrow = styled.div`
  color: #7A1E2B;
  border: 1px solid #7A1E2B;
  padding: 6px 18px;
  border-radius: 40px;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;

  [data-theme='dark'] & {
    color: #C9A24C;
    border-color: #C9A24C;
  }
`;

const Title = styled.h1`
  font-family: "Instrument Serif", Georgia, serif;
  font-size: clamp(3rem, 7.2vw, 4.5rem);
  font-weight: 400;
  color: #7A1E2B;
  line-height: 1.1;

  [data-theme='dark'] & {
    color: #E8CFC0;
  }
`;

const Sub = styled.p`
  font-family: "Instrument Sans", sans-serif;
  font-size: 1rem;
  color: #5C554B;
  max-width: 560px;

  [data-theme='dark'] & {
    color: #CBBFA9;
  }
`;

const getDiscountPercent = (product) => {
  const originalPrice = Math.round(product.price * 1.25);
  return Math.round((1 - product.price / originalPrice) * 100);
};

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [, setCart] = useLocalStorage("cart", []);
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  const [addedIds, setAddedIds] = useState({});
  const { showToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNew = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          'https://dummyjson.com/products?sortBy=id&order=desc&limit=24&select=id,title,price,thumbnail,category,rating,stock'
        );
        setProducts(res.data?.products || []);
      } catch (err) {
        console.error('Error fetching new arrivals:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchNew();
  }, []);

  const handleCardClick = (product) => {
    navigate("/product", { state: { product } });
  };

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
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
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const handleToggleWishlist = (e, product) => {
    e.stopPropagation();
    const isWishlisted = wishlist.includes(product.id);
    if (isWishlisted) {
      setWishlist(wishlist.filter((id) => id !== product.id));
      showToast({ heading: "Removed from Wishlist", message: `${product.title} removed from saved items.` });
    } else {
      setWishlist([...wishlist, product.id]);
      showToast({ heading: "Saved to Wishlist", message: `${product.title} saved to your favorites!` });
    }
  };

  return (
    <PageWrap>
      <Hero>
        <Eyebrow>Just Landed</Eyebrow>
        <Title>New Arrivals</Title>
        <Sub>Fresh finds, latest drops — shop what's new at ShopNow.</Sub>
      </Hero>

      <ProductGrid>
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={`skeleton-${i}`} />)
        ) : (
          products.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            const isAdded = !!addedIds[product.id];
            const originalPrice = Math.round(product.price * 1.25);
            const discountPercent = getDiscountPercent(product);
            const isOnSale = discountPercent > 0;

            return (
              <ProductCard key={product.id} onClick={() => handleCardClick(product)}>
                <ImageWrapper>
                  <TopBadges>
                    {isOnSale && <DiscountBadge>-{discountPercent}% OFF</DiscountBadge>}
                    <WishlistButton
                      $isWishlisted={isWishlisted}
                      onClick={(e) => handleToggleWishlist(e, product)}
                      aria-label={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
                    >
                      <Heart size={18} fill={isWishlisted ? "#7A1E2B" : "none"} />
                    </WishlistButton>
                  </TopBadges>
                  <ProductImage src={product.thumbnail} alt={product.title} loading="lazy" />
                  {product.stock === 0 && <SoldOutBadge>Sold Out</SoldOutBadge>}
                </ImageWrapper>

                <ProductInfo>
                  <CategoryTag>{product.category || "General"}</CategoryTag>
                  <ProductTitle title={product.title}>{product.title}</ProductTitle>
                  <ProductRating>
                    <Star size={16} className="star-icon" />
                    <span className="rating-score">{product.rating}</span>
                    <span className="rating-count">/ 5.0</span>
                  </ProductRating>
                  <PriceAndCartSection>
                    <PriceBox>
                      <span className="current-price">₹{product.price}</span>
                      {isOnSale && <span className="old-price">₹{originalPrice}</span>}
                    </PriceBox>
                    <QuickAddButton onClick={(e) => handleQuickAdd(e, product)} aria-label="Add to cart" title="Add to cart">
                      {isAdded ? <Check size={20} /> : <ShoppingBag size={20} />}
                    </QuickAddButton>
                  </PriceAndCartSection>
                </ProductInfo>
              </ProductCard>
            );
          })
        )}
      </ProductGrid>
    </PageWrap>
  );
};

export default NewArrivals;
