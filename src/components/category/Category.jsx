import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { CategoriesContainer, CategoriesScrollContainer, CategoryButton, CategoryIcon, LoadingSpinner, ErrorMessage, LeftArrow, RightArrow } from './CategoriesStyles'

const categoryIcons = {
  'All': '🎯',
  'smartphones': '📱',
  'laptops': '💻',
  'fragrances': '🌸',
  'skincare': '✨',
  'groceries': '🛒',
  'home-decoration': '🏠',
  'furniture': '🪑',
  'tops': '👕',
  'womens-dresses': '👗',
  'womens-shoes': '👠',
  'mens-shirts': '👔',
  'mens-shoes': '👟',
  'mens-watches': '⌚',
  'womens-watches': '⌚',
  'womens-bags': '👜',
  'womens-jewellery': '💍',
  'sunglasses': '🕶️',
  'automotive': '🚗',
  'motorcycle': '🏍️',
  'lighting': '💡'
}

const Categories = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const saved = localStorage.getItem('selectedCategory')
    return saved || null
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await axios.get('https://dummyjson.com/products/category-list')
        setCategories(response.data)
      } catch (error) {
        console.error('Error fetching categories:', error)
        setError('Failed to load categories. Please try again.')
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    localStorage.setItem('selectedCategory', selectedCategory || '')
  }, [selectedCategory])

  useEffect(() => {
    const checkScrollability = () => {
      const container = containerRef.current
      if (container) {
        setCanScrollLeft(container.scrollLeft > 0)
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollability)
      checkScrollability() // Initial check
      
      return () => {
        container.removeEventListener('scroll', checkScrollability)
      }
    }
  }, [categories, loading, error])

  const scrollLeft = () => {
    const container = containerRef.current
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    const container = containerRef.current
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const getCategoryIcon = (category) => {
    return categoryIcons[category] || '📦'
  }

  if (loading) {
    return (
      <CategoriesContainer>
        <LoadingSpinner />
      </CategoriesContainer>
    )
  }

  if (error) {
    return (
      <CategoriesContainer>
        <ErrorMessage>{error}</ErrorMessage>
      </CategoriesContainer>
    )
  }

  return (
    <>
      <CategoriesContainer id='products-category'>
        <CategoriesScrollContainer ref={containerRef}>
          <CategoryButton
            onClick={() => setSelectedCategory(null)}
            $isSelected={!selectedCategory}
          >
            <CategoryIcon>{getCategoryIcon('All')}</CategoryIcon>
            All
          </CategoryButton>
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              onClick={() => setSelectedCategory(category)}
              $isSelected={selectedCategory === category}
            >
              <CategoryIcon>{getCategoryIcon(category)}</CategoryIcon>
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </CategoryButton>
          ))}
        </CategoriesScrollContainer>
        <LeftArrow onClick={scrollLeft} disabled={!canScrollLeft}>
          ‹
        </LeftArrow>
        <RightArrow onClick={scrollRight} disabled={!canScrollRight}>
          ›
        </RightArrow>
      </CategoriesContainer>
      {children({ selectedCategory })}
    </>
  )
}

export default Categories
