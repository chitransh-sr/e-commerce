import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage.jsx";
import { 
  Container,
  ProductDetailContainer,
  ImageWrapper,
  ProductImage,
  DetailsWrapper,
  Title,
  Price,
  Rating,
  Description,
  QuantitySection,
  QuantityLabel,
  QuantityInput,
  AddToCartButton
} from "./ProductStyles.js";

const ProductDetails = () => {
  const { state } = useLocation();
  const product = state?.product;
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useLocalStorage("cart", []);
  const navigate = useNavigate();

  if (!product) {
    return <Container>No product selected.</Container>;
  }

  const handleAddToCart = () => {
    const qty = Number(quantity) || 1;
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: qty }];
      }
    });
    
    // Show success feedback
    const button = document.querySelector('button');
    const originalText = button.innerHTML;
    button.innerHTML = '<span style={{ marginRight: "0.5rem" }}>✓</span>Added to Cart!';
    button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.background = '';
      navigate("/cart");
    }, 1000);
  };

  return (
    <Container>
      <ProductDetailContainer>
        <ImageWrapper>
          <ProductImage src={product.thumbnail} alt={product.title} />
        </ImageWrapper>
        <DetailsWrapper>
          <Title>{product.title}</Title>
          <Price>{product.price}</Price>
          <Rating>{product.rating}/5</Rating>
          <Description>{product.description}</Description>
          <QuantitySection>
            <QuantityLabel>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 7H4M20 12H4M20 17H4" />
              </svg>
              Quantity:
            </QuantityLabel>
            <QuantityInput
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Math.min(99, parseInt(e.target.value) || 1)))}
            />
            <AddToCartButton onClick={handleAddToCart}>
              <span style={{ marginRight: '0.5rem' }}>🛒</span>
              Add to Cart
            </AddToCartButton>
          </QuantitySection>
        </DetailsWrapper>
      </ProductDetailContainer>
    </Container>
  );
};

export default ProductDetails;
