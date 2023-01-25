import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Product from './About';

function Details() { 
        const [data, setdata] = useState({});
       const {id}= useParams();
       const  getSingleProduct = async ()=>{
        try{
              let prod = await axios(`https://dummyjson.com/products/${id}`)
               setdata(prod.data)
            }catch(err){
          console.log(err)
        }
      }
       useEffect(()=>{
        getSingleProduct()
        console.log(data)
        }, []);
      
        return ( 
          <>
          {data ?
          <div className='mate'>
          <div className='rush'>
         <img src ={data.images > 0 ? data.images[0] : data.thumbnail} />
         <div className='pot'>
           Price:{data.title} 
           <p>
           Price: {data.rating}
           </p>
           <p>
           Description:{data.description}<br/>
           </p>
          

           </div>
           <div>
           <button className='kkk'>Add to Cart</button>
           <button className='kkk'>Review</button>
           </div>

           <div className='sun'>
           
           <img src ={data.images > 0 ? data.images.length[2] : data.thumbnail} />
           <img src ={data.images > 0 ? data.images.length[1] : data.thumbnail} />
           <img src ={data.images > 0 ? data.images.length[0] : data.thumbnail} />
           </div>
           </div>
          </div> : "Loading ..... "}
                
          </>
        )
}
      
      export default Details