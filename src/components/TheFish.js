import React from 'react';
import '../index.css'
import FishContainer from './FishContainer';
import Clownfish from '../images/Clownfish.png'
import MoorishIdol from '../images/moorishidol.png'
import Sardine from '../images/sardines.png'
import PaletteSurgeon from '../images/palettesurgeonfish.png'
import RedSnapper from '../images/redsnapper.png'
import Cod from '../images/cod.png'

const FISH_SPECIES = [
    {name: 'Clownfish', imgSrc: Clownfish, alt: 'Clownfish'},
    {name: 'Moorish Idol', imgSrc: MoorishIdol, alt: 'Moorish Idol'},
    {name: 'Sardine', imgSrc: Sardine, alt: 'Sardine'},
    {name: 'Palette Surgeon', imgSrc: PaletteSurgeon, alt: 'PaletteSurgeon'},
    {name: 'Red Snapper', imgSrc: RedSnapper, alt: 'RedSnapper'},
    {name: 'Cod', imgSrc: Cod, alt: 'Cod'},
];

const renderFish = () => FISH_SPECIES.map((el) => <FishContainer {...el} />)

const TheFish = ({ componentRef }) => {
    return(
        <div >
            <h2 className="section-header" ref={componentRef}>The Fish</h2>
            <div className='fishSection'>
                {renderFish()}
            </div>
        </div>   
    )
}

export default TheFish;
