import React, { useState, useEffect, useRef } from 'react'
import { tripScheduleList } from '../../../api/Trip/TripSchedule';
import * as Collection from './style';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import CardEvent from '../../components/Cards/CardEvent';

SwiperCore.use([Navigation]);

const mediaSizes = {
    320: { slidesPerView: 1.6, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 5, spaceBetween: 30 }
}

export default function CategoryCollection() {

    const [tripListByCategories, setTripListByCategories] = useState([]);

    let _fetching = useRef(true);

    useEffect(() => {

        tripScheduleList().then(response => _fetching && setTripListByCategories(response.data));
        return () => { _fetching = false }

    }, []);

    return (
        tripListByCategories.map((category, key) => (
            category.trip_schedules.length > 0 && <Collection.Container key={key}>
                <Collection.Header>
                    <Collection.Title>{category.name} </Collection.Title>
                    <div>
                        <button className={`slideNav el-${category.id}-prev slide-nav swiper-button-prev`}>{"<"}</button>
                        <button className={`slideNav el-${category.id}-next slide-nav swiper-button-next`}>{">"}</button>
                    </div>
                </Collection.Header>

                <Swiper
                    navigation={{ nextEl: `.el-${category.id}-next`, prevEl: `.el-${category.id}-prev` }}
                    direction="horizontal"
                    spaceBetween={10}
                    slidesPerView={2.3}
                    breakpoints={mediaSizes}
                    freeMode={true}
                >
                    {category.trip_schedules.map((schedule, key) => (
                        <SwiperSlide key={key} >
                            <CardEvent key={key} data={schedule} category={category} image={'https://picsum.photos/id/' + Math.floor(Math.random() * 500) + '/500/350.jpg'} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Collection.Container>

        ))
    )
}