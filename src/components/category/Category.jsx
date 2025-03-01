import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CategoriesContainer, CategoryButton } from './CategoriesStyles'

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
      <CategoriesContainer id='products-category'>
        <CategoryButton
          onClick={() => setSelectedCategory(null)}
          isSelected={!selectedCategory}
        >
          All
        </CategoryButton>
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            onClick={() => setSelectedCategory(category)}
            isSelected={selectedCategory === category}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoriesContainer>
      {children({ selectedCategory })}
    </>
  )
}

export default Categories
