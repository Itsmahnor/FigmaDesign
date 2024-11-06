import './Product.css';

    function BelowProduct() {
  return (
    <div className="w-full min-h-auto flex justify-center items-center bg-image md:p-20">
      <div className="md:w-[70vw] w-full h-auto flex flex-col gap-4 justify-center items-center p-4">
        <div className="flex flex-col justify-center items-center text-white text-center">
          <p className="text-sm">What We Do</p>
          <h1 className="sm:text-2xl md:text-[3rem]">
            <span className="p-3">Our Produce</span> Is Mainstay For Us
          </h1>
          <img src="https://preview.colorlib.com/theme/farmie/img/core-img/decor.png" alt="decorative" />
          <p className="mt-8 w-[80%] md:w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at diam convallis ligula cursus bibendum sed at enim. Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos himenaeos.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 border-2 border-[#55c455]"
            />
            <button className="bg-green-500 px-6 py-2 text-white hover:bg-black hover:text-white transition-colors duration-300">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default BelowProduct;
