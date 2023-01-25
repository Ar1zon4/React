import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Product from '../../pages/ProductsPage';
import Registration from '../../pages/Registration';
function Nav() {
  return (
     <header>
        <nav>
     <Link to="/home" > Home</Link>
     <Link to="/product" > Product</Link>
     <Link to="/register">Register</Link>
     <Link to="/about">About</Link>
     
     
        </nav>
     </header>
  )
}

export default Nav