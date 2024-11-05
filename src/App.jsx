
import './App.css'
import AboutUs from './Components/AboutUs/Aboutus';
import BelowAbout from './Components/BelowAbout/BelowAbout';
import BottomHeader from './Components/BottomHeader/BottomHeader';
import Header from './Components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
import BelowProduct from './Components/Products/BelowProduct';
function App() {


  return (
    <>

   <Header />
   <BottomHeader />
   <AboutUs />
   <BelowAbout />
   <Products />
   <BelowProduct />
    </>
  )
}

export default App
