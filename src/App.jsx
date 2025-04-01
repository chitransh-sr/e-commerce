import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/category/Category';
import Products from './components/product-card/product-card';
import Header from './components/header/Header';
import Cart from './pages/cart/Cart';
import NewsletterSubscription from './components/newsletter/Newsletter';
import CarauselApp from './components/carousel/Carousel';
import Footer from './components/footer/Footer'
import ProductDetails  from './pages/product/Product';

const HomeLayout = () => (
  <>
    <Header />
    <CarauselApp/>
    <Categories>
      {({ selectedCategory }) => (
        <Products selectedCategory={selectedCategory} />
      )}
    </Categories>
    <NewsletterSubscription/>
    <Footer/>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;