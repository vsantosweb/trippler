import React, { useEffect } from 'react';
import css from './CardAdditionalPackage.module.scss';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

// import { Container } from './css';

export default function CardAdditionalPackage({ passagers, changePassagers, data }) {

    useEffect(() => {
        passagers.map((passager, key) => {

            passager.totalAmount = passager.amount;
            passager.additionalPackages = []
        });

    }, [])
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
                    {passagers.map((passager, key) => {
                        return <li className={css.switchItem} key={key} >
                            <span className={css.itemText}>{key + 1} - {passager.fullName ? passager.fullName : passager.name}</span>
                            <BootstrapSwitchButton
                                style={{ borderRadius: '20px' }}
                                onlabel='Sim'
                                offlabel='Não'
                                onstyle={'success'}
                                size="xs"
                                onChange={(checked) => {
                                    let index = passager.additionalPackages.indexOf(data);

                                    if (checked) {
                                        console.log(passager.totalAmount, data.amount, 'vai sommmmaaaaaaaaa')
                                        console.log(passager.totalAmount + data.amount, 'SOMOOOOOOU')
                                        passager.totalAmount = passager.totalAmount + data.amount;
                                        passager.additionalPackages.push(data);
                                        return changePassagers([...passagers]);
                                    }
                                    if (index > -1) {

                                        passager.totalAmount = parseFloat((passager.totalAmount - data.amount).toFixed(2))
                                        passager.additionalPackages.splice(index, 1);
                                        changePassagers([...passagers]);

                                    }
                                }}
                            />
                        </li>
                    })}


                </ul>


            </div>

        </div>
    )
}

