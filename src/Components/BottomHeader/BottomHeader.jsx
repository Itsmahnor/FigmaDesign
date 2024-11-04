
import './BottomHeader.css'

function BottomHeader() {
  return (
    <>
    <div className="w-[100vw] h-auto mt-5  flex justify-center items-center  ">
      <div className="md:w-[60vw]  md:h-[80vh] h-auto flex flex-col ">
<div className="w-full h-auto">
<img src="https://preview.colorlib.com/theme/farmie/img/bg-img/2.jpg" alt="image" className=" h-[100%] w-[100%] object-cover"  />
</div>
<div className="w-full h-auto flex gap-11  flex-wrap justify-center">
<div className="h-auto mt-5 w-auto flex flex-col gap-4 items-center divanimate  ">
  <img src="https://preview.colorlib.com/theme/farmie/img/core-img/digger.png" alt="div1" className="h-[50%] w-[50%] object-contain" />
<h1 className="text-[1.5rem]">Best Services</h1>
</div>
<div className=" w-auto h-auto mt-5 flex flex-col gap-4 items-center divanimate1 ">
  <img src="https://preview.colorlib.com/theme/farmie/img/core-img/windmill.png" alt="div1" className="h-[50%] w-[50%] object-contain" />
<h1 className="text-[1.5rem]">Farm Experiences</h1>
</div>
<div className="h-auto mt-5 w-auto flex flex-col gap-4 items-center divanimate2">
  <img src="https://preview.colorlib.com/theme/farmie/img/core-img/cereals.png" alt="div1" className="h-[50%] w-[50%] object-contain " />
<h1 className="text-[1.5rem]">100% Natural</h1>
</div>
<div className="h-auto mt-5 w-auto flex flex-col gap-4 items-center divanimate3 ">
  <img src="https://preview.colorlib.com/theme/farmie/img/core-img/tractor.png" alt="div1" className="h-[50%] w-[50%]  object-contain" />
<h1 className="text-[1.5rem]">Farm Equipment</h1>
</div>
<div className="h-auto mt-5 w-auto flex flex-col gap-4 items-center divanimate4 ">
  <img src="https://preview.colorlib.com/theme/farmie/img/core-img/sunrise.png" alt="div1" className="h-[50%] w-[50%] object-contain  " />
<h1 className="text-[1.5rem]">Organic Food</h1>
</div>
</div>
      </div>
    </div>
    </>
    );
}

export default BottomHeader;