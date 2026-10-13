import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import {
  Check,
  Package,
  Sparkles,
  Truck,
  Clock,
  Download
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
  SecondaryButton,
  OrderSummaryMini,
} from "./ThankYouStyles";

const ThankYou = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useLocalStorage("cart", []);
  const [orderInfo, setOrderInfo] = useState(null);

  useEffect(() => {
    // Fire confetti celebration burst!
    fireConfetti({ count: 150, y: 0.35, burstUp: true });

    // Read customer data and compute order summary
    const savedCustomer = JSON.parse(localStorage.getItem('checkoutCustomer') || '{}');
    const orderNum = 'SN-' + Math.floor(100000 + Math.random() * 900000);

    const subtotal = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
    const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 15;
    const tax = subtotal * 0.18;
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

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <FullWidthWrapper>
      <Container>
        <SuccessCard>
          <SuccessIcon>
            <Check size={52} strokeWidth={3} />
          </SuccessIcon>

          <OrderTitle>Thank You for Your Order!</OrderTitle>

          <OrderMessage>
            Your order has been confirmed and our fulfillment center is carefully packaging your items. 
            We&apos;ve sent your receipt and tracking details to <strong>{orderInfo?.email}</strong>.
          </OrderMessage>

          <OrderNumber>
            <span className="order-label">Order Confirmation:</span>
            <span className="order-value">{orderInfo?.orderNumber || 'SN-789421'}</span>
          </OrderNumber>

          {/* Order Summary Mini */}
          <OrderSummaryMini>
            <div className="summary-item">
              <span className="label">Order Date</span>
              <span className="value">{orderInfo?.date || ""}</span>
            </div>
            <div className="summary-item">
              <span className="label">Estimated Delivery</span>
              <span className="value">2-3 Business Days (Express)</span>
            </div>
            <div className="summary-item">
              <span className="label">Total Paid</span>
              <span className="value total">₹{orderInfo?.total || "1,299.00"}</span>
            </div>
          </OrderSummaryMini>

          {/* Timeline tracker */}
          <TimelineTracker>
            <div className="step completed">
              <div className="circle">
                <Check size={20} />
              </div>
              <span className="label">Confirmed</span>
            </div>

            <div className="step active">
              <div className="circle">
                <Package size={20} />
              </div>
              <span className="label">Packaging</span>
            </div>

            <div className="step">
              <div className="circle">
                <Truck size={20} />
              </div>
              <span className="label">In Transit</span>
            </div>

            <div className="step">
              <div className="circle">
                <Clock size={20} />
              </div>
              <span className="label">Delivered</span>
            </div>
          </TimelineTracker>

          {/* Order Details */}
          <OrderDetails>
            <h3>
              <Package size={22} className="text-blue-500" />
              Receipt Details
            </h3>

            <div className="detail-row">
              <span className="label">Customer Name</span>
              <span className="value">{orderInfo?.customerName || "Valued Customer"}</span>
            </div>

            <div className="detail-row">
              <span className="label">Order Number</span>
              <span className="value order-num">{orderInfo?.orderNumber || "SN-789421"}</span>
            </div>

            <div className="detail-row">
              <span className="label">Order Date</span>
              <span className="value">{orderInfo?.date || new Date().toLocaleDateString()}</span>
            </div>

            <div className="detail-row">
              <span className="label">Delivery Destination</span>
              <span className="value">{orderInfo?.shippingAddress || "Shipping address"}</span>
            </div>

            <div className="detail-row">
              <span className="label">Contact</span>
              <span className="value">{orderInfo?.email || "customer@example.com"}</span>
            </div>

            <div className="detail-row highlight">
              <span className="label">Total Amount</span>
              <span className="value amount">₹{orderInfo?.total || "1,299.00"}</span>
            </div>
          </OrderDetails>

          <ActionButtons>
            <PrimaryButton onClick={() => navigate("/")}>
              <Sparkles size={20} />
              Continue Shopping
            </PrimaryButton>
            <SecondaryButton onClick={handlePrintReceipt}>
              <Download size={18} />
              Print Receipt
            </SecondaryButton>
          </ActionButtons>
        </SuccessCard>
      </Container>
    </FullWidthWrapper>
  );
};

export default ThankYou;