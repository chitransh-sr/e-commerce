import React, { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
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
    <div className="container mx-auto" id='products'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-indigo-600 font-bold">${product.price}</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                  Rating: {product.rating}/5
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="number"
                  min="1"
                  value={quantities[product.id] || 1}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  className="w-16 px-2 py-1 border rounded text-center"
                />
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 pb-6">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm font-medium text-indigo-600 bg-white rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          className="px-4 py-2 text-sm font-medium text-indigo-600 bg-white rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
