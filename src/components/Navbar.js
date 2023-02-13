import React from 'react';
import Logo from '../images/Logo.png'
import Title from '../images/Title.png'
import '../index.css'

const NAVBAR_BUTTONS = [
    'The Game',
    'The Fish',
    'Media',
    'Get The Game',
    'Contact Us'
];

const Navbar = ({ scrollRef }) => {

    const scrollToRef = (refIndex) => {
        scrollRef.current[refIndex].scrollIntoView();
    };

    const renderButtons = () => NAVBAR_BUTTONS.map((buttonName, index) => <button type='button' onClick={() => scrollToRef(index)}>{buttonName}</button>)

    return (
        <div className='navbar'>
            <img onClick={() => scrollToRef(0)} src={Logo} alt='Tiny Reef Logo' className='navbar--logo' />
            <div className='navbar--buttons'>
                {renderButtons()}
            </div>
        </div>
    )
}

export default Navbar;