import React, { useEffect, useState } from 'react';

import css from './Home.module.scss';
import SiteLayout from '../../layouts/SiteLayout';
import { Row, Col, Container } from 'react-grid-system';
import CardEvent from '../../../components/Cards/CardEvent';
import TripSchedule from '../../../../api/Trip/TripSchedule';
import Hero from '../../../components/Hero';
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
SwiperCore.use([Navigation]);

export default function Home() {

    const [tripListByCategories, setTripListByCategories] = useState([]);

    useEffect(() => {
        TripSchedule.listByCategories().then(response => setTripListByCategories(response.data))
    }, []);

    const tripsByCategories = (list) => {
        console.log(tripListByCategories)
        return tripListByCategories.map((category, key) => {
            return <div className={css.cardCollection}>
                <div className={css.cardCollectionHeader}>
                    <h2 className={css.cardCollectionTitle}> {category.name} </h2>
                    <span>
                        <button className={`${css.slideNav} el-${category.id}-prev slide-nav swiper-button-prev`}>{"<"}</button>
                        <button className={`${css.slideNav} el-${category.id}-next slide-nav swiper-button-next`}>{">"}</button>
                    </span>
                </div>
                <Swiper navigation={{ nextEl: `.el-${category.id}-next`, prevEl: `.el-${category.id}-prev` }} direction="horizontal" spaceBetween={10} slidesPerView={4.2} freeMode={true}>
                    {category.trip_schedules.map((schedule, key) => (
                        <SwiperSlide>
                            <CardEvent data={schedule} category={category} title={'Cânion Fortaleza - Cambará do Sul - RS'} image={'https://picsum.photos/id/' + Math.floor(Math.random() * 500) + '/500/350.jpg'} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        })
    }

    return (
        <div className={css.mainWrapper}>
            <Hero />

            <section id={'tripFeatures'} className={css.sectionBLock}>
                <div className={css.containerWrapper}>
                    <Container  >

                        {tripsByCategories()}

                    </Container>
                </div>
            </section>
        </div>
    );
}