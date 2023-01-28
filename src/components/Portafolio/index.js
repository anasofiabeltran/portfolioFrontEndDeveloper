import React from 'react'

import './PortafolioCss.css'

import { Card } from '../Card'
import { Cards } from '../Cards'
import { Button } from '../Button'

import gitHub from '../../Assets/Icons/github.png'
import mouse from '../../Assets/Icons/clicker-del-mouse.png'

function Portafolio() {
  return (
    <section className='Portafolio'>
        <h2 className='second-title'>
            Mi Portafolio
        </h2>
        <section >
            <Cards>
            
                <Card>
                    <h3 className='title-Card'>Task List And Details</h3>
                    <p>Lista de TO-DO, mediante el cual se ponen en practica conocimientos adquiridos en Platzi, se realiza mediante la utilización de <b>React Js y Css</b></p>
                    <Button text="ver GitHub"  srcImage={gitHub} url="https://github.com/anasofiabeltran/TaskListAndDetails"/>
                    <Button text="ver Pagina" srcImage={mouse}  url="https://anasofiabeltran.github.io/TaskListAndDetails/"/>
                </Card>
                <Card>
                    <h3>Curso de introducción a React</h3>
                    <p>Proyecto que se trabajo en el "Curso de introducción a React" realizado en la plataforma Platzi</p>
                    <Button text="ver GitHub"  srcImage={gitHub} url="https://github.com/anasofiabeltran/CursoDeIntroduccionAReact"/>
                    <Button text="ver Pagina" srcImage={mouse} url="https://anasofiabeltran.github.io/CursoDeIntroduccionAReact/" />
                </Card>
                <Card>
                    <h3>Shopping Cart</h3>
                    <p>Proyecto con el cual se pretendia simular una e-commerce; mediante el uso de <b>HTML, JAVASCRIPT Y CSS</b></p>
                    <Button text="ver GitHub"  srcImage={gitHub} url="https://github.com/anasofiabeltran/shoppingCart"/>
                    <Button text="ver Pagina" srcImage={mouse} url="https://anasofiabeltran.github.io/shoppingCart/" />
                </Card>
                <Card>
                    <h3>Segunda Pagina</h3>
                    <p>Proyecto se pretendia mejorar las habilidades aprendidas en <b>HTML, CSS Y JAVASCRIPT</b></p>
                    <Button text="ver GitHub"  srcImage={gitHub} url="https://github.com/anasofiabeltran/Pagina2"/>
                    <Button text="ver Pagina" srcImage={mouse} url="https://anasofiabeltran.github.io/Pagina2/" />
                </Card>
                <Card>
                    <h3>Primera Pagina</h3>
                    <p>Proyecto se pretendia mejorar las habilidades aprendidas en <b>HTML y CSS</b></p>
                    <Button text="ver GitHub"  srcImage={gitHub} url="https://github.com/anasofiabeltran/pagina1"/>
                    <Button text="ver Pagina" srcImage={mouse} url="https://anasofiabeltran.github.io/pagina1/" />
                </Card>
            </Cards>
        </section>
    </section>
  )
}

export  {Portafolio}