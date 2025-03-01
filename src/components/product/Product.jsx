import React, { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "../../hooks/useLocalStorage";
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
  QuantityInput,
  AddToCartButton,
  PaginationContainer,
  PaginationButton,
  PaginationText,
} from "./ProductsStyles";

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [totalProducts, setTotalProducts] = useState(0);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [quantities, setQuantities] = useState({});
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

  const handleQuantityChange = (productId, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(1, Number(value)),
    }));
  };

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    navigate("/cart");
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  return (
    <Container>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.thumbnail} alt={product.title} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductDetails>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductRating>Rating: {product.rating}/5</ProductRating>
              </ProductDetails>
              <div className="flex items-center gap-2 mb-4">
                <QuantityInput
                  type="number"
                  min="1"
                  value={quantities[product.id] || 1}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                />
                <AddToCartButton onClick={() => addToCart(product)}>
                  Add to Cart
                </AddToCartButton>
              </div>
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
