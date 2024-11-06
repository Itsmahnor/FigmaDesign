
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import TopNav from './Components/Navbar/TopNav/TopNav';
import BottomNav from './Components/Navbar/BottomNav/BottomNav';
import ProductPage from './Pages/ProductPage';
import FarmingPage from './Pages/FarmingPage';
import NewsPage from './Pages/News';
import Contact from './Pages/ContactPage';
import ContactPage from './Pages/ContactPage';

function App() {
  const router=createBrowserRouter([
  
    {
      path:"/",
      element:(<><TopNav /> <BottomNav />   <Home />  </>)
    },
    {
      path:"/about",
      element:(<> <TopNav /> <BottomNav /> <About /> </>)
    },
    {
      path:"/product",
      element:(<> <TopNav /> <BottomNav /> <ProductPage /> </>)
    },
    {
      path:"/farm",
      element:(<> <TopNav /> <BottomNav /> <FarmingPage /> </>)
    },
    {
      path:"/news",
      element:(<> <TopNav /> <BottomNav /> <NewsPage />    </>)
    },
    {
      path:"/contact",
      element:(<> <TopNav /> <BottomNav /> <ContactPage />    </>)
    },
  ]);

  return (
    <>
 
    <RouterProvider router={router} />


    </>
  )
}

export default App
