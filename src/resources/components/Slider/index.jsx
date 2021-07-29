import React from 'react'
import SwiperCore, { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import * as SwiperSlider from './style';

SwiperCore.use([Navigation, Pagination]);

const Slider = ({ images }) => {
    return (
        <SwiperSlider.Container pagination={{ "type": "fraction" }} navigation={true}>
            
            {images.map((image, key) => (
                <SwiperSlide key={key}>
                    <img src={image} />
                </SwiperSlide>
            ))}
        </SwiperSlider.Container>
    )
}

export default Slider