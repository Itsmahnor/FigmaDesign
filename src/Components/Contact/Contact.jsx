
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function Contact() {
  return (  
    <>
     <div className="w-[100vw] h-auto  flex justify-center items-center gap-3 mt-[100vh] md:mt-[50vh]  flex-wrap">
      <div className="md:w-[50vw] h-auto flex  flex-col gap-3 justify-center items-center
        ">
      <div className="w-[50%] ">
      <p className="text-[12px] text-[gray]">CONTACT NOW</p>
            <h1 className='text-[1rem] md:text-[3rem] '><span className="text-[#499749] p-3 ">Get In  Touch</span>With Us</h1>
            <img src="https://preview.colorlib.com/theme/farmie/img/core-img/decor.png" alt="img" /></div>
            <form className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
                {/* Name and Email side by side */}
                <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>

                {/* Subject field - full width */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Message field - full width */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                        name="message"
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
      </div>
      <div className="md:w-[40%] w-[80%]">
      <div style={{ height: '50vh', width: '90%' }}>
            <MapContainer
                center={[51.505, -0.09]} // Coordinates for initial center
                zoom={13}                // Initial zoom level
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
      </div>
      </div>
    
    </>
  );
}

export default Contact;