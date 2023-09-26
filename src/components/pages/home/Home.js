import React from 'react';
import './Home.scss'
import Slider from '../../slider/Slider.js'
import HomeInfoBox from './HomeInfo';
import { productData } from '../../carousel/Data';
import CarouselItem from '../../carousel/CarouselItem';
import ProductCarousel from '../../carousel/Carousel';
import ProductCategory from './ProductCategory';
import FooterLinks from '../../footer/FooterLinks';


const PageHeading = ({heading,btnText})=>{


  return(
    <>
    <div className="--flex-between">
      <h2 className="--fw-thin">{heading}</h2>
      <button className="--btn">
      {btnText}
      </button>
      
    </div>
    <div className='--hr'></div>
   
    </>
  )
}

const Home = () => {
  const productss = productData.map((item)=>
  (
    <div key={item.id}>
      <CarouselItem
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}/>
    </div>
  )
  )
  return (
    <>
      <Slider/>
      <section >
        <div className="container">
        <HomeInfoBox/>
        <PageHeading heading={"Latest Products"} btnText = {"Shop Now>>>"} />
      <ProductCarousel products={productss}/>
        </div>
         
      </section>
      <section className='--bg-grey'>
        <div className="container">
       <h4>Category</h4>
       <ProductCategory/>
        </div>
         
      </section>
      <section >
        <div className="container">

        <PageHeading heading={"Mobile Phones"} btnText = {"Shop Now!!!"} />
      <ProductCarousel products={productss}/>
        </div>
         
      </section>
      <FooterLinks/>
    </>
  );
};
export default Home;
