import React from 'react';
import Title from '../images/Title.png'
import '../index.css'

const TheGame = ({ componentRef }) => {
    return(
        <div >
            <img src={Title} alt='Tiny Reef Title' className='body--title' ref={componentRef}/>
            <div className='trailer'>
                <iframe width='1120' height='630' className='border' src="https://www.youtube.com/embed/r2ZCFOgtrpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p className='gamedesc border'>
                Tiny Reef is an educational management game which simulates natural selection amongst a small fish population within a fish tank. The player takes on the role of a scientist who is tasked with experimenting with the traits of the various fish in order to achieve a specific balance within the tanks ecosystem.
            </p>
        </div>
        
    )
}

export default TheGame;
