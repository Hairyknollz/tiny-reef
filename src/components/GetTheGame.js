import React from 'react';
import '../index.css'

const GetTheGame = ({ componentRef }) => {
    return(
        <>
            <h2 className="section-header" ref={componentRef}>Get The Game</h2>
            <div className='getthegame--body'>
                <div className='getthegame--content border'>
                    <h3>
                        Available for free on Itch.IO!
                    </h3>
                    <div className='itchembed'>
                        <iframe frameborder="0" title="Itch.Io Tiny Reef" src="https://itch.io/embed/1240848?linkback=true&amp;border_width=0&amp;bg_color=00FFFF&amp;fg_color=000000&amp;link_color=0018de&amp;border_color=00FFFF" width="550" height="165"><a href="https://biglittygames.itch.io/tiny-reef">Tiny Reef by Jon</a></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetTheGame;