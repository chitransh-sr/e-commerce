import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Header() {
  const [avatarUrl, setAvatarUrl] = useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80");
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchGitHubAvatar = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/chitransh-sr");
        setAvatarUrl(response.data.avatar_url);
      } catch (error) {
        console.error("Error fetching GitHub avatar:", error);
      }
    };
    fetchGitHubAvatar();
  }, []);

  const fetchData = async (query) => {
    if (!query) return;
    try {
      const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
      setResult(response?.data?.products);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData(input);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [input]);

  return (
    <nav className="bg-blue-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="ShopNow Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  ShopNow
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white"
                >
                  Deals
                </a>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={() => setIsExpanded(true)}
                    onBlur={() => setIsExpanded(false)}
                    className="rounded-md px-3 py-2 text-sm bg-blue-900 text-white placeholder-gray-300 border-2 border-white focus:outline-none focus:ring-2 focus:ring-white w-64"
                  />
                  {isExpanded && result.length > 0 && (
                    <div className="absolute left-0 bg-blue-900 text-white rounded-md mt-1 p-2 shadow-lg z-50 w-full max-w-xs max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-blue-900">
                      {result.map((item) => (
                        <div
                          key={item.id}
                          className="text-white p-2 border-b border-gray-600 hover:bg-blue-900 cursor-pointer"
                        >
                          {item.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              onClick={() => navigate("/cart")}
            >
              <span className="sr-only">Add to cart</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
            <div className="relative ml-3">
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="size-8 rounded-full"
                  src={avatarUrl}
                  alt="GitHub Avatar"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;