import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Slider.scss';
import {BsArrowRightCircle} from 'react-icons/bs';
import {BsArrowLeftCircle} from 'react-icons/bs';
import sliderdata from './SliderData';
const Slider = () => {
    const navigate = useNavigate();

    const [currentSlide,setCurrentSlide] = useState(0);
    const slideLength = sliderdata.length;
    const autoscroll = true;
    let slideInterval;
    const intervalTime = 5000;

    const prevSlide = ()=>{
        setCurrentSlide(currentSlide===0?slideLength-1:currentSlide-1);
    };
    const nextSlide = ()=>{
        setCurrentSlide(currentSlide===slideLength-1?0:currentSlide+1);

    };
    useEffect(()=>{
        setCurrentSlide(0);
    },[])
    useEffect(()=>{
        if (autoscroll){
            const auto = ()=>{
                slideInterval = setInterval(nextSlide,intervalTime)

            }
            auto();
        }
        return ()=>clearInterval(slideInterval)
    },[currentSlide,intervalTime,autoscroll])

  return (
    <div className='slider'>
        <BsArrowLeftCircle className='arrow prev' onClick={prevSlide}/>
        <BsArrowRightCircle className='arrow next' onClick={nextSlide}/>
      {sliderdata.map((slide,index)=>{
        const {image,heading,desc} = slide;
        return(
            <div key={index} className={index===currentSlide?"slide current":"slide"}>
                {
                    index===currentSlide && (
                        <>
                        <img src={image} alt="Slider image" />
                        <div className="content">
                            <span className="span1"></span>
                            <span className="span2"></span>
                            <span className="span3"></span>
                            <span className="span4"></span>
                            <h1>{heading}</h1>
                            <p>{desc}</p>
                            <hr />
                            <button className='--btn --btn-primary' onClick={()=>navigate('/shop')} >
                                Shop Now 
                            </button>
                        </div>
                        </>
                    )
                }
                </div>
        )
      })}
    </div>
  )
}

export default Slider;
