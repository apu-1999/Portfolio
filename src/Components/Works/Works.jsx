import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import JS from '../../img/JS.png'
import HTML from '../../img/HTML.png'
import CSS from '../../img/CSS.png'
import Java from '../../img/Java.png'
import GIT from '../../img/GIT.png'

import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';


const Works = () => {
    const transition = { duration: 1, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 

    return (
        <div className="works">
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Works on all these</span>
                <span>Technologies</span>
                <spane>
                    <b>Front end:-</b> HTML5,CSS3,JS,ReactJS
                    <br />
                    <b>Back end:-</b> Java,Spring Boot,Python
                    <br />
                    <b>Databases:-</b> MySQL,MongoDB
                    <br />
                    <b>Development Tools:-</b> VS Code,Eclipse
                    <br />
                    <b>API Testing tools:-</b> Postman,SOAP UI
                </spane>


                <button className="button s-button">Hire me</button>

                <div className="blur s-blur1" style={{ background: "ABF1FF94" }}></div>
            </div>
            {/*Right side work */}
            <div className="w-right">
                <motion.div
                initial = {{rotate:45}}
                whileInView = {{rotate:0}}
                viewport = {{margin:'-40px'}}
                transition = {{duration:3.5, type:'spring'}}
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Java} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={HTML} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={GIT} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={JS} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={CSS} alt="" />
                    </div>
                </motion.div>
                {/*Background Circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works