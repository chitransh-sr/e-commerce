import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Categories = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const saved = localStorage.getItem('selectedCategory')
    return saved || null
  })

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/category-list')
        setCategories(response.data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    localStorage.setItem('selectedCategory', selectedCategory || '')
  }, [selectedCategory])

  return (
    <>
      <div className="w-full overflow-x-auto px-4 py-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-200
              ${!selectedCategory 
                ? 'bg-indigo-600 text-white border-indigo-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-200
                ${selectedCategory === category 
                  ? 'bg-indigo-600 text-white border-indigo-600' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {children({ selectedCategory })}
    </>
  )
}

export default Categories