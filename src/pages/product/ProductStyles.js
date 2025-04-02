import styled from "styled-components";

export const Container = styled.div`
height:100vh;
display: flex;
justify-content: center;
align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const ProductDetailContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  background-color: #fff;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

export const DetailsWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #111;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #4f46e5; 
`;

export const Rating = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  color: #555;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

export const QuantityInput = styled.input`
  width: 60px;
  padding: 5px;
  font-size: 1rem;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color:#4f46e5;
  border: 1px solid #4f46e5;;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4f46e5;;
  }
`;
