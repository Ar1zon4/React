import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/highway/Nav";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/ProductsPage';
import Registration from './pages/Registration';

import Details from "./pages/Details";



function App(){
   return(
      <BrowserRouter>
      <>
      <Nav />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Details/>} />
        <Route path="/register" element={<Registration />} />
        <Route path='/about' element={<About/>}/>
      </Routes>
      </>
      </BrowserRouter>
   )
}

export default App



