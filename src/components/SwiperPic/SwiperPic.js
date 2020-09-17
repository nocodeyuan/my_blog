import React from 'react'
import SwiperCore, { Pagination, A11y, Mousewheel, Autoplay, EffectFade} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import styles from './style.module.css'

SwiperCore.use([
    Pagination, 
    A11y, 
    Mousewheel, 
    Autoplay, 
    EffectFade
]);

const slide1 = require('../../assets/imgs/p4.jpeg')

export default  () => {
    return (
        <div className={styles.container}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                fadeEffect={{crossFade: true}}
                autoplay={{delay:2000}}
                mousewheel={{invert: false}}
                pagination={{ clickable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide>
                        <img src={slide1} alt='comic' title='comic'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt='comic'/>
                </SwiperSlide>
                <SwiperSlide>
                        <img src={slide1} alt='comic'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt='comic'/>
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}