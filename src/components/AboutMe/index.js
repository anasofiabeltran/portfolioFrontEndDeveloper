import React from 'react'
import './AboutMeCss.css'

import foto from '../../Assets/Img/photo_perfil.jpg'

function AboutMe() {
  return (
    <section className='AboutMe'>
        <h3>Sobre mi</h3>
        <section className='AboutMe-content'>
            <article>
                <p>
                    Ingeniera de Sistemas con enfoque en Diseño Grafico, poseo características tales como la     creatividad e innovación.
                    <br/>Me especializo en manejo de herramientas del paquete Adobe, tales como Illustrator, Photoshop y after effects, 
                    <br/>manejo lenguajes de programación como python y trabajo herramientas para el desarrollo web como HTML, CSS y  JAVASCRIPT
                </p>
            </article>
            <article>
                <figure className='AboutMe-foto'>
                    <img  src={foto}/>
                </figure>
                
            </article>
        </section>
        
        
    </section>
  )
}

export  {AboutMe}