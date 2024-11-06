import './BelowAbout.css'
import './BelowAbout.css'

function BelowAbout() {
  return (
    <>
      <div className="w-[100vw] h-auto bg-[#f2f4f5]">
        <div className="w-[100vw] flex flex-wrap">
          <div className="w-[40vw]   h-auto   ">
            <div className="Background-img  w-[40vw]  h-[100%]"></div>
          </div>
          
          <div className="w-[60vw]   h-auto p-6 sm:p-4 lg:p-[13rem] flex flex-col gap-5  ">
         
              <div>
                <p className="text-gray-500 text-sm">WHAT WE DO</p>
                <h1><span className="text-[#3da03d]">Our Produce</span> Is Mainstay For Us</h1>
                <img src="https://preview.colorlib.com/theme/farmie/img/core-img/decor.png" alt="decorative line" />
                <p className="text-sm mt-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorum voluptatum corrupti vero similique! Quasi rerum necessitatibus repellendus? Doloribus tenetur vel possimus voluptas? Itaque reiciendis necessitatibus ullam distinctio, sequi dolores.</p>
              </div>

              <div className="flex flex-wrap gap-14">
                <div className="md:w-1/3 w-full">
                  <div className="flex gap-4">
                    <img src="https://preview.colorlib.com/theme/farmie/img/core-img/s2.png" alt="Meat & Eggs" className="" />
                    <h1 className="text-xl">Meat & Eggs</h1>
                  </div>
                  <p className="mt-2 text-gray-500">Intiam eu sagittis est, aster cosmo lacini libero...</p>
                </div>
                
                <div className="md:w-1/3 w-full">
                  <div className="flex gap-4">
                    <img src="https://preview.colorlib.com/theme/farmie/img/core-img/s3.png" alt="Milk & Cheese" />
                    <h1 className="text-xl">Milk & Cheese</h1>
                  </div>
                  <p className="mt-2 text-gray-500">Intiam eu sagittis est, aster cosmo lacini libero...</p>
                </div>
                
                <div className="md:w-1/3 w-full">
                  <div className="flex gap-4">
                    <img src="https://preview.colorlib.com/theme/farmie/img/core-img/s4.png" alt="Rice & Corn" />
                    <h1 className="text-xl">Rice & Corn</h1>
                  </div>
                  <p className="mt-2 text-gray-500">Intiam eu sagittis est, aster cosmo lacini libero...</p>
                </div>
                
                <div className="md:w-1/3 w-full">
                  <div className="flex gap-4">
                    <img src="https://preview.colorlib.com/theme/farmie/img/core-img/s1.png" alt="Fruit & Vegetable" />
                    <h1 className="text-xl">Fruit & Vegetable</h1>
                  </div>
                  <p className="mt-2 text-gray-500">Intiam eu sagittis est, aster cosmo lacini libero...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default BelowAbout;
