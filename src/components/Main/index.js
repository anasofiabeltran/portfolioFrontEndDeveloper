import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { Intro } from "../Intro";
import { AboutMe } from "../AboutMe";
import { Portafolio } from "../Portafolio";
import { Contact } from "../Contact";

import './MainCss.css'


const Main = ( ) =>{

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return(
        <main className="Main">
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen:{
                    enable: true,
                    zIndex: 1
                },
                background: {
                    color: {
                        value: "#270828",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onDiv:{
                            elementId: "repulse-div",
                            enable: false,
                            mode: "repulse"
                        },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                            parallax:{
                                enable: false,
                                force: 60,
                                smooth:10
                            }
                        },
                        resize: true,
                    },
                    modes: {
                       bubble:{
                        distance: 400,
                        duration:2,
                        opacity: 0.8,
                        size:2,
                       },
                       connect:{
                        distance:80,
                        lineLinked:{
                            opacity:0.5
                        },
                        radiud:60
                       },
                       grab:{
                        distance:400,
                        lineLinked:{
                            opacity:1
                        }
                       },
                       push:{
                        quantity:2
                       },
                       remove:{
                        quantity:2
                       },
                       repulse:{
                        distance:200,
                        duration:0.4
                       }
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    lineLinked: {
                        blink: false,
                        color: "#000",
                        consent: false,
                        distance: 150,
                        enable: false,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        image:[
                            {src: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png"},
                            {src: "https://cdn-icons-png.flaticon.com/512/520/520890.png"}
                        ],
                        type: "image",
                    },
                    size: {
                        value: { min: 10, max: 25 },
                    },
                },
                detectRetina: true,
            }}
        />
            <Intro />
            <AboutMe />
            <Portafolio />
            <Contact />
        </main>
    );

}
export {Main}