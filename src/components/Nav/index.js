import React from 'react'

import CV from '../../Assets/Doc/AnaSofiaBeltranCV.pdf'

import './NavCss.css'

function Nav() {
  return (
    <nav className='Nav'>
      <button> <a href='#AboutMe'>SOBRE MI</a> </button>
      <button>  <a href='#Portafolio'> PORTAFOLIO</a></button>
      <button> <a href='#Contact'> CONTACTAME</a></button>
      <button> <a href={CV} download> HOJA DE VIDA</a></button>
    </nav>
  )
}

export  {Nav}