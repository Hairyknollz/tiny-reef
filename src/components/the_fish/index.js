import React from 'react';
import '../index.css'
import FishContainer from './FishContainer';
import { FISH_SPECIES } from './constants';

const TheFish = ({ componentRef }) => {

    const renderFish = () => FISH_SPECIES.map((el) => <FishContainer {...el} />)
    
    return(
        <div >
            <h2 className="section-header-top" ref={componentRef}>The Fish</h2>
            <div className='fishSection'>
                {renderFish()}
            </div>
        </div>   
    )
}

export default TheFish;
