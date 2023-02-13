import React, { useRef } from 'react'
import Navbar from './components/Navbar.js'
import TheGame from './components/TheGame.js'
import Media from './components/Media.js'
import GetTheGame from './components/GetTheGame.js'
import ContactUs from './components/ContactUs.js'
import TheFish from './components/TheFish.js'

const PAGE_ELEMENTS = [
  TheGame,
  TheFish,
  Media,
  GetTheGame,
  ContactUs
]

function App() {

  const scrollRefs = useRef([]);

  const renderSections = () => PAGE_ELEMENTS.map((Component, index) => <Component componentRef={(el) => (scrollRefs.current[index] = el)}/>)

  return (
    <div>
      <nav className='navbar--sticky'>
        <Navbar scrollRef={scrollRefs}/>
      </nav>
      <main>
        {renderSections()}
      </main>
    </div>
  );
}

export default App;
