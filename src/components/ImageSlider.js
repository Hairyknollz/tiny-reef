import React, { useState } from 'react'

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative'
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '-32px',
        fontSize: '45px',
        color: 'black',
        zIndex: 1,
        cursor: 'pointer'
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '-55px',
        fontSize: '45px',
        color: 'black',
        zIndex: 1,
        cursor: 'pointer'
    };

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5px'
    }; 

    const dotStyles = {
        margin: "0 10px",
        cursor: "pointer",
        fontSize: "30px"
    };

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return(
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrev}>❰</div>
            <div style={rightArrowStyles} onClick={goToNext}>❱</div>
            <div style={slideStyles} className='border'></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div 
                        key={slideIndex} 
                        style={dotStyles} 
                        onClick={() => goToSlide(slideIndex)}
                    >●</div>
                ))}
            </div>
        </div>
    )
};

export default ImageSlider;