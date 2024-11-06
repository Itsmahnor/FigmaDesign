import TopNav from "../Navbar/TopNav/TopNav";
import BottomNav from "../Navbar/BottomNav/BottomNav";
import './Header.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, 
    arrows: true,
  };

  return ( 
    <>
      <div className="w-[100vw] h-[100vh] ">

        <div className="slider-container"> 
          <Slider {...settings}>
            <div className="relative">
              <img 
                src="https://preview.colorlib.com/theme/farmie/img/bg-img/7.jpg.webp" 
                alt="Slide 1"  
                style={{ width: '100%', height: '100vh', objectFit: 'cover', filter: 'brightness(0.7)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center w-[100vw] z-10">
                <div className="md:w-[50vw] md:h-[20vh] flex flex-col text-white space-y-4">
                  <h1 className="md:text-[3rem] font-bold animate">The Heart of Farm is The True Center of Our Universe</h1>
                  <p className="md:text-lg animate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ex facere nesciunt dolores, similique veritatis mollitia natus quis molestiae aperiam esse necessitatibus earum repellendus aliquam, itaque sed! Quasi, velit aliquam!</p>
                  <button className="bg-green-500 px-6 py-3 w-[150px] hover:bg-black hover:text-white transition-all duration-2000 button-animate">Contact Us</button>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://preview.colorlib.com/theme/farmie/img/bg-img/1.jpg.webp" 
                alt="Slide 2" 
                style={{ width: '100%', height: '100vh', objectFit: 'cover', filter: 'brightness(0.7)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center w-[100vw] p-3 z-10">
                <div className="md:w-[50vw] md:h-[20vh] flex flex-col text-white space-y-4">
                  <h1 className="md:text-[3rem] font-bold animate2">The Heart of Farm is The True Center of Our Universe</h1>
                  <p className="md:text-lg animate2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ex facere nesciunt dolores, similique veritatis mollitia natus quis molestiae aperiam esse necessitatibus earum repellendus aliquam, itaque sed! Quasi, velit aliquam!</p>
                  <button className="bg-green-500 px-6 py-3 w-[150px] hover:bg-black hover:text-white transition-all duration-2000 button-animate2">Contact Us</button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Header;
