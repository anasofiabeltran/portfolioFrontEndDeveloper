import React from 'react'
import './AboutMeCss.css'

import foto from '../../Assets/Img/photo_perfil.jpg'

function AboutMe() {
  return (
    <section id="Portafolio" className='AboutMe'>
        <section className='AboutMe-content'>
            <article className='AboutMe-content-text'>
              <h3 className='second-title'>Sobre mi</h3>
              <br />
                <p>
                Ingeniera de sistemas con énfasis en desarrollo frontend, trabajo mediante la librería de React JS y herramientas para el desarrollo web como HTML, CSS y JAVASCRIPT. Soy una persona apasionada y disciplinada. Me apasionan los temas de diseño y animación en 3D, manejo del paquete de Adobe herramientas tales como Ilustrator, Photoshop y After effects.
                </p>
            </article>
                <figure className='AboutMe-foto'>
                    <img  src={foto}/>
                </figure>
  
        </section>
        
        
    </section>
  )
}

export  {AboutMe}