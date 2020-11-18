import React from 'react';
import styles from './CardEvent.module.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';


const CardEvent = ({ data, category, image }) => {

    return (
        <div className={styles.cardEvent}>
            <Link to={{ pathname: `/${'trips/' + data.code}`, teste: 'testeeeee' }} >

                <img className={styles.cardImage} src={image} alt="Card image cap" />
                <div className={styles.cardBody}>
                    <span className={styles.cardTagCategory} style={{ background: category.color }} >{category.name}</span>
                    <h2 className={styles.cardTitle}>{data.trip.name}</h2>

                    <div className={styles.infoWrapper}>
                        <div className={styles.priceWrapper}>
                            <span className={styles.text}>A partir de</span>
                            <span className={styles.price}>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(data.price)} </span>
                        </div>
                        {data.start_date === data.end_date ?
                            <div className={`${styles.dateWrapper}`}>
                                <span className={`${styles.date}`}><span style={{ fontSize: '18px' }} className="material-icons-outlined icon">event_note</span> {moment(data.start_date).locale('pt_BR').format('DD-MM-YYYY')}</span>
                            </div> :
                            <div className={styles.dateWrapper}>
                                <span className={styles.date}><span style={{ fontSize: '18px' }} className="material-icons-outlined icon">event_note</span> {moment(data.start_date).locale('pt_BR').format('DD-MM-YYYY')}</span>
                            |
                            <span className={styles.date}><span style={{ fontSize: '18px' }} className="material-icons-outlined icon">event_note</span> {moment(data.end_date).locale('pt_BR').format('DD-MM-YYYY')}</span>
                            </div>
                        }


                    </div>
                </div>

            </Link>
            {/* <div className={styles.cardFooter}>
                <div className={styles.ownerWrapper}>
                    <div className={styles.ownerImage}>
                        <img src={'https://picsum.photos/id/' + Math.floor(Math.random() * 500) + '/50/50.jpg'} />
                    </div>
                    <a href="#" className={styles.ownerName}>Jhon Doe</a>
                </div>
            </div> */}

        </div>

    );
}


export default CardEvent;