import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  overflow-y: auto;
  
  /* Custom scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: #667eea #f1f5f9;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(90deg, #764ba2, #667eea);
  }
  
  /* Dark mode styles */
  [data-theme="dark"] & {
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
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out;
  
  /* Dark mode styles */
  [data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  
  /* Dark mode styles */
  [data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.15), 0 8px 25px rgba(0, 0, 0, 0.15);
    
    [data-theme="dark"] &:hover {
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 8px 25px rgba(102, 126, 234, 0.2);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
    border-radius: 16px 16px 0 0;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1));
  
  /* Dark mode styles */
  [data-theme="dark"] & {
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3));
  }
  
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15));
    
    [data-theme="dark"] & {
      filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.4));
    }
  }
  
  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  
  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #f1f5f9;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
  
  /* Dark mode styles */
  [data-theme="dark"] & {
    background: linear-gradient(135deg, #764ba2, #667eea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Price = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(145deg, #eff6ff, #dbeafe);
  border-radius: 12px;
  border: 2px solid rgba(59, 130, 246, 0.2);
  width: fit-content;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '$';
    font-size: 1.5rem;
    opacity: 0.7;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.15);
  }
  
  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #60a5fa;
    background: linear-gradient(145deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05));
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
    
    &:hover {
      box-shadow: 0 6px 16px rgba(59, 130, 246, 0.3);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    padding: 0.5rem 1rem;
  }
`;

export const Rating = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  width: fit-content;
  font-family: 'Inter', sans-serif;
  
  &::before {
    content: '⭐';
    font-size: 1.2rem;
  }
  
  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #94a3b8;
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #cbd5e1;
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

export const QuantitySection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const QuantityLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #f1f5f9;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const QuantityInput = styled.input`
  width: 80px;
  padding: 0.875rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  /* Dark mode styles */
  [data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #f1f5f9;
  }
  
  [data-theme="dark"] &:focus {
    border-color: rgba(118, 75, 162, 0.5);
    box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 70px;
    padding: 0.75rem;
    font-size: 1rem;
  }
`;

export const AddToCartButton = styled.button`
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', sans-serif;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  position: relative;
  overflow: hidden;
  min-width: 200px;
  backdrop-filter: blur(20px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #764ba2, #667eea);
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6), 0 0 30px rgba(102, 126, 234, 0.2);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
    min-width: 180px;
  }
`;
