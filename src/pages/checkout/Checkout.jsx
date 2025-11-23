import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sun, Moon, CreditCard, Truck, Shield, Check } from "lucide-react";
import { useTheme } from '../../contexts/ThemeContext';
import {
  FullWidthWrapper,
  Container,
  BackButton,
  CheckoutHeader,
  CheckoutSection,
  FormGrid,
  FormGroup,
  PaymentMethodRadio,
  OrderSummary,
  OrderItem,
  PriceRow,
  Divider,
  TotalPrice,
  PlaceOrderButton,
  ThemeToggle,
  ErrorMessage,
  SuccessMessage
} from "./CheckoutStyles";

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useLocalStorage("cart", []);
  const { isDarkMode, toggleTheme } = useTheme();
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    saveInfo: false
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  useEffect(() => {
    if (cart.length === 0 && !orderCompleted) {
      navigate('/cart');
    }
  }, [cart, navigate, orderCompleted]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    
    if (formData.paymentMethod === 'creditCard') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) 
        newErrors.cardNumber = 'Card number must be 16 digits';
      
      if (!formData.cardName) newErrors.cardName = 'Name on card is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      else if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = 'CVV must be 3 or 4 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate order processing
      setOrderPlaced(true);
      setOrderCompleted(true);
      
      // Clear cart after successful order
      setTimeout(() => {
        setCart([]);
        navigate('/thank-you');
      }, 2000);
    }
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => 
      total + (item.price * (item.quantity || 1)), 0);
  };

  const getTax = () => {
    return getSubtotal() * 0.08; // 8% tax
  };

  const getShipping = () => {
    return getSubtotal() > 100 ? 0 : 15; // Free shipping over $100
  };

  const getTotal = () => {
    return getSubtotal() + getTax() + getShipping();
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s/g, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setFormData(prev => ({ ...prev, cardNumber: formattedValue }));
  };

  if (orderPlaced) {
    return (
      <FullWidthWrapper>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </ThemeToggle>
        <Container>
          <SuccessMessage>
            <Check size={20} style={{ marginRight: '0.5rem' }} />
            Order placed successfully! Redirecting...
          </SuccessMessage>
        </Container>
      </FullWidthWrapper>
    );
  }

  return (
    <FullWidthWrapper>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </ThemeToggle>
      <Container>
        <BackButton onClick={() => navigate("/cart")}>
          <ArrowLeft size={20} />
          Back to Cart
        </BackButton>
        
        <CheckoutHeader>
          <h1>Checkout</h1>
        </CheckoutHeader>
        
        <div className="checkout-content">
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <CheckoutSection>
                <h2>Shipping Information</h2>
                <FormGroup>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@gmail.com"
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </FormGroup>
                
                <FormGrid>
                  <FormGroup>
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                    />
                    {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
                  </FormGroup>
                  
                  <FormGroup>
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                    />
                    {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
                  </FormGroup>
                </FormGrid>
                
                <FormGroup>
                  <label>Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123, MG Road, Brigade Road"
                  />
                  {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
                </FormGroup>
                
                <FormGroup>
                  <label>Apartment, suite, etc. (optional)</label>
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    placeholder="Flat 4B, Block A, Phase 1"
                  />
                </FormGroup>
                
                <FormGrid>
                  <FormGroup>
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Mumbai, Delhi, Bangalore..."
                    />
                    {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
                  </FormGroup>
                  
                  <FormGroup>
                    <label>State</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                    >
                      <option value="">Select State</option>
                      <option value="AP">Andhra Pradesh</option>
                      <option value="AR">Arunachal Pradesh</option>
                      <option value="AS">Assam</option>
                      <option value="BR">Bihar</option>
                      <option value="CG">Chhattisgarh</option>
                      <option value="GA">Goa</option>
                      <option value="GJ">Gujarat</option>
                      <option value="HR">Haryana</option>
                      <option value="HP">Himachal Pradesh</option>
                      <option value="JH">Jharkhand</option>
                      <option value="KA">Karnataka</option>
                      <option value="KL">Kerala</option>
                      <option value="MP">Madhya Pradesh</option>
                      <option value="MH">Maharashtra</option>
                      <option value="MN">Manipur</option>
                      <option value="ML">Meghalaya</option>
                      <option value="MZ">Mizoram</option>
                      <option value="NL">Nagaland</option>
                      <option value="OD">Odisha</option>
                      <option value="PB">Punjab</option>
                      <option value="RJ">Rajasthan</option>
                      <option value="SK">Sikkim</option>
                      <option value="TN">Tamil Nadu</option>
                      <option value="TG">Telangana</option>
                      <option value="TR">Tripura</option>
                      <option value="UP">Uttar Pradesh</option>
                      <option value="UT">Uttarakhand</option>
                      <option value="WB">West Bengal</option>
                      <option value="AN">Andaman and Nicobar Islands</option>
                      <option value="CH">Chandigarh</option>
                      <option value="DN">Dadra and Nagar Haveli</option>
                      <option value="DD">Daman and Diu</option>
                      <option value="DL">Delhi</option>
                      <option value="JK">Jammu and Kashmir</option>
                      <option value="LA">Ladakh</option>
                      <option value="LD">Lakshadweep</option>
                      <option value="PY">Puducherry</option>
                    </select>
                    {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
                  </FormGroup>
                </FormGrid>
                
                <FormGrid>
                  <FormGroup>
                    <label>PIN Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="110001, 400001, 560001..."
                    />
                    {errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}
                  </FormGroup>
                  
                  <FormGroup>
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                  </FormGroup>
                </FormGrid>
              </CheckoutSection>

              {/* Payment Method */}
              <CheckoutSection>
                <h2>Payment Method</h2>
                
                <PaymentMethodRadio 
                  className={formData.paymentMethod === 'creditCard' ? 'selected' : ''}
                  onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'creditCard' }))}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={formData.paymentMethod === 'creditCard'}
                    onChange={handleInputChange}
                  />
                  <CreditCard size={20} style={{ marginRight: '0.5rem' }} />
                  Credit/Debit Card
                </PaymentMethodRadio>
                
                <PaymentMethodRadio 
                  className={formData.paymentMethod === 'cod' ? 'selected' : ''}
                  onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'cod' }))}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                  />
                  <Truck size={20} style={{ marginRight: '0.5rem' }} />
                  Cash on Delivery
                </PaymentMethodRadio>
                
                {formData.paymentMethod === 'creditCard' && (
                  <>
                    <FormGroup>
                      <label>Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                      />
                      {errors.cardNumber && <ErrorMessage>{errors.cardNumber}</ErrorMessage>}
                    </FormGroup>
                    
                    <FormGroup>
                      <label>Name on Card</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                      {errors.cardName && <ErrorMessage>{errors.cardName}</ErrorMessage>}
                    </FormGroup>
                    
                    <FormGrid>
                      <FormGroup>
                        <label>Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          maxLength="5"
                        />
                        {errors.expiryDate && <ErrorMessage>{errors.expiryDate}</ErrorMessage>}
                      </FormGroup>
                      
                      <FormGroup>
                        <label>CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          maxLength="4"
                        />
                        {errors.cvv && <ErrorMessage>{errors.cvv}</ErrorMessage>}
                      </FormGroup>
                    </FormGrid>
                  </>
                )}
                
                <FormGroup>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleInputChange}
                      style={{ marginRight: '0.5rem', width: 'auto' }}
                    />
                    Save this information for next time
                  </label>
                </FormGroup>
              </CheckoutSection>
            </form>
          </div>
          
          {/* Order Summary */}
          <OrderSummary>
            <h3>Order Summary</h3>
            
            {cart.map((item) => (
              <OrderItem key={item.id}>
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"%3E%3Crect width="60" height="60" fill="%23f3f4f6"/%3E%3Ctext x="30" y="30" text-anchor="middle" dy=".3em" fill="%239ca3af" font-family="sans-serif" font-size="10"%3ENo Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="item-details">
                  <div className="item-title">{item.title}</div>
                  <div className="item-quantity">Qty: {item.quantity || 1}</div>
                </div>
                <div className="item-price">
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </div>
              </OrderItem>
            ))}
            
            <Divider />
            
            <PriceRow>
              <span>Subtotal ({cart.length} items)</span>
              <span>${getSubtotal().toFixed(2)}</span>
            </PriceRow>
            
            <PriceRow>
              <span>Shipping</span>
              <span>
                {getShipping() === 0 ? 'FREE' : `$${getShipping().toFixed(2)}`}
              </span>
            </PriceRow>
            
            <PriceRow>
              <span>Tax</span>
              <span>${getTax().toFixed(2)}</span>
            </PriceRow>
            
            <Divider />
            
            <TotalPrice>
              <span>Total</span>
              <span>${getTotal().toFixed(2)}</span>
            </TotalPrice>
            
            <PlaceOrderButton onClick={handleSubmit}>
              Place Order
            </PlaceOrderButton>
            
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                <Shield size={16} />
                <span>Secure Checkout</span>
              </div>
              <div style={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                Your payment information is encrypted and secure
              </div>
            </div>
          </OrderSummary>
        </div>
      </Container>
    </FullWidthWrapper>
  );
};

export default Checkout;
