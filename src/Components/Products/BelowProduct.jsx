
import './Product.css'

function BelowProduct() {
  return ( 
    <>

    <div className="w-[100vw] h-auto lg:h-[70vh] flex justify-center items-center  bg-image">
      <div className="md:w-[70vw] h-auto flex flex-col gap-3 justify-center items-center ">
      <div className="flex flex-col justify-center items-center p-4 text-white">
            <p className="text-[15px] ">What We Do</p>
            <h1><span className=" p-3 ">Our Produce</span>Is Mainstay For Us</h1>
            <img src="https://preview.colorlib.com/theme/farmie/img/core-img/decor.png" alt="img" />
            <p  className="mt-12 w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at diam convallis ligula cursus bibendum sed at enim. Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos himenaeos.</p>
<form  className='mt-12'>
  <input type="email" name="" id="" placeholder="enter your email" className="w-[50%] h-[39px] px-24 border-[#55c455] " />
  <button className="bg-green-500 px-6 py-2  w-[150px] hover:bg-black hover:text-white ">Contact Us</button>
</form>

            </div>
    </div>
    </div>
   
    </>
   );
}

export default BelowProduct