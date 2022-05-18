import React from 'react'
import './Services.css'
import Heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const transition = { duration: 1, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id='Services'>
            {/* Left side*/}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>services</span>
                <spane>
                    I have some handson experience of developing full stack web
                    <br />
                     applications.You can check out some of my good works by scrolling my github.
                </spane>

                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "ABF1FF94" }}></div>
            </div>
            {/* Right side*/}
            <div className="cards">
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25rem' }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={Heartemoji}
                        heading={'Design'}
                        detail={"Figma,Photoshop,Adobe"}
                    />
                </motion.div>
                {/* Second Card */}
                <div style={{ top: '12rem', left: '-4rem' }}>

                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"HTML,CSS,Javascript,React"}
                    />
                </div>
                {/*Third card*/}
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25rem' }}
                    transition={transition}
                    style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Lorem Ipsum get"}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services;