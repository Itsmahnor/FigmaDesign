import './Footer.css'
import { FaFacebook, FaLocationDot, FaPinterest, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
function Footer() {
  return ( 
    <>
    <div className="w-[100vw]   md:h-auto  Footer-img flex justify-center flex-wrap items-center">
      <div className='w-[80vw] h-auto flex gap-5 flex-wrap p-9 mb-4'>
        <div className='md:w-[20vw]   text-white' >
          <img src="https://preview.colorlib.com/theme/farmie/img/core-img/logo2.png
" alt="img" />
<p className='mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic impedit explicabo magni quam laborum alias quisquam cumque quae voluptas corporis, distinctio, atque tempora rem deserunt dignissimos tempore molestiae eaque qui?</p>
<p className='flex gap-1'> <span className='text-[#69ca69]'><FaLocationDot /></span>120 Raymond Rd, New York</p>
<p className='flex gap-1'> <span className='text-[#69ca69]'><MdEmail /></span>info.deercreative@gmail.com</p>
<p className='flex gap-1'> <span className='text-[#69ca69]'><FaPhoneAlt /></span>+84 223 9000</p>
        </div>
        <div className='md:w-[20vw]  text-white' >
          <h1  className='text-[20px]'>Quick Links</h1>
          <div className='flex gap-16 mt-2'>
          <div>
          <p>Purchase</p>
          <p>Shipping</p>
          <p>Return</p>
          <p>Payments</p>
          <p>Guide</p>
          <p>News</p>
          </div>
         <div>
         <p>Purchase</p>
          <p>Shipping</p>
          <p>Return</p>
          <p>Payments</p>
          <p>Guide</p>
          <p>News</p>
         </div>
         </div>
        </div>
        <div className='md:w-[15vw]  text-white' >
          <h1  className='text-[20px]'>Recent News</h1>
         <div className='flex gap-2 mt-6'>
<img src="https://preview.colorlib.com/theme/farmie/img/bg-img/4.jpg" alt="" className='w-[50px] h-[50px]' />
<p className='text-[#d8caca]'>WA’s largest farming business on the market
  <span className='text-[white]'> 18 Aug 2018</span>
</p>
         </div>
         <div className='flex gap-2 mt-6'>
<img src="https://preview.colorlib.com/theme/farmie/img/bg-img/5.jpg" alt="" className='w-[50px] h-[50px]' />
<p className='text-[#d8caca]'>WA’s largest farming business on the market
  <span className='text-[white]'> 18 Aug 2018</span>
</p>
         </div>
   
        
        </div>
        <div className='md:w-[10vw]   text-white' >
          <h1  className='text-[20px]'>Stay Connected</h1>

          <p className='flex gap-3 text-[1.2rem] mt-9'> <span className=' border border-[#69ca69] rounded-full p-2 transition-all hover:bg-[#69ca69]'><FaFacebook /></span>Facebbok</p>
<p className='flex gap-3 text-[1.2rem] mt-9'> <span className='border border-[#69ca69] rounded-full p-2 transition-all hover:bg-[#69ca69]'><FaTwitter  /></span>Twitter</p>
<p className='flex gap-3 text-[1.2rem] mt-9'> <span className='border border-[#69ca69] rounded-full p-2 transition-all hover:bg-[#69ca69]'><FaPinterest /></span>Pinterset</p>
        </div>
      </div>
    <div className='w-[100vw]  h-auto bg-black pt-3 text-white absolute bottom-0 text-center flex  justify-center items-center gap-16 flex-wrap'>
<p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
<p className='flex justify-center items-center gap-4'><span>About</span> 
<span>Produce </span>
<span>Practice</span>
<span> Projects</span>
</p>
    </div>
    </div>

    </>
   );
}

export default Footer;