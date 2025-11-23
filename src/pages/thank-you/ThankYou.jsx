import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { Check, Package, Home, ShoppingBag, ArrowLeft, Sparkles, Truck } from "lucide-react";
import {
  FullWidthWrapper,
  Container,
  SuccessCard,
  SuccessIcon,
  OrderTitle,
  OrderMessage,
  OrderNumber,
  OrderDetails,
  ActionButtons,
  PrimaryButton,
  SecondaryButton
} from "./ThankYouStyles";

const ThankYou = () => {
  const navigate = useNavigate();
  const [orderNumber, setOrderNumber] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [cart] = useLocalStorage("cart", []);

  useEffect(() => {
    // Generate order number
    const generateOrderNumber = () => {
      const timestamp = Date.now().toString(36).toUpperCase();
      const random = Math.random().toString(36).substring(2, 8).toUpperCase();
      return `ORD-${timestamp}-${random}`;
    };

    // Generate order details
    const generateOrderDetails = () => {
      const subtotal = cart.reduce((total, item) => 
        total + (item.price * (item.quantity || 1)), 0);
      const tax = subtotal * 0.08;
      const shipping = subtotal > 100 ? 0 : 15;
      const total = subtotal + tax + shipping;

      return {
        orderNumber: generateOrderNumber(),
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        items: cart.length,
        subtotal,
        tax,
        shipping,
        total,
        paymentMethod: 'Credit Card', // This could be passed from checkout
        shippingAddress: '123 MG Road, Brigade Road, Bangalore, Karnataka 560001' // This could be passed from checkout
      };
    };

    const details = generateOrderDetails();
    setOrderDetails(details);
    setOrderNumber(details.orderNumber);

    // Clear cart after order is placed
    // Note: This is already handled in checkout, but we ensure it's cleared here too
    if (cart.length > 0) {
      // Store order details in localStorage for reference
      localStorage.setItem('lastOrder', JSON.stringify(details));
    }
  }, [cart]);

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleViewOrders = () => {
    // Navigate to orders page (you can implement this later)
    navigate('/');
  };

  const handleTrackOrder = () => {
    // Navigate to order tracking page (you can implement this later)
    navigate('/');
  };

  if (!orderDetails) {
    return (
      <FullWidthWrapper>
        <Container>
          <div>Loading order details...</div>
        </Container>
      </FullWidthWrapper>
    );
  }

  return (
    <FullWidthWrapper>
      <Container>
        <SuccessCard>
          <SuccessIcon>
            <Check size={64} />
          </SuccessIcon>
          
          <OrderTitle>Thank You for Your Order!</OrderTitle>
          
          <OrderMessage>
            Your order has been successfully placed and will be delivered soon. 
            We've sent a confirmation email with all the order details.
          </OrderMessage>
          
          <OrderNumber>
            <div className="order-label">Order Number</div>
            <div className="order-value">{orderNumber}</div>
          </OrderNumber>
          
          <OrderDetails>
            <h3>
              <Package size={20} />
              Order Summary
            </h3>
            <div className="detail-row">
              <span className="label">Order Date</span>
              <span className="value">{orderDetails.date}</span>
            </div>
            <div className="detail-row">
              <span className="label">Items</span>
              <span className="value">{orderDetails.items} items</span>
            </div>
            <div className="detail-row">
              <span className="label">Subtotal</span>
              <span className="value">${orderDetails.subtotal.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span className="label">Tax</span>
              <span className="value">${orderDetails.tax.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span className="label">Shipping</span>
              <span className="value">
                {orderDetails.shipping === 0 ? 'FREE' : `$${orderDetails.shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="detail-row">
              <span className="label">Total</span>
              <span className="value" style={{ color: '#059669', fontSize: '1.25rem' }}>
                ${orderDetails.total.toFixed(2)}
              </span>
            </div>
          </OrderDetails>
          
          <OrderDetails>
            <h3>
              <Truck size={20} />
              Shipping Information
            </h3>
            <div className="detail-row">
              <span className="label">Shipping Address</span>
              <span className="value">{orderDetails.shippingAddress}</span>
            </div>
            <div className="detail-row">
              <span className="label">Payment Method</span>
              <span className="value">{orderDetails.paymentMethod}</span>
            </div>
            <div className="detail-row">
              <span className="label">Estimated Delivery</span>
              <span className="value">3-5 Business Days</span>
            </div>
          </OrderDetails>
          
          <ActionButtons>
            <PrimaryButton onClick={handleContinueShopping}>
              <Sparkles size={20} />
              Continue Shopping
            </PrimaryButton>
            
            <SecondaryButton onClick={handleTrackOrder}>
              <Package size={20} />
              Track Order
            </SecondaryButton>
          </ActionButtons>
          
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <SecondaryButton onClick={() => navigate('/')} style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#64748b',
              fontSize: '0.875rem'
            }}>
              <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
              Back to Home
            </SecondaryButton>
          </div>
        </SuccessCard>
      </Container>
    </FullWidthWrapper>
  );
};

export default ThankYou;
