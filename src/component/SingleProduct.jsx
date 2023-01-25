import Button from './Button';
import { Link } from 'react-router-dom';
import './Product.css';
function SingleProduct(props){
    console.log(props)
    const {id, title, description,price, discountPercentage, rating, stock, brand, category, thumbnail, images } = props;


    return(
       
        
        <div className='single_col'>

        
            <div id='oo' >
            <img src={images[0]} alt={title}  />
                <p className="ll">{description}</p>
             <p className='twist'> Price: {price}</p> 
            
             <span className='pp'>Discount: {discountPercentage}</span>
             <Link to={`/product/${id}`} className="btn">Details</Link>
            <Button/>
          </div>
         
            
            
            </div>
            

    
        
    )
}
export default SingleProduct