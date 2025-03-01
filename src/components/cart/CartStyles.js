import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
`;

export const BackButton = styled.button`
  width: 100px;
  background-color: #4f46e5;
  color: white;
  padding: 10px 16px;
  margin-bottom: 24px;
  border-radius: 8px;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CartImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CartDetails = styled.div`
  margin-left: 16px;
`;

export const CartTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

export const CartPrice = styled.p`
  color: #4b5563;
`;

export const CartActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-top: 12px;
  }
`;

export const QuantityInput = styled.input`
  width: 60px;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const RemoveButton = styled.button`
  padding: 8px 16px;
  background-color: #ef4444;
  color: white;
  border-radius: 6px;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #dc2626;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const TotalPrice = styled.h3`
  text-align: right;
  font-size: 20px;
  font-weight: 600;
  margin-top: 16px;
`;
