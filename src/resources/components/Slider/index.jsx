import React from 'react'
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import * as SwiperSlider from './style';

SwiperCore.use([Navigation, Pagination]);

const Slider = ({ images }) => {
    return (
        <SwiperSlider.Container pagination={{ "type": "fraction" }} navigation={true}>
            <Swiper>
            {images.map((image, key) => (
                <SwiperSlide key={key}>
                    <img src={image} />
                </SwiperSlide>
            ))}
            </Swiper>
            
        </SwiperSlider.Container>
    )
}

export default Slider