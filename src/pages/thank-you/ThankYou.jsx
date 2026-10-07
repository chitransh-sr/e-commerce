import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { 
  Check, 
  Package, 
  Home, 
  Sparkles, 
  Truck, 
  Clock, 
  ShieldCheck,
  ShoppingBag
} from "lucide-react";
import { fireConfetti } from "../../utils/confetti";
import {
  FullWidthWrapper,
  Container,
  SuccessCard,
  SuccessIcon,
  OrderTitle,
  OrderMessage,
  OrderNumber,
  TimelineTracker,
  OrderDetails,
  ActionButtons,
  PrimaryButton,
  SecondaryButton
} from "./ThankYouStyles";

const ThankYou = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useLocalStorage("cart", []);
  const [orderInfo, setOrderInfo] = useState(null);

  useEffect(() => {
    // Fire confetti celebration burst!
    fireConfetti({ count: 120, y: 0.35, burstUp: true });

    // Read customer data and compute order summary
    const savedCustomer = JSON.parse(localStorage.getItem('checkoutCustomer') || '{}');
    const orderNum = 'SN-' + Math.floor(100000 + Math.random() * 900000);

    const subtotal = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
    const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 15;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    setOrderInfo({
      orderNumber: orderNum,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      customerName: savedCustomer.firstName ? `${savedCustomer.firstName} ${savedCustomer.lastName}` : 'Valued Customer',
      email: savedCustomer.email || 'customer@example.com',
      shippingAddress: savedCustomer.address ? `${savedCustomer.address}, ${savedCustomer.city}, ${savedCustomer.state} ${savedCustomer.zipCode}` : '123 Market St, California 90210',
      total: total > 0 ? total.toFixed(2) : '149.00',
      itemCount: cart.length || 1,
    });

    // Clear cart
    setCart([]);
  }, []);

  return (
    <FullWidthWrapper>
      <Container>
        <SuccessCard>
          <SuccessIcon>
            <Check size={48} strokeWidth={3} />
          </SuccessIcon>

          <OrderTitle>Thank You for Your Order!</OrderTitle>

          <OrderMessage>
            Your order has been confirmed and our fulfillment center is carefully packaging your items. We've sent your receipt and tracking details to <strong>{orderInfo?.email}</strong>.
          </OrderMessage>

          <OrderNumber>
            <span className="order-label">Order Confirmation:</span>
            <span className="order-value">{orderInfo?.orderNumber || 'SN-789421'}</span>
          </OrderNumber>

          {/* Timeline tracker */}
          <TimelineTracker>
            <div className="step completed">
              <div className="circle">
                <Check size={18} />
              </div>
              <span className="label">Confirmed</span>
            </div>

            <div className="step active">
              <div className="circle">
                <Package size={18} />
              </div>
              <span className="label">Packaging</span>
            </div>

            <div className="step">
              <div className="circle">
                <Truck size={18} />
              </div>
              <span className="label">In Transit</span>
            </div>

            <div className="step">
              <div className="circle">
                <Clock size={18} />
              </div>
              <span className="label">Delivered</span>
            </div>
          </TimelineTracker>

          {/* Order Details */}
          <OrderDetails>
            <h3>
              <Package size={20} className="text-blue-500" />
              Receipt Details
            </h3>

            <div className="detail-row">
              <span className="label">Customer Name</span>
              <span className="value">{orderInfo?.customerName}</span>
            </div>

            <div className="detail-row">
              <span className="label">Order Date</span>
              <span className="value">{orderInfo?.date}</span>
            </div>

            <div className="detail-row">
              <span className="label">Delivery Destination</span>
              <span className="value">{orderInfo?.shippingAddress}</span>
            </div>

            <div className="detail-row">
              <span className="label">Estimated Delivery</span>
              <span className="value" style={{ color: '#10b981' }}>2-3 Business Days (Express)</span>
            </div>

            <div className="detail-row">
              <span className="label">Total Paid</span>
              <span className="value" style={{ fontSize: '1.15rem', color: '#2563eb' }}>
                ${orderInfo?.total}
              </span>
            </div>
          </OrderDetails>

          <ActionButtons>
            <PrimaryButton onClick={() => navigate("/")}>
              <Sparkles size={18} />
              Continue Shopping
            </PrimaryButton>
            <SecondaryButton onClick={() => window.print()}>
              Print Receipt
            </SecondaryButton>
          </ActionButtons>
        </SuccessCard>
      </Container>
    </FullWidthWrapper>
  );
};

export default ThankYou;
