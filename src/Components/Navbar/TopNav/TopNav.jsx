import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import './TopNav.css'

function TopNav() {
  return ( 
    <>
    <div className="relative z-1 w-100 bg-[#f2f4f5] pt-2 text-[12px]  text-[#9b9696] ">
<div className="md:w-[1140px] w-100 px-[15px] mx-auto  sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" >
<div className="flex mx-[-15px] flex-wrap justify-between align-center gap-2 top-header-content">
<div className="text-div">
  <p>Welcome to <span className="text-[green]">Farmie</span>, we hope you will enjoy our products and have good experience</p>
</div>
<div className="flex gap-5">
  <div className="flex justify-center align-center gap-1"><MdOutlineEmail className=" text-[1rem]" /> <p className="email">Email: infodeercreative@gmail.com</p> </div>

  <div className="flex align-center gap-1" > <IoCallOutline className=" text-[1rem]" /> <p className="phone">Call Us: +84 223 9000</p></div>
</div>
</div>
</div>
    </div>
    </>
   );
}

export default TopNav;