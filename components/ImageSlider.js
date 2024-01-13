'use client'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const ImageSlider = ({slides}) => {
  const [currentIndex,setCurrentIndex] = useState(0);
  const sliderStyles = {

    // height: "100%",
    // width: "100%",
    position: "relative",
    // alignItems: "center",
    // padding: "20px",
    textAlign:"center",
    // backgroundColor: "red",
    borderRadius:'10px',
    // boxsShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
    // border: '2px solid rgba(255, 255, 255, 0.039)' 
    
  };
  const slideStyles = {
    borderRadius:'10px',
    // width: '100%',
    height: '550px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundSize: "contain",
    backgroundSize: "cover"
    
  };
  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0,-50%)',
    left: '32px',
    fontSize: "45px",
    color: "#fff",
    zIndex:1,
    cursor: "pointer",
    // backgroundColor: "aqua"?
  };
  const rightArrowStyles = {
    // backgroundColor: "aqua",
    position: 'absolute',
    top: '50%',
    transform: 'translate(0,-50%)',
    right: '32px',
    fontSize: "45px",
    color: "#fff",
    zIndex:1,
    cursor: "pointer",
  }
  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center'
  }
  const dotStyles = {
    margin: '0 2px',
    cursor: 'pointer',
    fontSize: '50px',
    color: "var(--thirdColor)"
  }
  const goToPrevious = () => {
    const isFirstSlide = currentIndex == 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

  }
  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
      <FontAwesomeIcon style={{width: '40px',height: 'fit-content'}} icon={faArrowLeft} />
        </div>
      <div
        style={slideStyles}
      ></div>
      <div style={rightArrowStyles} onClick={goToNext}>

      <FontAwesomeIcon style={{width: '40px',height: 'fit-content'}} icon={faArrowRight} />
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide,slideIndex) => (
          <div style={dotStyles} key={slideIndex} onClick={() => goToSlide(slideIndex)}>.</div>
        ))}
      </div>
    </div>
  )
}

// import React, {useState} from 'react'
// import '@styles/About.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { SliderData } from './SliderData'
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// // const SliderData = ['@public/pictures/aboutSlider/ChicagoPhoto.png']
// const ImageSlider = ({ slides }) => {
// const [current, setCurrent] = useState(0)
// const length = slides.length

// const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1)
// }
// const nextSlide = () => {
//     setCurrent(current === length-1 ? 0 : current + 1)
// }
// // console.log(current);
// if(!Array.isArray(slides) || slides.length <=0) {return null;}

//     return (
//         <section className='slider'>
//         {/* ... (your existing code) */}
//         <FontAwesomeIcon icon={faAngleLeft} className='left-arrow' onClick={prevSlide} />
//         {SliderData.map((slide, index) => {
//           return (
//               <div className={index === current ? 'slide active' : 'slide'} key={index}>
//               {index === current && <img src={slide.image} alt="My Life" className='image' />}
//             </div>
//           );
//         })}
//         <FontAwesomeIcon icon={faAngleRight} className='right-arrow' onClick={nextSlide}/>
// 3
      // </section>
        // <section className='slider'>
        //     <FontAwesomeIcon icon={faAngleLeft} className='left-arrow' onClick={prevSlide} />
        // {SliderData.map((slide, index) => {
        //     return (
        //         <div className={index=== current ? 'slide active' : 'slide'} key={index}>
        //             {index === current && (
        //                 <img src={slide.image} alt="My Life" className='image'/>
        //                 )}

        //         </div>    
        //         )
                
        //     })}
        //     <FontAwesomeIcon icon={faAngleRight} className='right-arrow' onClick={nextSlide}/>
        // </section>
//     )
// }
export default ImageSlider;
