import React, { useEffect } from 'react';

import css from './Home.module.scss';
import SwiperCore, { Navigation } from "swiper";
import CategoryCollection from '../../../modules/CategoryCollection';
import authMiddleware from '../../middleware/withAuth';
SwiperCore.use([Navigation]);

function Home({ layout }) {
    useEffect(() => {
        layout('AppLayout');

    }, []);

    return (
        <section> <CategoryCollection /> </section>
    );
}


export default authMiddleware(Home)