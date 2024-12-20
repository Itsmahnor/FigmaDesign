import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import './TopNav.css'
function TopNav() {
  return (
    <div className="w-full  bg-[#f2f4f5] py-2  text-[12px] text-[#9b9696] z-20 relative">
      <div className="container mx-auto flex justify-between gap-14 items-center px-4">
        <div className="text-div ">
          <p>Welcome to <span className="text-green-600">Farmie</span>, we hope you will enjoy our products and have a good experience</p>
        </div>
        <div className="flex gap-3" >
          <div className="flex items-center gap-1">
            <MdOutlineEmail className="text-lg" />
            <p className="pt-2 email">Email: infodeercreative@gmail.com</p>
          </div>
          <div className="flex items-center gap-1">
            <IoCallOutline className="text-lg " />
            <p className="pt-2 phone">Call Us: +84 223 9000</p>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
