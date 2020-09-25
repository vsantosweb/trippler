import React from 'react';
import styles from './CardEvent.module.scss';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';
import moment from 'moment';
const CardEvent = ({ data }) => {

    return (
        <div className={styles.cardEvent}>
            <img className={styles.cardImage} src={data.trip.image_url} alt="Card image cap" />
            <Link to={{ pathname: `/${'trips/'+data.code}`, teste: 'testeeeee' }} className={styles.cardBody}>
                <span className={styles.cardTagCategory}>{data.category.name}</span>
                <h2 className={styles.cardTitle}>{data.trip.name}</h2>

                <Rate tooltips={'good'} size={'small'} disabled value={'5'} />
                <div className={styles.infoWrapper}>
                    <div className={styles.dateWrapper}>
                        <span className={styles.date}>{moment(data.start_date).locale('pt-BR').format('LL')}</span>
                    </div>
                    <div className={styles.priceWrapper}>
                        <span className={styles.text}>A partir de</span>
                        <span className={styles.price}>R$ {data.price} </span>
                    </div>
                </div>
            </Link>
            <div className={styles.cardFooter}>
                <div className={styles.ownerWrapper}>
                    <div className={styles.ownerImage}>
                        <img src={'https://picsum.photos/id/' + Math.floor(Math.random() * 500) + '/50/50.jpg'} />
                    </div>
                    <a href="#" className={styles.ownerName}>Jhon Doe</a>
                </div>
            </div>
        </div>
    );
}

export default CardEvent;