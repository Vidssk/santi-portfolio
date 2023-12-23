'use client'

import React, {useState} from 'react'
import '@styles/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SliderData } from './SliderData'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}
const nextSlide = () => {
    setCurrent(current === length-1 ? 0 : current + 1)
}
console.log(current);
if(!Array.isArray(slides) || slides.length <=0) {return null;}

    return (
        <section className='slider'>
            <section className='arrows'>
            <FontAwesomeIcon icon={faAngleLeft} className='left-arrow' onClick={prevSlide} />
            <FontAwesomeIcon icon={faAngleRight} className='right-arrow' onClick={nextSlide}/>
            </section>
        {SliderData.map((slide, index) => {
                return (
                <div className={index=== current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                    <img src={slide.image} alt="My Life" className='image'/>
                    )}

                </div>    
                )

            })}
        </section>
    )
}
export default ImageSlider;
