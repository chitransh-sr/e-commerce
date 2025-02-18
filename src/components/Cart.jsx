import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useLocalStorage("cart", []);

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => navigate("/")}
        className="w-[100px] bg-indigo-600 text-white py-2 px-4  my-6 rounded hover:bg-indigo-700 transition-colors"
      >
        Go Back
      </button>
      <h2 className="text-2xl font-semibold mb-4">My Cart</h2>
      {cart.length === 0 ? (
        <p>My cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md"
            >
              <div className="flex items-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value, 10))
                  }
                  className="w-16 p-2 border rounded"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right">
            <h3 className="text-xl font-semibold">
              Total: ${getTotalPrice().toFixed(2)}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
