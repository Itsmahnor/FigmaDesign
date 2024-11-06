

import BottomTop from '../Components/BottomTop/BottomTop';
import Footer from '../Components/Footer/Footer';

import BelowAbout from '../Components/BelowAbout/BelowAbout';
import { FaHome } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

function ProductPage() {
  return (  
    <>
  
    <div className="w-[100vw] h-[40vh] bg-green-500 mb-10  ">
      <div className=' About-Image flex justify-center items-center w-100 h-[40vh]'>
      <h1 className='font-bold' >Our Product</h1>
      </div>

    </div>
    <div className='w-[100vw] h-auto  flex justify-center items-center' > 
      <div className='w-[50vw] flex gap-2 text-[1.1rem] items-center'>
      <FaHome /> <Link to="/" style={{ textDecoration: 'none' }}>
  Home
</Link>
 <IoIosArrowDropright /> Product
        </div>  </div>
    

<ProductPage />
<BelowAbout />
   <Review />

   <BottomTop />
   <Footer />
 

    </>
  );
}

export default ProductPage;