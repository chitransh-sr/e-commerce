import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/category/Category';
import Products from './components/product-card/product-card';
import Header from './components/header/Header';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import ThankYou from './pages/thank-you/ThankYou';
import NewsletterSubscription from './components/newsletter/Newsletter';
import CarauselApp from './components/carousel/Carousel';
import Footer from './components/footer/Footer'
import ProductDetails  from './pages/product/Product';
import GoToTop from './components/gototop/gototop'
import CustomerReviews from './components/customer-reviews/customerReview';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

const HomeLayout = () => (
  <>
    <Header />
    <CarauselApp/>
    <Categories>
      {({ selectedCategory }) => (
        <Products selectedCategory={selectedCategory} />
      )}
    </Categories>
    <CustomerReviews />
    <NewsletterSubscription/>
    <GoToTop/>
    <Footer/>
  </>
);
const ProductLayout = () => (
  <>
    <Header />
    <ProductDetails />
    <GoToTop/>
    <Footer />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <div className="theme-scrollbar">
        <Router>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/product" element={<ProductLayout/>} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/thank-you" element={<ThankYou/>}/>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;