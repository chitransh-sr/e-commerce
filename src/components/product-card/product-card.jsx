import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductDetails,
  ProductPrice,
  ProductRating,
  PaginationContainer,
  PaginationButton,
  PaginationText,
} from "./product-cardStyles";

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [totalProducts, setTotalProducts] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url, skip;
        if (selectedCategory) {
          url = `https://dummyjson.com/products/category/${selectedCategory}`;
          skip = 0;
        } else {
          skip = (currentPage - 1) * itemsPerPage;
          url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`;
        }

        const response = await axios.get(url);

        if (selectedCategory) {
          const startIndex = (currentPage - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          setProducts(response.data.products.slice(startIndex, endIndex));
          setTotalProducts(response.data.products.length);
        } else {
          setProducts(response.data.products);
          setTotalProducts(response.data.total);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handleCardClick = (product) => {
    navigate("/product", { state: { product } });
  };

  return (
    <Container>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            onClick={() => handleCardClick(product)}
            style={{ cursor: "pointer" }}
          >
            <ProductImage src={product.thumbnail} alt={product.title} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
               <ProductDetails>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductRating>Rating: {product.rating}/5</ProductRating>
              </ProductDetails> 
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>

      <PaginationContainer>
        <PaginationButton
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <PaginationText>
          Page {currentPage} of {totalPages}
        </PaginationText>
        <PaginationButton
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </Container>
  );
};

export default Products;
