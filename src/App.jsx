
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
import ProductPage from './Pages/Product';
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
    }
  ]);

  return (
    <>
 
    <RouterProvider router={router} />


    </>
  )
}

export default App
