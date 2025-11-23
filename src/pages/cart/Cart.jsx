import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ShoppingBag, Sun, Moon } from "lucide-react";
import { useTheme } from '../../contexts/ThemeContext';
import {
  FullWidthWrapper,
  Container,
  BackButton,
  CartItem,
  CartImage,
  CartDetails,
  CartTitle,
  CartPrice,
  QuantityControls,
  QuantityButton,
  QuantityInput,
  RemoveButton,
  TotalSection,
  TotalPrice,
  CheckoutButton,
  EmptyCart,
  EmptyCartIcon,
  CartHeader,
  CartSummary,
  PriceRow,
  SubtotalText,
  TaxText,
  Divider,
  ThemeToggle
} from "./CartStyles";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useLocalStorage("cart", []);
  const { isDarkMode, toggleTheme } = useTheme();

  const updateQuantity = (productId, newQuantity) => {
    const numericQuantity = Math.max(1, Number(newQuantity) || 1);
    
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { 
          ...item, 
          quantity: numericQuantity 
        } : item
      )
    );
  };

  const increaseQuantity = (productId, currentQuantity) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const decreaseQuantity = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
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

  const getSubtotal = () => {
    return getTotalPrice();
  };

  const getTax = () => {
    return getSubtotal() * 0.08; // 8% tax
  };

  const getTotalWithTax = () => {
    return getSubtotal() + getTax() + 15; // changed the fixed shipping cost to $15
  };



  

  return (
    <FullWidthWrapper>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </ThemeToggle>
      <Container>
        <BackButton onClick={() => navigate("/")}>
          <ArrowLeft size={20} />
          Continue Shopping
        </BackButton>
        
        <CartHeader>
          <ShoppingCart size={28} />
          <h1>Shopping Cart</h1>
          <span className="item-count">{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
        </CartHeader>
        
        {cart.length === 0 ? (
          <EmptyCart>
            <EmptyCartIcon>
              <ShoppingBag size={64} />
            </EmptyCartIcon>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <button onClick={() => navigate("/")} className="shop-now-btn">
              Start Shopping
            </button>
          </EmptyCart>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map((item) => (
                <CartItem key={item.id}>
                  <div className="item-content">
                    <CartImage 
                      src={item.thumbnail} 
                      alt={item.title} 
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f3f4f6"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="%239ca3af" font-family="sans-serif" font-size="14"%3ENo Image%3C/text%3E%3C/svg%3E'; 
                      }}
                    />
                    <CartDetails>
                      <CartTitle>{item.title || 'Unknown Product'}</CartTitle>
                      <CartPrice>${(item.price || 0).toFixed(2)}</CartPrice>
                      <span className="item-subtotal">
                        Subtotal: ${(item.price * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </CartDetails>
                  </div>
                  
                  <div className="item-actions">
                    <QuantityControls>
                      <QuantityButton 
                        onClick={() => decreaseQuantity(item.id, item.quantity || 1)}
                        disabled={(item.quantity || 1) <= 1}
                      >
                        <Minus size={16} />
                      </QuantityButton>
                      <QuantityInput
                        type="number"
                        min="1"
                        value={item.quantity || 1}
                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                      />
                      <QuantityButton 
                        onClick={() => increaseQuantity(item.id, item.quantity || 1)}
                      >
                        <Plus size={16} />
                      </QuantityButton>
                    </QuantityControls>
                    
                    <RemoveButton onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={16} />
                      Remove
                    </RemoveButton>
                  </div>
                </CartItem>
              ))}
            </div>
            
            <CartSummary>
              <h3>Order Summary</h3>
              <PriceRow>
                <SubtotalText>Subtotal ({cart.length} items)</SubtotalText>
                <span>${getSubtotal().toFixed(2)}</span>
              </PriceRow>
              <PriceRow>
                <TaxText>Estimated Tax</TaxText>
                <span>${getTax().toFixed(2)}</span>
              </PriceRow>
              <Divider />
              <TotalPrice>
                <span>Total</span>
                <span>${getTotalWithTax().toFixed(2)}</span>
              </TotalPrice>
              <CheckoutButton onClick={() => navigate("/checkout")}>
                Proceed to Checkout
              </CheckoutButton>
              <button className="continue-shopping-btn" onClick={() => navigate("/")}>
                Continue Shopping
              </button>
            </CartSummary>
          </div>
        )}
      </Container>
    </FullWidthWrapper>
  );
};

export default Cart;