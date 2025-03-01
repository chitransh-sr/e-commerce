import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 16px;
  display: flex;
  gap: 16px;
`;

export const CategoryButton = styled.button`
  flex-shrink: 0;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 9999px;
  border: 1px solid ${({ isSelected }) => (isSelected ? "#4f46e5" : "#d1d5db")};
  background-color: ${({ isSelected }) => (isSelected ? "#4f46e5" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#374151")};
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? "#4338ca" : "#f3f4f6")};
  }
`;
