import SingleProduct from '../component/SingleProduct';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Details from './Details'
import App from '../App.css';

function ProductsPage() {
    const [products, setProducts] =useState([]);

    async function getProduct(){
      try{
      let product = await axios('https://dummyjson.com/products');
      if(product.status === 200){
        setProducts(product.data.products)
      }
      }catch(err){
        console.log(err)
      }
    } 
      useEffect(()=>{
       getProduct();
      }, [])



      return(
        <div className="main">
        {/* Greeting {product} */}
          {products.length > 0 ? products.map((value, index)=>{
            const {name, img, price, description} = value;
           return(
              <SingleProduct key={index}  {...value} />
           )
          }) :"Loading..."}
    
        
          
          </div>
        )
 
}


         
    


export default ProductsPage 
