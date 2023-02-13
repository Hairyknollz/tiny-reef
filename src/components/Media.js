import React from 'react';
import '../index.css'
import ImageSlider from './ImageSlider.js'

const SLIDES = [
    {url: 'https://img.itch.zone/aW1hZ2UvMTI0MDg0OC83MjMyOTg2LnBuZw==/original/rNYTug.png', title: 'concept-art01'},
    {url: 'https://img.itch.zone/aW1hZ2UvMTI0MDg0OC83MjMzMDE1LnBuZw==/original/ediIDJ.png', title: 'game-menu'},
    {url: 'https://img.itch.zone/aW1hZ2UvMTI0MDg0OC83MjMzMDE3LnBuZw==/original/1CWGlH.png', title: 'game-factfile'},
    {url: 'https://img.itch.zone/aW1hZ2UvMTI0MDg0OC83MjMzMDIwLnBuZw==/original/CN%2Fg1H.png', title: 'game-screenshot01'},
    {url: 'https://img.itch.zone/aW1hZ2UvMTI0MDg0OC83MjMzMDIyLnBuZw==/original/dZ8mRe.png', title: 'game-screenshot02'},
    {url: 'https://img.itch.zone/aW1hZ2UvMTI0MDg0OC83MjMzMDIzLnBuZw==/original/B9%2BBEa.png', title: 'game-screenshot03'},
    {url: 'https://img.itch.zone/aW1hZ2UvMTI0MDg0OC83MjMzMDIxLnBuZw==/original/SfuFii.png', title: 'game-screenshot04'}
];

const Media = ({ componentRef }) => {

    const containerStyles = {
        width: '1120px',
        height: '630px',
        margin: '25px auto'
    };

    return(
        <>
            <h2 className="section-header" ref={componentRef}>Media</h2>
            <div style={containerStyles}>
                <ImageSlider slides={SLIDES} />
            </div>
        </>
    )
};

export default Media;