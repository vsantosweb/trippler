import React, { useEffect } from 'react';

import css from './Home.module.scss';
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import CategoryCollection from '../../../modules/CategoryCollection';
SwiperCore.use([Navigation]);

export default function Home({ layout }) {
    useEffect(() => {
        layout('AppLayout');

    }, []);

    return (
        <section> <CategoryCollection /> </section>
    );
}