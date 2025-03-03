import React, { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import {
  Container,
  BackButton,
  CartItem,
  CartImage,
  CartDetails,
  CartTitle,
  CartPrice,
  QuantityInput,
  RemoveButton,
  TotalPrice,
} from "./CartStyles";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useLocalStorage("cart", []);

  const updateQuantity = (productId, quantity) => {
    const numericQuantity = Math.max(1, Number(quantity) || 1);
    
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { 
          ...item, 
          quantity: numericQuantity 
        } : item
      )
    );
  };

  useEffect(() => {
    setCart(prevCart => 
      prevCart.filter(item => 
        item.id && 
        item.title && 
        typeof item.price === 'number' &&
        item.quantity > 0
      )
    );
  }, [setCart]);

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => 
      total + (item.price * (item.quantity || 1)), 0);
  };

  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>Go Back</BackButton>
      <h1 style={{fontSize:'20px', marginBottom: '2rem'}}>My Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <CartImage 
                  src={item.thumbnail} 
                  alt={item.title} 
                  onError={(e) => {
                    e.target.src = 'fallback-image error'; 
                  }}
                />
                <CartDetails>
                  <CartTitle>{item.title || 'Unknown Product'}</CartTitle>
                  <CartPrice>${(item.price || 0).toFixed(2)}</CartPrice>
                </CartDetails>
              </div>
              <div style={{ 
                display: "flex", 
                alignItems: "center",
                gap: '10px',
                width: '100%', 
                justifyContent: 'end' 
              }}>
                <QuantityInput
                  type="number"
                  min="1"
                  value={item.quantity || 1}
                  onChange={(e) =>
                    updateQuantity(item.id, e.target.value)
                  }
                />
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  Remove
                </RemoveButton>
              </div>
            </CartItem>
          ))}
          <TotalPrice>
            Total: ${getTotalPrice().toFixed(2)}
          </TotalPrice>
        </div>
      )}
    </Container>
  );
};

export default Cart;