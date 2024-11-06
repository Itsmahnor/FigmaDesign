import Data from './FarmingData.json'


function Practices() {
  return ( 
    <div className="w-full h-auto flex justify-center items-center mt-[50vh] ">
      <div className="w-[100vw] h-auto  flex justify-center items-center mt-44 mb-20">
      <div className="md:w-[70vw] h-auto flex flex-col gap-3 justify-center items-center ">  
      <div className="flex flex-col justify-center items-center">
            <p className="text-[12px] text-[gray]">MAKE THE GREEN WORLD</p>
            <h1 className='text-[1rem] md:text-[3rem] '><span className="text-[#499749]  ">Farming Practices</span>To Preserve Land & Water</h1>
            <img src="https://preview.colorlib.com/theme/farmie/img/core-img/decor.png" alt="img" /></div>
            <div className=" p-2 flex justify-between items-center flex-wrap gap-3 mt-10">
        {Data.map((item)=>{
          return (
            <>
           
    <div className=" md:w-[20vw] w-[100vw] h-auto  flex flex-col justify-center items-center p-3 ">
      <div className='relative'>
      <img src={item.img} alt={item.titlt} />
      <div className='w-[70px] h-[70px] rounded-full flex justify-center bg-white items-center absolute top-[90%] left-[40%] '><img src={item.icon} alt="" /></div>
      </div>
    
      <p className=" mt-5 text-[gray]">{item.titlt}</p>
      <h1 className='text-[1.5rem] hover:text-[green] ttransition-all duration-2000  cursor-pointer'>{item.subheading}</h1>
      <p className="text-[gray]">{item.text}</p>
     
    
    </div>
           </>
          )
        })}
        </div>
       
      </div>
    </div>
  </div>
   );
}

export default Practices;