import React from 'react';
import './Carousel.scss';
import { shortenText } from '../../utils/Index';
import {Link} from 'react-router-dom';

const CarouselItem = ({url,name,price,description}) => {
  return (
    <div className='carouselItem'>
        <Link to='/product-details'>
            <img className='product--image' src={url} alt="Products" />
            <p className='price'>{`$${price}`}</p>
            <h4>{shortenText(name,18)}</h4>
            <p className='--mb2'>{shortenText(description,26)}</p>
        </Link>
        <button className="--btn --btn-primary --btn-block">Add To Cart</button>
      
    </div>
  )
}

export default CarouselItem
