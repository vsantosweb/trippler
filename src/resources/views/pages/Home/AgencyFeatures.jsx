import React from 'react';

import css from './Home.module.scss';

export default function Home() {
    return (
        <Container style={{ maxWidth: '1368px' }}>
            <Row>
                <Col md={12}>
                    <div className={`${css.widget} ${css.textCenter}`}>
                        <h3 className={css.widgetTitle}>Tripler para agentes de viagem</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className={css.highLightsContent}>
                        <div className={css.featured}>
                            <div className={css.featuredIcon}>
                                <span className={'material-icons'}>tune</span>
                            </div>
                            <div className={css.featuredText}>
                                <h3 className={css.featuredTitle}>Controle e gestão</h3>
                                <p className={css.featuredDescription}>
                                    Tenha controle durante e após a viagem! Você pode personalizar a viagem de acordo com suas diretrizes.
                                    Além da liberdade de escolher como vai receber pelas vendas das passagens.
                            </p>
                            </div>
                        </div>
                        <div className={css.featured}>
                            <div className={css.featuredIcon}>
                                <span className={'material-icons'}>bar_chart</span>
                            </div>
                            <div className={css.featuredText}>
                                <h3 className={css.featuredTitle}>Relatórios</h3>
                                <p className={css.featuredDescription}>
                                    Disponibilizamos relatórios que podem ajuda-lo com a demanda do seu público para
                                    suas viagens, assim poderá controlar seus gastos.
                            </p>
                            </div>
                        </div>
                        <div className={css.featured}>
                            <div className={css.featuredIcon}>
                                <span className={'material-icons'}>all_inbox</span>
                            </div>
                            <div className={css.featuredText}>
                                <h3 className={css.featuredTitle}>Plataforma completa</h3>
                                <p className={css.featuredDescription}>
                                    Você pode cadastrar sua viagem e pré-definir, fotos, roteiros, O que inclui, o que levar
                                    e os embarques.
                            </p>
                            </div>
                        </div>
                        <div className={css.featured}>
                            <div className={css.featuredIcon}>
                                <span className={'material-icons'}>verified_user</span>
                            </div>
                            <div className={css.featuredText}>
                                <h3 className={css.featuredTitle}>Conforto e Segurança</h3>
                                <p className={css.featuredDescription}>
                                    Seus passageiros terão conforto e segurança tendo acesso a histórico de pedidos e compras de passagens.
                                    deixando-os tranquilo de que terão seu lugar garantido nas suas viagens.
                            </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className={css.platformImage}>
                        <img src="https://creativevip.net/resource-images/various-device-mockup-vectors-1.png" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

