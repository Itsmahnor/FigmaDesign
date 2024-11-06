
import './App.css'
import AboutUs from './Components/AboutUs/Aboutus';
import BelowAbout from './Components/BelowAbout/BelowAbout';
import BottomHeader from './Components/BottomHeader/BottomHeader';
import Header from './Components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
import BelowProduct from './Components/Products/BelowProduct';
import Review from './Components/Review/Review';
import Practices from './Components/FarmingPractices/Practices';
import Contact from './Components/Contact/Contact';
import BottomTop from './Components/BottomTop/BottomTop';
import Footer from './Components/Footer/Footer';
function App() {


  return (
    <>

   <Header />
   <BottomHeader />
   <AboutUs />
   <BelowAbout />
   <Products />
   <BelowProduct />
   <Practices />
   <Review />
   <Contact />
   <BottomTop />
   <Footer />
    </>
  )
}

export default App
