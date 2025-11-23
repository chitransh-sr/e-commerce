import styled from "styled-components";

export const FullWidthWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #ffffff !important;
  overflow-y: auto;
  transition: background-color 0.3s ease;
  
  /* Custom scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: #667eea #f1f5f9;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(241, 245, 249, 0.8);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(90deg, #764ba2, #667eea);
  }
  
  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.9);
    scrollbar-color: #764ba2 #0f172a;
    
    &::-webkit-scrollbar-track {
      background: rgba(30, 41, 59, 0.5);
    }
    
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(90deg, #764ba2, #667eea);
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(90deg, #667eea, #764ba2);
    }
  }
  
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background: #ffffff !important;
  min-height: 100vh;
  transition: background-color 0.3s ease;
  
  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.95) !important;
    max-width: 100%;
    margin: 0;
  }
  
  
  .checkout-content {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const CheckoutHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  
  html[data-theme='dark'] & {
    border-bottom-color: #334155;
  }
  
  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #0f172a !important;
    margin: 0;
    
    html[data-theme='dark'] & {
      color: #f8fafc;
    }
  }
`;

export const CheckoutSection = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  
  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 1.5rem 0;
    
    html[data-theme='dark'] & {
      color: #f8fafc;
    }
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    
    html[data-theme='dark'] & {
      color: #e5e7eb;
    }
  }
  
  input, select {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 0.95rem;
    transition: all 0.2s;
    background: white;
    color: #1f2937;
    
    html[data-theme='dark'] & {
      background: #0f172a;
      border-color: #374151;
      color: #f3f4f6;
    }
    
    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }
`;

export const PaymentMethodRadio = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  
  html[data-theme='dark'] & {
    border-color: #374151;
    background: #0f172a;
  }
  
  &:hover {
    border-color: #3b82f6;
  }
  
  input[type="radio"] {
    margin-right: 0.75rem;
    width: auto;
  }
  
  &.selected {
    border-color: #3b82f6;
    background: rgba(59, 130, 246, 0.05);
    
    html[data-theme='dark'] & {
      background: rgba(59, 130, 246, 0.1);
    }
  }
`;

export const OrderSummary = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  height: fit-content;
  position: sticky;
  top: 2rem;
  
  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  h3 {
    color: #1e293b;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1.5rem 0;
    
    html[data-theme='dark'] & {
      color: #f8fafc;
    }
  }
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
  
  html[data-theme='dark'] & {
    border-bottom-color: #374151;
  }
  
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .item-details {
    flex: 1;
    
    .item-title {
      font-weight: 500;
      color: #1f2937;
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
      
      html[data-theme='dark'] & {
        color: #f3f4f6;
      }
    }
    
    .item-quantity {
      color: #6b7280;
      font-size: 0.85rem;
      
      html[data-theme='dark'] & {
        color: #9ca3af;
      }
    }
  }
  
  .item-price {
    font-weight: 600;
    color: #059669;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  span {
    color: #64748b;
    font-weight: 500;
    
    html[data-theme='dark'] & {
      color: #94a3b8;
    }
    
    &:last-child {
      color: #1e293b;
      font-weight: 600;
      
      html[data-theme='dark'] & {
        color: #f8fafc;
      }
    }
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: #e2e8f0;
  margin: 1.5rem 0;
  
  html[data-theme='dark'] & {
    background: #334155;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  span {
    &:first-child {
      color: #1e293b;
      font-size: 1.25rem;
      font-weight: 600;
      
      html[data-theme='dark'] & {
        color: #f8fafc;
      }
    }
    
    &:last-child {
      color: #059669;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(5, 150, 105, 0.4);
    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ThemeToggle = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
  z-index: 1000;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  html[data-theme='dark'] &,
  &[data-theme='dark'] {
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);
    
    &:hover {
      background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
      box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #dc2626;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-weight: 500;
`;

export const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-weight: 500;
`;
