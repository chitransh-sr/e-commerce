import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  LayoutGrid
} from 'lucide-react';
import {
  CategorySectionWrapper,
  CategoryHeader,
  CategoryBadge,
  FiltersViewport,
  FiltersScroll,
  FilterChip,
  ChipArrow,
  NavArrow,
  SkeletonChip,
  LoadingRow,
  ErrorMessage,
} from './CategoriesStyles';

import PropTypes from 'prop-types';

const formatName = (category) =>
  category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');

const Categories = ({ children, initialCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(() => {
    if (initialCategory !== undefined) return initialCategory;
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
      setCategories(Array.isArray(response.data) ? response.data : []);
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
    if (initialCategory !== undefined) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

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
      container.addEventListener('scroll', checkScrollability, { passive: true });
      checkScrollability();
      return () => container.removeEventListener('scroll', checkScrollability);
    }
  }, [categories, loading]);

  const scrollBy = useCallback((dir) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: dir * 400, behavior: 'smooth' });
    }
  }, []);

  const selectCategory = useCallback((category, el) => {
    setSelectedCategory(category);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, []);

  return (
    <CategorySectionWrapper id='products-category'>
      <CategoryHeader>
        <CategoryBadge>
          {categories.length > 0 ? `${categories.length} Categories` : 'Our Categories'}
        </CategoryBadge>
        <div className="title-group">
          <h3>Explore Our Collections</h3>
          <p>
            {selectedCategory
              ? `Showing ${formatName(selectedCategory)}`
              : "Handpicked edits across all departments"}
          </p>
        </div>
      </CategoryHeader>

      {loading ? (
        <LoadingRow aria-label="Loading categories">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <SkeletonChip key={i} />
          ))}
        </LoadingRow>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <FiltersViewport>
          <NavArrow
            className="filters-arrow"
            $position="left"
            onClick={() => scrollBy(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll filters left"
          >
            <ChevronLeft size={18} />
          </NavArrow>

          <FiltersScroll ref={containerRef}>
            <FilterChip
              onClick={(e) => selectCategory(null, e.currentTarget)}
              $isSelected={!selectedCategory}
              aria-pressed={!selectedCategory}
            >
              <LayoutGrid size={15} />
              <span>All Products</span>
              <ChipArrow $isSelected={!selectedCategory}>
                <ArrowRight size={13} />
              </ChipArrow>
            </FilterChip>

            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <FilterChip
                  key={category}
                  onClick={(e) => selectCategory(category, e.currentTarget)}
                  $isSelected={isSelected}
                  aria-pressed={isSelected}
                >
                  <span>{formatName(category)}</span>
                  <ChipArrow $isSelected={isSelected}>
                    <ArrowRight size={13} />
                  </ChipArrow>
                </FilterChip>
              );
            })}
          </FiltersScroll>

          <NavArrow
            className="filters-arrow"
            $position="right"
            onClick={() => scrollBy(1)}
            disabled={!canScrollRight}
            aria-label="Scroll filters right"
          >
            <ChevronRight size={18} />
          </NavArrow>
        </FiltersViewport>
      )}

      {children({ selectedCategory })}
    </CategorySectionWrapper>
  );
};

export default Categories;
Categories.propTypes = {
  children: PropTypes.func,
  initialCategory: PropTypes.string,
};
