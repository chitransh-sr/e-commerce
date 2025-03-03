import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/category/Category';
import Products from './components/product/Product';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import NewsletterSubscription from './components/newsletter/Newsletter';
import CarauselApp from './components/carousel/Carousel';
import Footer from './components/footer/Footer'

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
        <Route path="/products" element={<HomeLayout />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;