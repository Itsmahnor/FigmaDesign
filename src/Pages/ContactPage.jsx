import { FaHome } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';
import Data from './ContactData.json'
import { FaFacebook, FaLocationDot, FaPinterest, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Contact from "../Components/Contact/Contact";
import Review from "../Components/Review/Review";
import Footer from "../Components/Footer/Footer";
function ContactPage() {
  return (  
    <>
     <div className="w-[100vw] h-[40vh] bg-green-500 mb-10  ">
      <div className=' About-Image flex justify-center items-center w-100 h-[40vh]'>
      <h1 className='font-bold' >Contact Us</h1>
      </div>

    </div>
    <div className='w-[100vw] h-auto  flex justify-center items-center' > 
      <div className='w-[50vw] flex gap-2 text-[1.1rem] items-center'>
      <FaHome /> <Link to="/" style={{ textDecoration: 'none' }}>
  Home
</Link>
 <IoIosArrowDropright /> Contact
        </div>  </div>

        <div className="w-[100vw] h-auto  flex justify-center items-center mt-44 mb-20">
      <div className="md:w-[70vw] h-auto flex flex-col gap-3 justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
            <p className="text-[12px] text-[gray]">CONTACT INFO</p>
            <h1 className='text-[1rem] md:text-[3rem]'><span className="text-[#499749] p-3 ">The Best Way</span>To Contact Us For The Help</h1>
            <img src="https://preview.colorlib.com/theme/farmie/img/core-img/decor.png" alt="img" /></div>
            <div className=" p-2 flex justify-between items-center flex-wrap gap-3">
            {Data.map((item)=>{
          return (
            <>
           
    <div className=" md:w-[15vw] w-[100vw] h-auto  flex flex-col justify-center items-center divanimation">
      {/* <img src={item.img} alt={item.titlt} /> */}
     {item.title==="Address" && <FaLocationDot />}
     {item.title==="Phone" && <MdEmail />}
      <p className=" mt-3 text-[gray]">{item.titlt}</p>
      <p className="font-medium">{item.Price}</p>
    </div>
           </>
          )
        })}
      
        </div>
        <hr className="w-[70vw] h-[5px] text-black" />
      </div>
    </div>
    <Review />
    <Contact />
    <Footer />
    </>
  );
}

export default ContactPage;