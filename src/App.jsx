import { useState, useRef, useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './pages/HeroPage/Hero'
import What from './pages/WhatAreTempehChips/What'
import OurFlavors from './pages/OurFlavors/OurFlavors'
import WhyHowWhere from './pages/WhyHowWhere/WhyHowWhere'
import OurStory from './pages/OurStory/OurStory'
import ForIntParties from './pages/ForIntParties/ForIntParties'
import Certs from './pages/Certs/Certs'

import './App.css'

const App = () => {
  const [preloader, setPreloader] = useState(true);

  const [timer, setTime] = useState(3);

  const id = useRef(null);

  const clear = () => {
    if (id.current != null) {
      clearInterval(id.current);
      id.current = null;
      setPreloader(false);
    }
  }

  useEffect(() => {
    id.current = setInterval(() => {
      setTime((prevTimer) => {
        const newTimer = prevTimer - 1;
        // console.log(newTimer);
        if (newTimer === 0) {
          clear(); // clear when timer == 0
        }
        return newTimer;
      });
    }, 1000);

    // return cleanup function for when the component unmounts
    return () => {
      clear();
    };
  }, []);

  return (
    <>
      {preloader ? (
        <div className='loader-wrapper absolute'>
          <h1>mamame whole foods</h1>
        </div>
      ) : (
        <main>
          <Header />
          <Hero />
          <What/>
          <Certs/>
          <OurFlavors />
          <WhyHowWhere />
          <OurStory/>
          <ForIntParties />
        </main>
        )}
  </>
  )
}

export default App
