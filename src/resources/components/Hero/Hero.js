import React from 'react'
import css from './Hero.module.scss';
import { Select } from 'antd';

const Hero = () => {
    return (
        <div className={css.hero}>

            <div className={css.bannerContainer}>

                <img src={'http://getmasum.com/html-preview/voyage/assets/img/slider/1.jpg'} className={css.bannerImage} />
                <div className={css.bannerTextContainer}>
                    <div className={css.bannerText}>
                        <h1 className={css.bannerTitle}>Viage no seu tempo</h1>
                        <p>Garanta seu lugar em qualquer excursão, a qualquer hora. Explore milhares de viagens de forma fácil, rápida e confiável.</p>
                    </div>
                    <Select placeholder={'Para onde você quer viajar ?'} size={'large'} showSearch className={css.searchEngine} />
                </div>
                {/* <div className={css.searchEngine}>
                    <form className={css.formSearch}>
                        <div className={css['form-group']}>
                            <input className={css['form-control']} placeholder={'Onde vamos ?'} />
                        </div>
                        <button className={`${css['button']} ${css['btn-block']} ${css['primary']}`}>Buscar excursões (353) </button>
                    </form>
                </div> */}
            </div>
        </div>
    )
}
export default Hero;
