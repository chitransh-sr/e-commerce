import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { 
  ChevronLeft, 
  ChevronRight, 
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
  ErrorMessage,
  CategoryBadge,
} from './CategoriesStyles';

import PropTypes from 'prop-types';

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

  const fetchCategories = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

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

  const scrollLeft = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  }, []);

  // Display categories
  const displayedCategories = categories;

  const getCategoryIcon = useCallback((category) => {
    return categoryIcons[category] || '🛍️';
  }, []);

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
        <CategoryBadge>
          {displayedCategories.length} Categories
        </CategoryBadge>
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
          <>
            <CategoriesScrollContainer ref={containerRef}>
              <CategoryButton
                onClick={() => setSelectedCategory(null)}
                $isSelected={!selectedCategory}
                aria-pressed={!selectedCategory}
              >
                <CategoryIcon $gradient="linear-gradient(135deg, #3b82f6, #8b5cf6)">
                  {getCategoryIcon('All')}
                </CategoryIcon>
                <span>All Products</span>
              </CategoryButton>

              {displayedCategories.map((category, index) => (
                <CategoryButton
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  $isSelected={selectedCategory === category}
                  aria-pressed={selectedCategory === category}
                >
                  <CategoryIcon>
                    {getCategoryIcon(category)}
                  </CategoryIcon>
                  <span>
                    {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                  </span>
                </CategoryButton>
              ))}
            </CategoriesScrollContainer>

            <NavArrow 
              onClick={scrollRight} 
              disabled={!canScrollRight} 
              aria-label="Scroll categories right"
            >
              <ChevronRight size={20} />
            </NavArrow>
          </>
        )}
      </CategoriesContainer>

      {children({ selectedCategory })}
    </CategorySectionWrapper>
  );
};

export default Categories;
Categories.propTypes = {
  children: PropTypes.func,
};
