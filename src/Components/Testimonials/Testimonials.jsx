import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import Steve from '../../img/Steve.jpg'
import Bill from '../../img/Bill.jpg'
import Elon from '../../img/Elon.jpg'
import Debjani from '../../img/Debjani.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {
    const clients = [
        {
            img: Steve,
            review1: ' " Because the people who are crazy enough to think they can change the world are the ones who do. " ',
            review2: "by Steve Jobs"
        },
        {
            img: Bill,
            review1: '" It is fine to celebrate success, but it is more important to heed the lessons of failure. "',
            review2: "by Bill Gates"
        },
        {
            img: Elon,
            review1: '" When something is important enough, you do it even if the odds are not in your favour. "',
            review2: "by Elon Musk"
        },
        {
            img: Debjani,
            review1: '" Real courage is when you know you are licked before you begin, but you begin anyway and see it through no matter what. "',
            review2: "by Debjani Ghosh"
        }
    ]
    return (
        <div className="t-wrapper" id='Testimonials'>
            <div className="t-heading">
                <span>Inspiring </span>
                <span>Quotes </span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            {/*Slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span><i><b>{client.review1}</b></i></span>
                                <span>{client.review2}</span>
                            </div>

                        </SwiperSlide>
                    );
                }
                )}
            </Swiper>
        </div>
    )
}

export default Testimonials