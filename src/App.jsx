import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/category/Category';
import Products from './components/product-card/product-card';
import Header from './components/header/Header';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import ThankYou from './pages/thank-you/ThankYou';
import NewArrivals from './pages/new-arrivals/NewArrivals';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import NewsletterSubscription from './components/newsletter/Newsletter';
import CarauselApp from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import ProductDetails from './pages/product/Product';
import GoToTop from './components/gototop/gototop';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import CustomerReviews from './components/customer-reviews/customerReview';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import './index.css';

const HomeLayout = () => (
  <>
    <Header />
    <CarauselApp />
    <Categories>
      {({ selectedCategory }) => (
        <Products selectedCategory={selectedCategory} />
      )}
    </Categories>
    <CustomerReviews />
    <NewsletterSubscription />
    <GoToTop />
    <Footer />
  </>
);

const PageLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <GoToTop />
    <Footer />
  </>
);

const ProductLayout = () => (
  <PageLayout>
    <ProductDetails />
  </PageLayout>
);

function App() {
  return (
    <ThemeProvider>
      <div className="theme-scrollbar min-h-screen">
        <Router>
          <ScrollToTop />
          <ToastProvider>
            <Routes>
              <Route path="/" element={<HomeLayout />} />
              <Route path="/new-arrivals" element={<PageLayout><NewArrivals /></PageLayout>} />
              <Route path="/about" element={<PageLayout><About /></PageLayout>} />
              <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
              <Route path="/product" element={<ProductLayout />} />
              <Route path="/cart" element={<PageLayout><Cart /></PageLayout>} />
              <Route path="/checkout" element={<PageLayout><Checkout /></PageLayout>} />
              <Route path="/thank-you" element={<PageLayout><ThankYou /></PageLayout>} />
            </Routes>
          </ToastProvider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
