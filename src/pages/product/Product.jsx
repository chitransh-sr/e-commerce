import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useToast } from "../../contexts/ToastContext";
import { 
  Star, 
  ShoppingBag, 
  Zap, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  ArrowLeft,
  Minus,
  Plus,
  CheckCircle2
} from "lucide-react";
import {
  Container,
  BreadcrumbRow,
  ProductDetailGrid,
  ImageGalleryWrapper,
  MainImageCard,
  ProductInfoWrapper,
  CategoryPill,
  Title,
  RatingRow,
  PriceRow,
  Description,
  ActionsSection,
  QuantityControlRow,
  Stepper,
  ButtonGroup,
  AddToCartBtn,
  BuyNowBtn,
  FeatureChips
} from "./ProductStyles";

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useLocalStorage("cart", []);
  const { showToast } = useToast();

  if (!product) {
    return (
      <Container>
        <div style={{ textAlign: "center", padding: "5rem 1rem" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>No Product Selected</h2>
          <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>
            Please select a product from our catalog to view details.
          </p>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 24px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Explore Catalog
          </button>
        </div>
      </Container>
    );
  }

  const handleAddToCart = () => {
    const qty = Number(quantity) || 1;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });

    showToast({
      heading: "Added to Bag",
      message: `${qty}x ${product.title} added to your cart!`,
      image: product.thumbnail,
      showCartButton: true,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  const originalPrice = Math.round(product.price * 1.25);

  return (
    <Container>
      <BreadcrumbRow>
        <span className="link" onClick={() => navigate("/")}>
          <ArrowLeft size={16} /> Home
        </span>
        <span className="separator">/</span>
        <span>{product.category || "Products"}</span>
        <span className="separator">/</span>
        <span className="current">{product.title}</span>
      </BreadcrumbRow>

      <ProductDetailGrid>
        <ImageGalleryWrapper>
          <MainImageCard>
            <img src={product.thumbnail} alt={product.title} />
          </MainImageCard>
        </ImageGalleryWrapper>

        <ProductInfoWrapper>
          <CategoryPill>{product.category || "Premium Choice"}</CategoryPill>
          <Title>{product.title}</Title>

          <RatingRow>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < Math.floor(product.rating || 5) ? "#f59e0b" : "none"}
                />
              ))}
            </div>
            <span className="score">{product.rating} / 5.0</span>
            <span className="in-stock">
              <CheckCircle2 size={14} />
              In Stock & Ready to Ship
            </span>
          </RatingRow>

          <PriceRow>
            <span className="price">${product.price}</span>
            <span className="original-price">${originalPrice}</span>
            <span className="save-badge">Save 20%</span>
          </PriceRow>

          <Description>{product.description}</Description>

          <ActionsSection>
            <QuantityControlRow>
              <span className="label">Quantity:</span>
              <Stepper>
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="count">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </Stepper>
            </QuantityControlRow>

            <ButtonGroup>
              <AddToCartBtn onClick={handleAddToCart}>
                <ShoppingBag size={20} />
                Add to Cart
              </AddToCartBtn>
              <BuyNowBtn onClick={handleBuyNow}>
                <Zap size={20} />
                Buy Now
              </BuyNowBtn>
            </ButtonGroup>
          </ActionsSection>

          <FeatureChips>
            <div className="chip">
              <Truck size={18} className="text-blue-500" />
              <span>Express Delivery</span>
            </div>
            <div className="chip">
              <ShieldCheck size={18} className="text-emerald-500" />
              <span>2-Year Warranty</span>
            </div>
            <div className="chip">
              <RotateCcw size={18} className="text-purple-500" />
              <span>30-Day Returns</span>
            </div>
          </FeatureChips>
        </ProductInfoWrapper>
      </ProductDetailGrid>
    </Container>
  );
};

export default ProductDetails;
