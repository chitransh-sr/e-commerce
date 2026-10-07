import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../contexts/ToastContext";
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft, 
  Truck, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import {
  FullWidthWrapper,
  Container,
  BackButton,
  CartHeader,
  ShippingProgressBarCard,
  CartLayout,
  CartItemsList,
  CartItemCard,
  QuantityControls,
  RemoveButton,
  OrderSummaryCard,
  PromoCodeBox,
  PriceRow,
  Divider,
  TotalPrice,
  CheckoutButton,
  EmptyCart
} from "./CartStyles";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useLocalStorage("cart", []);
  const [promoInput, setPromoInput] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState("");
  const { showToast } = useToast();

  const updateQuantity = (productId, newQuantity) => {
    const numericQuantity = Math.max(1, Number(newQuantity) || 1);
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: numericQuantity } : item
      )
    );
  };

  const removeFromCart = (productId, title) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast({
      heading: "Item Removed",
      message: `${title || "Product"} was removed from your cart.`,
    });
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (code === "VIP15" || code === "NEXTGEN") {
      setDiscountPercent(15);
      setPromoApplied(code);
      showToast({
        heading: "Promo Code Applied!",
        message: `🎉 15% discount applied with code ${code}!`,
      });
      setPromoInput("");
    } else {
      showToast({
        heading: "Invalid Code",
        message: "Try code VIP15 or NEXTGEN for 15% off!",
      });
    }
  };

  const subtotal = getSubtotal();
  const discountAmount = (subtotal * discountPercent) / 100;
  const discountedSubtotal = subtotal - discountAmount;
  const isFreeShipping = discountedSubtotal >= 100;
  const shippingCost = isFreeShipping || cart.length === 0 ? 0 : 15;
  const tax = discountedSubtotal * 0.08;
  const finalTotal = discountedSubtotal + shippingCost + tax;

  const freeShippingProgress = Math.min(100, (discountedSubtotal / 100) * 100);
  const amountNeededForFreeShipping = Math.max(0, 100 - discountedSubtotal);

  return (
    <FullWidthWrapper>
      <Container>
        <BackButton onClick={() => navigate("/")}>
          <ArrowLeft size={18} />
          Continue Shopping
        </BackButton>

        <CartHeader>
          <ShoppingBag size={30} className="text-blue-500" />
          <h1>Your Shopping Bag</h1>
          <span className="item-count">
            {cart.length} {cart.length === 1 ? "item" : "items"}
          </span>
        </CartHeader>

        {cart.length === 0 ? (
          <EmptyCart>
            <div className="icon-wrapper">
              <ShoppingBag size={42} />
            </div>
            <h2>Your bag is currently empty</h2>
            <p>Explore our catalog of premium products and add your favorites!</p>
            <button className="shop-btn" onClick={() => navigate("/")}>
              Start Shopping
            </button>
          </EmptyCart>
        ) : (
          <>
            {/* Free Shipping Milestone */}
            <ShippingProgressBarCard>
              <div className="message">
                <Truck size={20} className="text-blue-500" />
                {isFreeShipping ? (
                  <span>
                    🎉 <strong>Congratulations!</strong> You unlocked FREE Express Shipping!
                  </span>
                ) : (
                  <span>
                    Add <strong>${amountNeededForFreeShipping.toFixed(2)}</strong> more to get <strong>FREE Express Shipping</strong>!
                  </span>
                )}
              </div>
              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </ShippingProgressBarCard>

            <CartLayout>
              <CartItemsList>
                {cart.map((item) => (
                  <CartItemCard key={item.id}>
                    <div className="item-left">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        onError={(e) => {
                          e.target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' fill='%23f1f5f9'%3E%3Crect width='80' height='80'/%3E%3C/svg%3E";
                        }}
                      />
                      <div className="details">
                        <h3 title={item.title}>{item.title}</h3>
                        <div className="price">${item.price}</div>
                      </div>
                    </div>

                    <div className="item-right">
                      <QuantityControls>
                        <button
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                          disabled={(item.quantity || 1) <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity || 1}</span>
                        <button
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </QuantityControls>

                      <RemoveButton
                        onClick={() => removeFromCart(item.id, item.title)}
                        aria-label="Remove item"
                        title="Remove item"
                      >
                        <Trash2 size={18} />
                      </RemoveButton>
                    </div>
                  </CartItemCard>
                ))}
              </CartItemsList>

              <OrderSummaryCard>
                <h3>Order Summary</h3>

                <PromoCodeBox>
                  <input
                    type="text"
                    placeholder="Promo code (VIP15)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                  />
                  <button onClick={handleApplyPromo}>Apply</button>
                </PromoCodeBox>

                <PriceRow>
                  <span>Subtotal</span>
                  <span className="value">${subtotal.toFixed(2)}</span>
                </PriceRow>

                {discountPercent > 0 && (
                  <PriceRow>
                    <span className="discount-text">
                      Discount ({promoApplied} -15%)
                    </span>
                    <span className="discount-text">
                      -${discountAmount.toFixed(2)}
                    </span>
                  </PriceRow>
                )}

                <PriceRow>
                  <span>Estimated Shipping</span>
                  <span className="value">
                    {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
                  </span>
                </PriceRow>

                <PriceRow>
                  <span>Estimated Tax (8%)</span>
                  <span className="value">${tax.toFixed(2)}</span>
                </PriceRow>

                <Divider />

                <TotalPrice>
                  <span>Total</span>
                  <span className="total-amount">${finalTotal.toFixed(2)}</span>
                </TotalPrice>

                <CheckoutButton onClick={() => navigate("/checkout")}>
                  Proceed to Checkout
                  <ArrowRight size={18} />
                </CheckoutButton>
              </OrderSummaryCard>
            </CartLayout>
          </>
        )}
      </Container>
    </FullWidthWrapper>
  );
};

export default Cart;