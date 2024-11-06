import './About.css'
import Products from '../Components/Products/Products';
import BelowProduct from '../Components/Products/BelowProduct';
import Review from '../Components/Review/Review';
import Practices from '../Components/FarmingPractices/Practices';
import Contact from '../Components/Contact/Contact';
import BottomTop from '../Components/BottomTop/BottomTop';
import Footer from '../Components/Footer/Footer';
import AboutUs from '../Components/AboutUs/Aboutus';
import BelowAbout from '../Components/BelowAbout/BelowAbout';
import { FaHome } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';
import BottomHeader from '../Components/BottomHeader/BottomHeader';
import AboutCustomer from '../Components/AboutPageCustomer/AboutCustomer';
function About() {
  return (  
    <>
  
    <div className="w-[100vw] h-[40vh] bg-green-500 mb-10  ">
      <div className=' About-Image flex justify-center items-center w-100 h-[40vh]'>
      <h1 className='font-bold' >About Us</h1>
      </div>

    </div>
    <div className='w-[100vw] h-auto  flex justify-center items-center' > 
      <div className='w-[50vw] flex gap-2 text-[1.1rem] items-center'>
      <FaHome /> <Link to="/" style={{ textDecoration: 'none' }}>
  Home
</Link>
 <IoIosArrowDropright /> About
        </div>  </div>
        <BottomHeader />
    <AboutUs />

  
   <Review />
 <AboutCustomer />
   <BottomTop />
   <Footer />
 

    </>
  );
}

export default About;