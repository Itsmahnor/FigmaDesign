
import { FaPlay } from "react-icons/fa";

function AboutUs() {
  return (
    <>
    <div className="w-[100vw] h-auto my-32  flex justify-center items-center ">
      <div className="md:w-[50vw]  md:h-[80vh] h-auto flex flex-wrap  ">
<div className="md:w-[25vw] p-2 h-auto ">
<h3 className="text-[15px] text-[gray]">About Us</h3>
<h1><span className="text-[#3ea33e]">Let Us</span> Tell You Our Story</h1>
<img src="https://preview.colorlib.com/theme/farmie/img/core-img/decor.png" alt="img" />
<p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non dolorem assumenda eligendi veniam officiis enim nam, eaque, ad veritatis deserunt, maxime corporis! Architecto culpa fugit deleniti sunt id doloribus aperiam.
</p>
<button className=" px-6 py-3 w-[150px] hover:bg-black hover:text-white transition-all duration-2000 button-animate2 bg-[#3ea33e]">Read more</button>
</div>
<div className="md:w-[25vw] h-auto flex gap-11  flex-wrap justify-center ">
<div className="w-80 h-80 p-2 relative overflow-hidden ">
  <img 
    src="https://preview.colorlib.com/theme/farmie/img/bg-img/6.jpg
" 
    alt="image" 
    className="h-full w-full object-cover rounded-full filter brightness-75 transition duration-300 hover:brightness-50" 
  />
  <p className="absolute inset-0 flex justify-center items-center text-white font-bold">
    <FaPlay className="text-[2rem]" />
  </p>
</div>



</div>
      </div>
    </div>
    </>
    );
}

export default AboutUs;