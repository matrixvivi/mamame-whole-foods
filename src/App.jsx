import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './pages/HeroPage/Hero'
import What from './pages/WhatAreTempehChips/What'
import OurFlavors from './pages/OurFlavors/OurFlavors'
import WhyHowWhere from './pages/WhyHowWhere/WhyHowWhere'
import OurStory from './pages/OurStory/OurStory'
import ForIntParties from './pages/ForIntParties/ForIntParties'
import Certs from './pages/Certs/Certs'

import './App.css'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
