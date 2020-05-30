import React from 'react';
import styles from './CardEvent.module.scss';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';

const CardEvent = (props) => {

    return (
        <div className={styles.cardEvent}>
            <img className={styles.cardImage} src={props.image} alt="Card image cap" />
            <Link to={{ pathname: `/${'trip'}`, teste: 'testeeeee' }} className={styles.cardBody}>
                <span className={styles.cardTagCategory}>Fim de Semana</span>
                <h2 className={styles.cardTitle}>{props.title}</h2>

                <Rate tooltips={'good'} size={'small'} disabled  value={'5'} />
                <div className={styles.infoWrapper}>
                    <div className={styles.dateWrapper}>
                        <span className={styles.date}>20/03/2020</span>
                    </div>
                    <div className={styles.priceWrapper}>
                        <span className={styles.text}>A partir de</span>
                        <span className={styles.price}>R$452,00</span>
                    </div>
                </div>
            </Link>
            <div className={styles.cardFooter}>
                <div className={styles.ownerWrapper}>
                    <div className={styles.ownerImage}>
                        <img src={'https://i.picsum.photos/id/' + Math.floor(Math.random() * 500) + '/50/50.jpg'} />
                    </div>
                    <a href="#" className={styles.ownerName}>Jhon Doe</a>
                </div>
            </div>
        </div>
    );
}

export default CardEvent;