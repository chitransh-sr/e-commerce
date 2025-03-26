import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 4rem;
`;

export const ProductCard = styled.div`
  flex: 1 1 calc(33.33% - 24px);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 900px) {
    flex: 1 1 calc(50% - 24px);
  }

  @media (max-width: 600px) {
    flex: 1 1 100%;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 20rem;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
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
  font-size: 16px;
  font-weight: bold;
  color: #4f46e5;
`;

export const ProductRating = styled.span`
  font-size: 14px;
  background-color: #f3f4f6;
  padding: 4px 8px;
  border-radius: 4px;
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
  gap: 16px;
  padding-bottom: 24px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: medium;
  color: #4f46e5;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #f3f4f6;
  }
`;

export const PaginationText = styled.span`
  font-size: 14px;
  color: #4a4a4a;
`;
