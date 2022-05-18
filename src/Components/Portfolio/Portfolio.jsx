import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Ecommerce from '../../img/ecommerce.png'
import Music from '../../img/musicapp.png'
import HOC from '../../img/hoc.png'
import Sidebar from '../../img/sidebar.png'
import PortfolioImg from '../../img/Portfolio.png'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="portfolio" id='Portfolio'>
            {/*Heading for the section */}
            <span style={{color:darkMode?'white':''}}>Recent Projects</span>
            <span>Portfolio</span>
            {/*Slider */}
            <Swiper
                spaceBetween = {30}
                slidesPerView = {3}
                grabCursor = {true}
                className = 'portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Music} alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Portfolio