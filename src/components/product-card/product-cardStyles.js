import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  animation: fadeIn 0.8s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const ProductCard = styled.div`
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(226, 232, 240, 0.8);
  position: relative;
  transform-style: preserve-3d;
  animation: scaleIn 0.6s ease-out;
  animation-fill-mode: both;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #f97316);
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 20px 20px 0 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), transparent, rgba(249, 115, 22, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.15), 0 8px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(59, 130, 246, 0.3);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  &:active {
    transform: translateY(-8px) scale(1.01);
    transition: all 0.2s ease;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(1.05);
  
  ${ProductCard}:hover & {
    transform: scale(1.08);
    filter: brightness(1.1) saturate(1.1);
  }
`;

export const ProductInfo = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  background: linear-gradient(145deg, #ffffff, #f8fafc);
`;

export const ProductTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1e293b;
  line-height: 1.4;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.025em;
  
  ${ProductCard}:hover & {
    color: #3b82f6;
    transform: translateX(4px);
  }
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #4a4a4a;
  margin-bottom: 12px;
  flex-grow: 1;
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.05em;
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
    filter: drop-shadow(0 2px 8px rgba(59, 130, 246, 0.3));
  }
`;

export const ProductRating = styled.span`
  font-size: 0.875rem;
  background: linear-gradient(135deg, #fef3c7, #fed7aa);
  color: #92400e;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  border: 1px solid rgba(249, 115, 22, 0.2);
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.1);
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2);
    background: linear-gradient(135deg, #fed7aa, #fdba74);
  }
`;

export const QuantityInput = styled.input`
  width: 50px;
  padding: 6px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  text-align: center;
`;

export const AddToCartButton = styled.button`
  flex: 1;
  background-color: #4f46e5;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4338ca;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem 0 2rem;
  margin-top: 2rem;
`;

export const PaginationButton = styled.button`
  padding: 1rem 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  min-width: 120px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    background: linear-gradient(135deg, #94a3b8, #64748b);
  }

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.35), 0 0 20px rgba(59, 130, 246, 0.1);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
  }
`;

export const PaginationText = styled.span`
  font-size: 0.95rem;
  color: #64748b;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(145deg, #f8fafc, #ffffff);
  border-radius: 10px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  font-family: 'Inter', sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;
