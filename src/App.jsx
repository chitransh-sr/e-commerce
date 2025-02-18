import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Category';
import Products from './components/Product';
import CarouselApp from './components/Carousel';
import Cart from './components/Cart';

const HomeLayout = () => (
  <>
    <Header />
    <CarouselApp/>
    <Categories>
      {({ selectedCategory }) => (
        <Products selectedCategory={selectedCategory} />
      )}
    </Categories>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/products" element={<HomeLayout />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;