import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  LayoutGrid 
} from 'lucide-react';
import { 
  CategorySectionWrapper,
  CategoryHeader,
  CategoriesContainer, 
  CategoriesScrollContainer, 
  CategoryButton, 
  CategoryIcon, 
  NavArrow,
  LoadingSpinner, 
  ErrorMessage 
} from './CategoriesStyles';

const categoryIcons = {
  'All': '✨',
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
  'lighting': '💡',
  'beauty': '💄',
  'kitchen-accessories': '🍳',
  'sports-accessories': '⚽',
  'mobile-accessories': '🎧'
};

const Categories = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const saved = localStorage.getItem('selectedCategory');
    return saved || null;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('https://dummyjson.com/products/category-list');
        setCategories(response.data);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories.');
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedCategory', selectedCategory || '');
  }, [selectedCategory]);

  useEffect(() => {
    const checkScrollability = () => {
      const container = containerRef.current;
      if (container) {
        setCanScrollLeft(container.scrollLeft > 5);
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 5);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      checkScrollability();
      return () => container.removeEventListener('scroll', checkScrollability);
    }
  }, [categories, loading]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  const getCategoryIcon = (category) => {
    return categoryIcons[category] || '🛍️';
  };

  return (
    <CategorySectionWrapper id='products-category'>
      <CategoryHeader>
        <div className="title-group">
          <h3>
            <LayoutGrid size={22} className="text-blue-500" />
            Curated Categories
          </h3>
          <p>
            {selectedCategory 
              ? `Filtering by ${selectedCategory.replace('-', ' ')}` 
              : "Explore our full catalog across all departments"}
          </p>
        </div>
      </CategoryHeader>

      <CategoriesContainer>
        <NavArrow 
          onClick={scrollLeft} 
          disabled={!canScrollLeft} 
          aria-label="Scroll categories left"
        >
          <ChevronLeft size={20} />
        </NavArrow>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <CategoriesScrollContainer ref={containerRef}>
            <CategoryButton
              onClick={() => setSelectedCategory(null)}
              $isSelected={!selectedCategory}
            >
              <CategoryIcon>{getCategoryIcon('All')}</CategoryIcon>
              All Products
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
        )}

        <NavArrow 
          onClick={scrollRight} 
          disabled={!canScrollRight} 
          aria-label="Scroll categories right"
        >
          <ChevronRight size={20} />
        </NavArrow>
      </CategoriesContainer>

      {children({ selectedCategory })}
    </CategorySectionWrapper>
  );
};

export default Categories;
