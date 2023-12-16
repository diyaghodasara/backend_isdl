import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './landingpage.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function UniqueHomepage() {
    const navigate = useNavigate();
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };

    
    const enterSite = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
            <div>
            <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
    "fullScreen": {
        "zIndex": 1
    },
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true
            }
        },
        "color": {
            "value": "#ff0000",
            "animation": {
                "enable": true,
                "speed": 20,
                "sync": true
            }
        },
        "opacity": {
            "value": 0.5
        },
        "size": {
            "value": {
                "min": 0.1,
                "max": 3
            }
        },
        "links": {
            "enable": true,
            "distance": 100,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "outModes": {
                "default": "out"
            }
        }
    },
    "interactivity": {
        "events": {
            "onHover": {
                "enable": true,
                "mode": "repulse"
            },
            "onClick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "repulse": {
                "distance": 200
            },
            "push": {
                "quantity": 4
            }
        }
    },
    "background": {
        "color": "#000000",
    }
}}
    />      
            <div className='land'>
                <span className='tit'>LNMIIT Bus Booking System </span>
                <a href="/home" onClick={enterSite} className="unique-mainBtn">
                    Get Started!
                </a>
            </div>
            </div>
    );
}
