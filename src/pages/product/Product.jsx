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
    navigate("/cart");
  };

  return (
    <Container>
      <ProductDetailContainer>
        <ImageWrapper>
          <ProductImage src={product.thumbnail} alt={product.title} />
        </ImageWrapper>
        <DetailsWrapper>
          <Title>{product.title}</Title>
          <Price>${product.price}</Price>
          <Rating>Rating: {product.rating}/5</Rating>
          <Description>{product.description}</Description>
          <div style={{ marginTop: "20px" }}>
            <label>
              Quantity:{" "}
              <QuantityInput
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </label>
            <AddToCartButton onClick={handleAddToCart}>
              Add to Cart
            </AddToCartButton>
          </div>
        </DetailsWrapper>
      </ProductDetailContainer>
    </Container>
  );
};

export default ProductDetails;
