import React from "react";
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
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>Go Back</BackButton>
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <CartImage src={item.thumbnail} alt={item.title} />
                <CartDetails>
                  <CartTitle>{item.title}</CartTitle>
                  <CartPrice>${item.price}</CartPrice>
                </CartDetails>
              </div>
              <div style={{ display: "flex", alignItems: "center",gap:'10px',width:'100%', justifyContent: 'end' }}>
                <QuantityInput
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value, 10))
                  }
                />
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  Remove
                </RemoveButton>
              </div>
            </CartItem>
          ))}
          <TotalPrice>Total: ${getTotalPrice().toFixed(2)}</TotalPrice>
        </div>
      )}
    </Container>
  );
};

export default Cart;
