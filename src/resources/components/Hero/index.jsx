import React from 'react'
import css from './Hero.module.scss';
import SearchBar from './SearchBar';

export default function Hero() {
    return (
        <div className={css.hero}>
            <div className={css.bannerContainer}>
                {/* <img src={'http://getmasum.com/html-preview/voyage/assets/img/slider/1.jpg'} className={css.bannerImage} /> */}
                <div className={css.bannerTextContainer}>
                    <div className={css.bannerText}>
                        <h1 className={css.bannerTitle}>Viage no seu tempo</h1>
                        <p>Garanta seu lugar em qualquer excursão, a qualquer hora. Explore milhares de viagens de forma fácil, rápida e confiável.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
