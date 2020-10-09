import React from 'react';
import css from './CardAdditionalPackage.module.scss';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

// import { Container } from './css';

export default function CardAdditionalPackage({ passagers, setAdditionalPackage, data }) {
    console.log(passagers, 'passageiros')
    return (
        <div className={css.cardEvent}>
            <img className={css.cardImage} src={'https://picsum.photos/id/' + Math.floor(Math.random() * 500) + '/50/50.jpg'} alt="Card image cap" />
            <div className={css.cardBody}>
                <h2 className={css.cardTitle}>{data.name}</h2>

                <div className={css.infoWrapper}>
                    <div className={css.dateWrapper}>
                    </div>
                    <div className={css.priceWrapper}>
                        <span className={css.price}>R$ {data.amount} </span>
                    </div>
                </div>
            </div>
            <div className={css.cardFooter}>
                <ul className={css.switchList} >
                    {passagers.map(passager => {
                        return <li className={css.switchItem}>
                          <span className={css.itemText}>{passager.name}</span>
                          <BootstrapSwitchButton
                                checked={false}
                                style={{borderRadius: '20px'}}
                                onlabel='Sim'
                                offlabel='Não'
                                onstyle={'success'}
                                onChange={(checked: boolean) => console.log(checked, 'cheked')}
                                size="xs"
                            />
                        </li>
                    })}


                </ul>


            </div>

        </div>
    )
}

