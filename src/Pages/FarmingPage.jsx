


import Footer from '../Components/Footer/Footer';

import { FaHome } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

import Practices from '../Components/FarmingPractices/Practices';
import BelowAbout from '../Components/BelowAbout/BelowAbout';
import BelowProduct from '../Components/Products/BelowProduct';

function FarmingPage() {
  return (
    <>
      <div className="w-[100vw] h-[40vh] bg-green-500 mb-10  ">
      <div className=' About-Image flex justify-center items-center w-100 h-[40vh]'>
      <h1 className='font-bold' >FARMING PRACTICE</h1>
      </div>

    </div>
    <div className='w-[100vw] h-auto  flex justify-center items-center' > 
      <div className='w-[50vw] flex gap-2 text-[1.1rem] items-center'>
      <FaHome /> <Link to="/" style={{ textDecoration: 'none' }}>
  Home
</Link>
 <IoIosArrowDropright /> FARMING PRACTICE
        </div>  </div>
        <div className="w-[100vw] h-auto my-32  flex justify-center items-center ">
      <div className="md:w-[60vw]  md:h-[80vh] h-auto flex flex-wrap  ">
      <div className="md:w-[25vw] h-auto flex gap-11  flex-wrap justify-center ">
<div className="w-100 h-100 p-2 relative overflow-hidden ">
  <img 
    src="https://preview.colorlib.com/theme/farmie/img/bg-img/24.jpg" 
    alt="image" 
    className="h-full w-full object-cover" 
  />

</div>



</div>
<div className="md:w-[30vw] p-2 h-auto ">
<h3 className="text-[15px] text-[gray]">
FARMING PROCESS</h3>
<h1><span className="text-[#3ea33e]">Farming Practices</span>& Methods</h1>
<img src="https://preview.colorlib.com/theme/farmie/img/core-img/decor.png" alt="img" />
<p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non dolorem assumenda eligendi veniam officiis enim nam, eaque, ad veritatis deserunt, maxime corporis! Architecto culpa fugit deleniti sunt id doloribus aperiam.
</p>
<button className=" px-6 py-3 w-[150px] hover:bg-black hover:text-white transition-all duration-2000 button-animate2 bg-[#3ea33e]">Read more</button>
</div>

      </div>
    </div>
<BelowProduct />
 <Practices />
   <Footer />
    </>
    );
}

export default FarmingPage;