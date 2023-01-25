import { Carousel } from 'react-bootstrap';
import Product from './ProductsPage';



function Home(){
   
    return(
        
        <div className='low'>
            <p className='don'>
            <input id='input' type='text' placeholder='AWG*' />
            </p>
            
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-80 h-60 "
      src="images/perfume.png"
      alt=""
    />
    <Carousel.Caption>
      <h3>Get the Best Fragrance</h3>
      <p>Great Odour</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 h-60"
      src="images/phone 1.jpg"
      alt=""
    />

    <Carousel.Caption>
      <h3>Latest Phones </h3>
      <p>Enjoy life</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 h-60"
      src="images/laptop.jpg"
      alt=""
    />

    <Carousel.Caption>
      <p>Solid Laptops of effective work</p>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div>
    <Product/>
</div>


</div>

 )
 
}



export default Home