import Data from './AboutData.json'


function AboutCustomer() {
  return ( 
    <>
        <div className="w-[100vw] h-auto  flex justify-center items-center mt-48 mb-20">
      <div className="md:w-[70vw] h-auto flex flex-col gap-3 justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
            <p className="text-[15px] text-[gray]">MEET OUR TEAM</p>
            <h1 className='text-[1rem] md:text-[3rem]'><span className="text-[#499749] p-3 ">The Great Team</span>Will Always Help You</h1>
            <img src="https://preview.colorlib.com/theme/farmie/img/core-img/decor.png" alt="img" /></div>
            <div className=" p-2 flex justify-between items-center flex-wrap gap-3">
        {Data.map((item)=>{
          return (
            <>
           
    <div className=" md:w-[15vw] w-[100vw] h-auto  flex flex-col justify-center items-center divanimation">
      <img src={item.img} alt={item.titlt} />
      <p className=" mt-3 text-[gray]">{item.titlt}</p>
      <p className="font-medium">{item.Price}</p>
    </div>
           </>
          )
        })}
        </div>
        {/* <button className="bg-green-500 px-6 py-3 mt-7 w-[150px] hover:bg-black hover:text-white transition-all duration-2000 button-animate">Contact Us</button> */}
      </div>
    </div>
    </>
   );
}

export default AboutCustomer;