import { useState, useEffect, useCallback, useMemo } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../contexts/ToastContext";
import {
  ArrowLeft,
  CreditCard,
  Truck,
  ShieldCheck,
  Lock,
  MapPin
} from "lucide-react";
import {
  FullWidthWrapper,
  Container,
  BackButton,
  CheckoutHeader,
  CheckoutLayout,
  CheckoutFormSection,
  SectionCard,
  FormGrid,
  FormGroup,
  ErrorText,
  VirtualCard,
  PaymentMethodGrid,
  PaymentOption,
  OrderSummarySidebar,
  PriceRow,
  Divider,
  TotalPrice,
  PlaceOrderButton,
  CheckoutSteps,
  CheckoutStep,
} from "./CheckoutStyles";

const Checkout = () => {
  const navigate = useNavigate();
  const [cart] = useLocalStorage("cart", []);
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: 'California',
    zipCode: '',
    phone: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (cart.length === 0 && !isProcessing) {
      navigate('/cart');
    }
  }, [cart, navigate, isProcessing]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const formatCardNumber = useCallback((val) => {
    const cleaned = val.replace(/\D/g, '').substring(0, 16);
    return cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
  }, []);

  const handleCardNumberChange = useCallback((e) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData((prev) => ({ ...prev, cardNumber: formatted }));
    if (errors.cardNumber) {
      setErrors((prev) => ({ ...prev, cardNumber: '' }));
    }
  }, [formatCardNumber, errors.cardNumber]);

  const handleExpiryChange = useCallback((e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 2) {
      val = val.substring(0, 2) + '/' + val.substring(2);
    }
    setFormData((prev) => ({ ...prev, expiryDate: val }));
    if (errors.expiryDate) {
      setErrors((prev) => ({ ...prev, expiryDate: '' }));
    }
  }, [errors.expiryDate]);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.address) newErrors.address = "Street address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zipCode) newErrors.zipCode = "Zip/PIN code is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";

    if (formData.paymentMethod === 'creditCard') {
      if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length < 16) {
        newErrors.cardNumber = "Complete 16-digit card number is required";
      }
      if (!formData.cardName) newErrors.cardName = "Cardholder name is required";
      if (!formData.expiryDate || formData.expiryDate.length < 5) {
        newErrors.expiryDate = "Valid MM/YY is required";
      }
      if (!formData.cvv || formData.cvv.length < 3) {
        newErrors.cvv = "Valid 3-4 digit CVV is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!validate()) {
      showToast({
        heading: "Missing Details",
        message: "Please fill in all required shipping and payment fields.",
      });
      return;
    }

    setIsProcessing(true);
    showToast({
      heading: "Processing Order",
      message: "Authorizing payment and preparing invoice...",
    });

    setTimeout(() => {
      // Save order info for Thank You page
      localStorage.setItem('checkoutCustomer', JSON.stringify(formData));
      navigate('/thank-you');
    }, 1800);
  }, [validate, showToast, formData, navigate]);

  const subtotal = useMemo(() =>
    cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0),
    [cart]
  );
  const shipping = subtotal >= 5000 ? 0 : 500;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  // Masked Card Number Display
  const rawDigits = formData.cardNumber.replace(/\s/g, '');
  const displayCardNum = rawDigits.padEnd(16, '•').replace(/(\S{4})(?=\S)/g, '$1 ');

  return (
    <FullWidthWrapper>
      <Container>
        <BackButton onClick={() => navigate("/cart")}>
          <ArrowLeft size={18} />
          Back to Shopping Bag
        </BackButton>

        <CheckoutHeader>
          <CheckoutSteps>
            <CheckoutStep $active>1</CheckoutStep>
            <span>Delivery</span>
          </CheckoutSteps>
          <CheckoutSteps>
            <CheckoutStep $active={formData.paymentMethod}>2</CheckoutStep>
            <span>Payment</span>
          </CheckoutSteps>
          <CheckoutSteps>
            <CheckoutStep>3</CheckoutStep>
            <span>Confirm</span>
          </CheckoutSteps>
        </CheckoutHeader>

        <h2 className="section-title">Secure Checkout</h2>
        <p className="section-subtitle">Complete your delivery and payment details below</p>

        <CheckoutLayout>
          <CheckoutFormSection>
            {/* Shipping Information */}
            <SectionCard>
              <h2>
                <MapPin size={22} className="text-blue-500" />
                Delivery & Contact Details
              </h2>

              <FormGroup>
                <label>Email Address for Order Updates *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="alex.johnson@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-describedby="email-error"
                />
                {errors.email && <ErrorText id="email-error">{errors.email}</ErrorText>}
              </FormGroup>

              <FormGrid>
                <FormGroup>
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Alex"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    aria-describedby="firstName-error"
                  />
                  {errors.firstName && <ErrorText id="firstName-error">{errors.firstName}</ErrorText>}
                </FormGroup>

                <FormGroup>
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Johnson"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    aria-describedby="lastName-error"
                  />
                  {errors.lastName && <ErrorText id="lastName-error">{errors.lastName}</ErrorText>}
                </FormGroup>
              </FormGrid>

              <FormGroup>
                <label>Street Address *</label>
                <input
                  type="text"
                  name="address"
                  placeholder="742 Evergreen Terrace, Suite 100"
                  value={formData.address}
                  onChange={handleInputChange}
                  aria-describedby="address-error"
                />
                {errors.address && <ErrorText id="address-error">{errors.address}</ErrorText>}
              </FormGroup>

              <FormGrid>
                <FormGroup>
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Springfield"
                    value={formData.city}
                    onChange={handleInputChange}
                    aria-describedby="city-error"
                  />
                  {errors.city && <ErrorText id="city-error">{errors.city}</ErrorText>}
                </FormGroup>

                <FormGroup>
                  <label>State / Region *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    aria-label="State"
                  >
                    <option value="California">California</option>
                    <option value="New York">New York</option>
                    <option value="Texas">Texas</option>
                    <option value="Florida">Florida</option>
                    <option value="Washington">Washington</option>
                  </select>
                </FormGroup>
              </FormGrid>

              <FormGrid>
                <FormGroup>
                  <label>Postal / ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="90210"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    aria-describedby="zipCode-error"
                  />
                  {errors.zipCode && <ErrorText id="zipCode-error">{errors.zipCode}</ErrorText>}
                </FormGroup>

                <FormGroup>
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={handleInputChange}
                    aria-describedby="phone-error"
                  />
                  {errors.phone && <ErrorText id="phone-error">{errors.phone}</ErrorText>}
                </FormGroup>
              </FormGrid>
            </SectionCard>

            {/* Payment Method */}
            <SectionCard>
              <h2>
                <CreditCard size={22} className="text-blue-500" />
                Payment Method
              </h2>

              <PaymentMethodGrid>
                <PaymentOption
                  $isSelected={formData.paymentMethod === 'creditCard'}
                  onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: 'creditCard' }))}
                  aria-pressed={formData.paymentMethod === 'creditCard'}
                >
                  <CreditCard size={20} className="text-blue-500" />
                  Credit / Debit Card
                </PaymentOption>

                <PaymentOption
                  $isSelected={formData.paymentMethod === 'cod'}
                  onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: 'cod' }))}
                  aria-pressed={formData.paymentMethod === 'cod'}
                >
                  <Truck size={20} className="text-emerald-500" />
                  Cash on Delivery
                </PaymentOption>
              </PaymentMethodGrid>

              {formData.paymentMethod === 'creditCard' && (
                <>
                  {/* Holographic Interactive Virtual Card */}
                  <VirtualCard aria-label="Card preview">
                    <div className="card-top">
                      <div className="chip" />
                      <div className="brand">
                        {rawDigits.startsWith('4') ? 'VISA' : rawDigits.startsWith('5') ? 'MASTERCARD' : 'CARD'}
                      </div>
                    </div>

                    <div className="card-number">
                      {displayCardNum}
                    </div>

                    <div className="card-bottom">
                      <div>
                        <div className="label">Card Holder</div>
                        <div className="val">{formData.cardName || 'YOUR FULL NAME'}</div>
                      </div>
                      <div>
                        <div className="label">Expires</div>
                        <div className="val">{formData.expiryDate || 'MM/YY'}  •  ••</div>
                      </div>
                    </div>
                  </VirtualCard>

                  <FormGroup>
                    <label>Card Number *</label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="4000 1234 5678 9010"
                        value={formData.cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={19}
                        aria-describedby="cardNumber-error"
                      />
                      <CreditCard size={18} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    </div>
                    {errors.cardNumber && <ErrorText id="cardNumber-error">{errors.cardNumber}</ErrorText>}
                  </FormGroup>

                  <FormGroup>
                    <label>Cardholder Name *</label>
                    <input
                      type="text"
                      name="cardName"
                      placeholder="Alex Johnson"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      aria-describedby="cardName-error"
                    />
                    {errors.cardName && <ErrorText id="cardName-error">{errors.cardName}</ErrorText>}
                  </FormGroup>

                  <FormGrid>
                    <FormGroup>
                      <label>Expiration Date *</label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleExpiryChange}
                        maxLength={5}
                        aria-describedby="expiryDate-error"
                      />
                      {errors.expiryDate && <ErrorText id="expiryDate-error">{errors.expiryDate}</ErrorText>}
                    </FormGroup>

                    <FormGroup>
                      <label>Security Code (CVV) *</label>
                      <input
                        type="password"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            cvv: e.target.value.replace(/\D/g, '').substring(0, 4),
                          }))
                        }
                        maxLength={4}
                        aria-describedby="cvv-error"
                      />
                      {errors.cvv && <ErrorText id="cvv-error">{errors.cvv}</ErrorText>}
                    </FormGroup>
                  </FormGrid>
                </>
              )}
            </SectionCard>
          </CheckoutFormSection>

          {/* Sticky Order Summary */}
          <OrderSummarySidebar>
            <h3>Order Summary ({cart.length} items)</h3>

            <div className="items-list">
              {cart.map((item) => (
                <div key={item.id} className="order-item">
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="info">
                    <div className="title">{item.title}</div>
                    <div className="qty">Qty: {item.quantity || 1}</div>
                  </div>
                  <div className="price">₹{item.price * (item.quantity || 1)}</div>
                </div>
              ))}
            </div>

            <Divider />

            <PriceRow>
              <span>Subtotal</span>
              <span className="value">₹{subtotal.toFixed(2)}</span>
            </PriceRow>

            <PriceRow>
              <span>Shipping</span>
              <span className="value">{shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`}</span>
            </PriceRow>

            <PriceRow>
              <span>Estimated Tax (18%)</span>
              <span className="value">₹{tax.toFixed(2)}</span>
            </PriceRow>

            <Divider />

            <TotalPrice>
              <span>Total</span>
              <span className="amount">₹{total.toFixed(2)}</span>
            </TotalPrice>

            <PlaceOrderButton
              onClick={handleSubmit}
              disabled={isProcessing}
              aria-label="Place order"
            >
              {isProcessing ? (
                <span>Authorizing Order...</span>
              ) : (
                <>
                  <Lock size={18} />
                  Place Order • ₹{total.toFixed(2)}
                </>
              )}
            </PlaceOrderButton>

            <div className="security-note" role="status" aria-label="Secure payment information">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>256-Bit Encrypted &amp; PCI-DSS Certified</span>
            </div>
          </OrderSummarySidebar>
        </CheckoutLayout>
      </Container>
    </FullWidthWrapper>
  );
};

export default Checkout;