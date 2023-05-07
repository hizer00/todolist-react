import React from 'react'
import './layout.css'

import purpleWave from '../assets/purpleWave.svg'

export default function Footer({ backgroundWhite = false }) {
  return (
    <footer>
      <img src={purpleWave} alt='purpleWave' className={'f-wave' + (backgroundWhite ? " f-wave-white" : "")} />

      <div className='f-container'>

      </div>

    </footer>
  )
}
