import React from 'react'


import './IntroCss.css'

function Intro() {
  return (
    <section className='Intro'>
        <hgroup>
            <h4>Hola, mi nombre es</h4>
            <h3 className='second-title'>Ana Sofia Beltran Rios</h3>
            <h4>Y este es mi</h4>
            <h1 className='first-title'>Portafolio</h1>
        </hgroup>
    </section>
  )
}

export  {Intro}