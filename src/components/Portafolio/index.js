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
                    <h3>Task List And Details</h3>
                    <p>A task list created in base to the knoledche of the React's course of platzi</p>
                    <Button text="ver GitHub"  srcImage={gitHub} url="https://github.com/anasofiabeltran/TaskListAndDetails"/>
                    <Button text="ver Pagina" srcImage={mouse}  url="https://anasofiabeltran.github.io/TaskListAndDetails/"/>
                </Card>
                <Card>
                    <h3>Task List And Details</h3>
                    <p>Proyect</p>
                    <Button text="ver GitHub"  srcImage={gitHub}/>
                    <Button text="ver Pagina" srcImage={mouse}/>
                </Card>
                <Card>
                    <h3>Task List And Details</h3>
                    <p>Proyect</p>
                    <Button text="ver GitHub"  srcImage={gitHub}/>
                    <Button text="ver Pagina" srcImage={mouse}/>
                </Card>
                <Card>
                    <h3>Task List And Details</h3>
                    <p>Proyect</p>
                    <Button text="ver GitHub"  srcImage={gitHub}/>
                    <Button text="ver Pagina" srcImage={mouse}/>
                </Card>
                <Card>
                    <h3>Task List And Details</h3>
                    <p>Proyect</p>
                    <Button text="ver GitHub"  srcImage={gitHub}/>
                    <Button text="ver Pagina" srcImage={mouse}/>
                </Card>
      
            </Cards>
        </section>
    </section>
  )
}

export  {Portafolio}