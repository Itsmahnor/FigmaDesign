import Data from './ProductData.json'


function Products() {
  return ( 
    <>
    <div className="w-[100vw] h-auto flex justify-center items-center my-44">
      <div className="md:w-[70vw] h-auto flex flex-col gap-3 justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
            <p className="text-[12px] text-[gray]">FEATURED PRODUCTS</p>
            <h1 className='text-[1rem]'><span className="text-[#499749] p-3 ">Our Product</span>Are Highest Quality</h1>
            <img src="https://preview.colorlib.com/theme/farmie/img/core-img/decor.png" alt="img" /></div>
            <div className=" p-2 flex justify-between items-center flex-wrap gap-3">
        {Data.map((item)=>{
          return (
            <>
           
    <div className=" md:w-[15vw] w-[100vw] h-auto  flex flex-col justify-center items-center">
      <img src={item.img} alt={item.titlt} />
      <p className=" mt-3 text-[gray]">{item.titlt}</p>
      <p className="font-medium">{item.Price}</p>
    </div>
           </>
          )
        })}
        </div>
        <button className="bg-green-500 px-6 py-3 mt-7 w-[150px] hover:bg-black hover:text-white transition-all duration-2000 button-animate">Contact Us</button>
      </div>
    </div>
    </>
   );
}

export default Products;