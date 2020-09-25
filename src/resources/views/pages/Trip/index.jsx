import React, { useEffect, useState } from 'react';
import Gallery from 'react-grid-gallery';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import css from './Trip.module.scss';
import SiteLayout from '../../layouts/SiteLayout';
import { Container, Row, Col } from 'react-grid-system';
import { Tabs, Button, Breadcrumb, Select } from 'antd';
import TripReviews from '../../../components/Reviews/TripReviews/TripReviews';
import TripSchedule from '../../../../api/Trip/TripSchedule';
const { TabPane } = Tabs;
const { Option } = Select;
const IMAGES =
    [{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
        caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    ];

const Trip = (props) => {

    const [tripSchedule, setTripSchedule] = useState(false);
    const [tripPackage, setTripPackage] = useState(false);
    const [totalPrice, setTotalPrice] = useState(tripSchedule.price);

    useEffect(() => {
        TripSchedule.show(props.match.params.code).then(response => {
            setTripSchedule(response.data);
            setTotalPrice(response.data.price);
        })
    }, [])

    const chosePackage = (tripPackage) => {
        setTotalPrice(totalPrice + tripPackage.amount);
        setTripPackage({

            trip_schedule_id: tripSchedule.id,
            name: tripPackage.name,
            description: tripPackage.description,
            quantity: tripPackage.quantity,
            amount: tripPackage.amount
        });
    }

    const chosePassagerTypes = (element, position) => {

        let items = Object.assign([], tripPackage.items);
        let passager = JSON.parse(element.target.value);
        items[position] = passager;
        let totalAmount = 0;

        setTripPackage({ ...tripPackage, items });

        console.log(items.length, 'length')

        for (let item of items) {
            totalAmount = item.amount + totalAmount;
        }

        let updateTotalPrice = totalAmount + totalPrice;

        setTotalPrice(updateTotalPrice);
    }

    const passagerCount = () => {

        let passagers = [];

        for (let i = 0; i <= tripPackage.quantity - 1; i++) {
            passagers.push(
                // <Select style={{ width: "100%", margin: '.4em 0' }} name="passageiro[i]" defaultValue="Selecione o tipo de passageiro" onChange={chosePassagerTypes}>
                //     {tripSchedule.passager_types.map(passager => <Select.Option key={passager.id} value={JSON.stringify(passager)}>{passager.name}</Select.Option>)}
                // </Select>

                <select style={{ width: "100%", margin: '.4em 0' }} name={`passageiro[${i}]`} defaultValue="Selecione o tipo de passageiro" onChange={(element) => chosePassagerTypes(element, i)}>
                    {tripSchedule.passager_types.map(passager => <option key={passager.id} value={JSON.stringify(passager)}>{passager.name}</option>)}
                </select>
            );
        }
        return passagers;
    }

    const updateTotalPrice = (amount) => {
        setTotalPrice(totalPrice = +amount);
    }

    return (
        <SiteLayout>

            <main className={`${css.tripPage} ${css.containerWrapper}`}>

                <header className={css.tripHeader}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Application Center</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Application List</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
                    {tripSchedule ?
                        <Container fluid>
                            <Row>
                                <Col md={9}>
                                    <div className={`${css.tripLead}`}>
                                        <h1 className={css.tripLeadTitle}>{tripSchedule.trip.name} </h1>
                                    </div>
                                    <Tabs animated={false} size={'large'}>
                                        <TabPane tab={<div className={css.tripTabItem}><span className="material-icons-outlined">perm_media</span> <span>Galeria</span> </div>} key="1">
                                            <Gallery images={IMAGES} />
                                        </TabPane>
                                        <TabPane tab={<div className={css.tripTabItem}><span className="material-icons-outlined">local_library</span> <span>Roteiro</span> </div>} key="2">
                                            <div className={css.tripFeature}>
                                                <h3 className={css.tripFeatureTitle}>Roteiro</h3>
                                                <VerticalTimeline layout={'1-column'} animate={false} className={css.verticalTimeline}>
                                                    <VerticalTimelineElement
                                                        className="vertical-timeline-element--work"
                                                        contentStyle={{ background: '#f9f9f9', color: '#333', boxShadow: 'none', display: 'flex', flexDirection: 'column-reverse' }}
                                                        contentArrowStyle={{ borderRight: '7px solid  #dedfe0' }}
                                                        dateClassName={css.timeLineDate}
                                                        date="2º DIA - SÁBADO - De Cusco-PER a Águas Calientes-PER PACOTE 3 - City Tour no Vale Sagrado dos Incas + Trem + Hospedagem Águas Calientes - R$ 1.599,00 por pessoa"
                                                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}
                                                        icon={<span className="material-icons-outlined">local_library</span>}
                                                    >
                                                        <ul>
                                                            <li>- Em nosso primeiro dia de viagem, após apresentação geral do grupo, paramos para jantar na cidade de Cachoeira do Sul.</li>
                                                            <li>- Após o jantar, continuamos a viagem até a cidade de Uruguaiana, onde tomaremos o café da manhã.</li>
                                                        </ul>
                                                    </VerticalTimelineElement>
                                                    <VerticalTimelineElement
                                                        className="vertical-timeline-element--work"
                                                        contentStyle={{ background: '#f9f9f9', color: '#333', boxShadow: 'none', display: 'flex', flexDirection: 'column-reverse' }}
                                                        contentArrowStyle={{ borderRight: '7px solid  #dedfe0' }}
                                                        dateClassName={css.timeLineDate}
                                                        date="2º DIA - SÁBADO - De Cusco-PER a Águas Calientes-PER PACOTE 3 - City Tour no Vale Sagrado dos Incas + Trem + Hospedagem Águas Calientes - R$ 1.599,00 por pessoa"
                                                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}
                                                        icon={<span className="material-icons-outlined">local_library</span>}
                                                    >
                                                        <ul>
                                                            <li>- Manhã: Saída da hospedagem para o passeio do Valle Sagrado dos Incas</li>
                                                            <li>- City Tour no sítio arqueológico Pisac</li>
                                                            <li>- Período livre para almoço em Urubamba</li>
                                                            <li>- Tarde: Continuação do city tour até o sítio arqueológico Ollantaytambo</li>
                                                            <li>- Noite: Embarque no trem em Ollantaytambo até Águas Calientes (cidade localizada junto a Machu Picchu)</li>
                                                            <li>- Check in na hospedagem na cidade de Águas Calientes</li>
                                                            <li>- - 4º noite na hospedagem</li>
                                                        </ul>
                                                    </VerticalTimelineElement>
                                                    <VerticalTimelineElement
                                                        className="vertical-timeline-element--work"
                                                        contentStyle={{ background: '#f9f9f9', color: '#333', boxShadow: 'none', display: 'flex', flexDirection: 'column-reverse' }}
                                                        contentArrowStyle={{ borderRight: '7px solid  #dedfe0' }}
                                                        dateClassName={css.timeLineDate}
                                                        date="2º DIA - SÁBADO - De Cusco-PER a Águas Calientes-PER PACOTE 3 - City Tour no Vale Sagrado dos Incas + Trem + Hospedagem Águas Calientes - R$ 1.599,00 por pessoa"
                                                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}
                                                        icon={<span className="material-icons-outlined">local_library</span>}
                                                    >
                                                        <ul>
                                                            <li>- Manhã: Saída da hospedagem para o passeio do Valle Sagrado dos Incas</li>
                                                            <li>- City Tour no sítio arqueológico Pisac</li>
                                                            <li>- Período livre para almoço em Urubamba</li>
                                                            <li>- Tarde: Continuação do city tour até o sítio arqueológico Ollantaytambo</li>
                                                            <li>- Noite: Embarque no trem em Ollantaytambo até Águas Calientes (cidade localizada junto a Machu Picchu)</li>
                                                            <li>- Check in na hospedagem na cidade de Águas Calientes</li>
                                                            <li>- - 4º noite na hospedagem</li>
                                                        </ul>
                                                    </VerticalTimelineElement>
                                                </VerticalTimeline>
                                            </div>

                                        </TabPane>
                                        <TabPane tab={<div className={css.tripTabItem}><span className="material-icons-outlined">assignment_turned_in</span> <span>Incluso</span> </div>} key="4">
                                            <div className={css.tripFeature}>
                                                <h2 className={css.tripFeatureTitle}>O que está incluso</h2>
                                                <ul className={css.whatIncludes}>
                                                    <li className={css.whatIncludesItem}>
                                                        <span className={`${'material-icons-outlined'} ${css.whatIncludesIcon}`}>assignment_turned_in</span>
                                                        <span className={css.whatIncludesText}>Transporte em ônibus turismo ida e volta de Porto Alegre-RS ao destino Buenos Aires-ARG</span>
                                                    </li>
                                                    <li className={css.whatIncludesItem}>
                                                        <span className={`${'material-icons-outlined'} ${css.whatIncludesIcon}`}>assignment_turned_in</span>
                                                        <span className={css.whatIncludesText}>Guia certificado pela CADASTUR desde Porto Alegre </span>
                                                    </li>
                                                    <li className={css.whatIncludesItem}>
                                                        <span className={`${'material-icons-outlined'} ${css.whatIncludesIcon}`}>assignment_turned_in</span>
                                                        <span className={css.whatIncludesText}>Hospedagem em quartos coletivos de até 05 pessoas, com café da manhã. Acomodações no Hotel Reina ou similar </span>
                                                    </li>
                                                    <li className={css.whatIncludesItem}>
                                                        <span className={`${'material-icons-outlined'} ${css.whatIncludesIcon}`}>assignment_turned_in</span>
                                                        <span className={css.whatIncludesText}>Sorteio de vale-créditos para serem usados em qualquer tipo de viagem </span>
                                                    </li>
                                                    <li className={css.whatIncludesItem}>
                                                        <span className={`${'material-icons-outlined'} ${css.whatIncludesIcon}`}>assignment_turned_in</span>
                                                        <span className={css.whatIncludesText}>Taxas Aduaneiras na fronteira </span>
                                                    </li>

                                                </ul>
                                            </div>
                                        </TabPane>
                                        <TabPane tab={<div className={css.tripTabItem}><span className="material-icons-outlined">departure_board</span> <span>Embarques</span> </div>} key="5">
                                            <div className={css.tripFeature}>
                                                <h3 className={css.tripFeatureTitle}>Embarques</h3>
                                                <VerticalTimeline layout={'1-column'} animate={false} className={css.verticalTimeline}>
                                                    <VerticalTimelineElement
                                                        className="vertical-timeline-element--work"
                                                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#333', boxShadow: 'none', border: 'solid 1px rgb(24, 144, 255)', display: 'flex', flexDirection: 'column-reverse' }}
                                                        contentArrowStyle={{ borderRight: '7px solid  rgb(24, 144, 255)' }}
                                                        dateClassName={css.timeLineDate}
                                                        date="1º DIA - SEXTA - EMBARQUE - De Porto Alegre a Uruguaiana"
                                                        iconStyle={{ border: 'solid 3px rgb(24, 144, 255)', background: 'rgb(255, 255, 255)', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}
                                                        icon={<span className="material-icons-outlined">departure_board</span>}
                                                    >
                                                        <ul>
                                                            <li>- Em nosso primeiro dia de viagem, após apresentação geral do grupo, paramos para jantar na cidade de Cachoeira do Sul.</li>
                                                            <li>- Após o jantar, continuamos a viagem até a cidade de Uruguaiana, onde tomaremos o café da manhã.</li>
                                                        </ul>
                                                    </VerticalTimelineElement>
                                                    <VerticalTimelineElement
                                                        className="vertical-timeline-element--work"
                                                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#333', boxShadow: 'none', border: 'solid 1px  solid #dedfe0', display: 'flex', flexDirection: 'column-reverse' }}
                                                        contentArrowStyle={{ borderRight: '7px solid  rgb(24, 144, 255)' }}
                                                        dateClassName={css.timeLineDate}
                                                        date="2º DIA - SÁBADO - De Cusco-PER a Águas Calientes-PER PACOTE 3 - City Tour no Vale Sagrado dos Incas + Trem + Hospedagem Águas Calientes - R$ 1.599,00 por pessoa"
                                                        iconStyle={{ border: 'solid 3px rgb(24, 144, 255)', background: 'rgb(255, 255, 255)', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}
                                                        icon={<span className="material-icons-outlined">departure_board</span>}
                                                    >
                                                        <ul>
                                                            <li>- Manhã: Saída da hospedagem para o passeio do Valle Sagrado dos Incas</li>
                                                            <li>- City Tour no sítio arqueológico Pisac</li>
                                                            <li>- Período livre para almoço em Urubamba</li>
                                                            <li>- Tarde: Continuação do city tour até o sítio arqueológico Ollantaytambo</li>
                                                            <li>- Noite: Embarque no trem em Ollantaytambo até Águas Calientes (cidade localizada junto a Machu Picchu)</li>
                                                            <li>- Check in na hospedagem na cidade de Águas Calientes</li>
                                                            <li>- - 4º noite na hospedagem</li>
                                                        </ul>
                                                    </VerticalTimelineElement>
                                                    <VerticalTimelineElement
                                                        className="vertical-timeline-element--work"
                                                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#333', boxShadow: 'none', border: 'solid 1px  solid #dedfe0', display: 'flex', flexDirection: 'column-reverse' }}
                                                        contentArrowStyle={{ borderRight: '7px solid  #f9f9f9' }}
                                                        dateClassName={css.timeLineDate}
                                                        date="2º DIA - SÁBADO - De Cusco-PER a Águas Calientes-PER PACOTE 3 - City Tour no Vale Sagrado dos Incas + Trem + Hospedagem Águas Calientes - R$ 1.599,00 por pessoa"
                                                        iconStyle={{ border: 'solid 3px #f9f9f9', background: 'rgb(255, 255, 255)', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}
                                                        icon={<span className="material-icons-outlined">departure_board</span>}
                                                    >
                                                        <ul>
                                                            <li>- Manhã: Saída da hospedagem para o passeio do Valle Sagrado dos Incas</li>
                                                            <li>- City Tour no sítio arqueológico Pisac</li>
                                                            <li>- Período livre para almoço em Urubamba</li>
                                                            <li>- Tarde: Continuação do city tour até o sítio arqueológico Ollantaytambo</li>
                                                            <li>- Noite: Embarque no trem em Ollantaytambo até Águas Calientes (cidade localizada junto a Machu Picchu)</li>
                                                            <li>- Check in na hospedagem na cidade de Águas Calientes</li>
                                                            <li>- - 4º noite na hospedagem</li>
                                                        </ul>
                                                    </VerticalTimelineElement>
                                                </VerticalTimeline>
                                            </div>
                                        </TabPane>
                                        <TabPane tab={<div className={css.tripTabItem}><span className="material-icons-outlined">card_travel</span> <span>O que Levar?</span> </div>} key="6">
                                            <div className={css.tripFeature}>
                                                <h2 className={css.tripFeatureTitle}>O que está levar?</h2>
                                                <ul className={css.whatIncludes}>
                                                    <li className={css.whatIncludesItem}>
                                                        <span className={`${'material-icons-outlined'} ${css.whatIncludesIcon}`}>assignment_turned_in</span>
                                                        <span className={css.whatIncludesText}>Transporte em ônibus turismo ida e volta de Porto Alegre-RS ao destino Buenos Aires-ARG</span>
                                                    </li>
                                                    <li className={css.whatIncludesItem}>
                                                        <span className={`${'material-icons-outlined'} ${css.whatIncludesIcon}`}>assignment_turned_in</span>
                                                        <span className={css.whatIncludesText}>Guia certificado pela CADASTUR desde Porto Alegre </span>
                                                    </li>
                                                    <li className={css.whatIncludesItem}>
                                                        <span className={`${'material-icons-outlined'} ${css.whatIncludesIcon}`}>assignment_turned_in</span>
                                                        <span className={css.whatIncludesText}>Hospedagem em quartos coletivos de até 05 pessoas, com café da manhã. Acomodações no Hotel Reina ou similar </span>
                                                    </li>
                                                    <li className={css.whatIncludesItem}>
                                                        <span className={`${'material-icons-outlined'} ${css.whatIncludesIcon}`}>assignment_turned_in</span>
                                                        <span className={css.whatIncludesText}>Sorteio de vale-créditos para serem usados em qualquer tipo de viagem </span>
                                                    </li>
                                                    <li className={css.whatIncludesItem}>
                                                        <span className={`${'material-icons-outlined'} ${css.whatIncludesIcon}`}>assignment_turned_in</span>
                                                        <span className={css.whatIncludesText}>Taxas Aduaneiras na fronteira </span>
                                                    </li>

                                                </ul>
                                            </div>
                                        </TabPane>
                                    </Tabs>
                                </Col>
                                <Col md={3}>
                                    <div className={css.tripForm}>
                                        <header className={css.tripFormHeader}>
                                            <img src={tripSchedule.trip.image_url} />
                                        </header>
                                        <section className={css.tripMainWrapper}>
                                            <div className={css.tripCheckoutBox}>
                                                <div className={css.tripPriceTextContent}>
                                                    <span className={css.price}>R${totalPrice}</span>
                                                    {/* <del>R$ {tripSchedule.price + tripPackage.amount} </del> */}
                                                </div>
                                                <div className={css.tripCheckoutActions}>
                                                    <small>Selecione o local de Embarque</small>
                                                    <Select size={'large'} defaultValue="1 - Term Grajaú" onChange={'handleChange'}>
                                                        <Select.Option value="1 - Term Grajaú">1 - Term Grajaú</Select.Option>
                                                        <Select.Option value="2 - Pte. Do Socorro">2 - Pte. Do Socorro</Select.Option>
                                                        <Select.Option value="3 - Aeroporto Congonhas">3 - Aeroporto Congonhas</Select.Option>
                                                    </Select>
                                                    {!tripPackage ?
                                                        <div className={css.tripPackageList}>
                                                            <h4>ESCOLHA UM PACOTE</h4>
                                                            <p>Ao efetuar a reserva, você poderá optar por pagar para todos os passageiros ou cada um pagar o seu</p>

                                                            {tripSchedule.packages.map(tripPackage => (
                                                                <div className={`${css.packageItem} ${tripPackage ? 'selected' : ''}`} key={tripPackage.id} onClick={() => chosePackage(tripPackage)}>
                                                                    <span className={css.packageTitle}>{tripPackage.name} x{tripPackage.quantity}</span>
                                                                    <small>{tripPackage.description}</small>
                                                                </div>
                                                            ))}
                                                        </div> :
                                                        <div className={css.tripPassagerTypes}>
                                                            {<button onClick={() => setTripPackage(false)}>{'voltar'}</button>} <h4>SELECIONE OS PASSAGEIROS</h4>
                                                            <p>Ao efetuar a reserva, você poderá optar por pagar para todos os passageiros ou cada um pagar o seu</p>
                                                            {/* <hr /> */}
                                                            {passagerCount()}
                                                            {/* <hr /> */}
                                                            <small>
                                                                *Observação: bebê até 4 anos, viajando no colo e acompanhado de dois adultos, é isento e não entram no
                                                                cálculo do pacote, porém, logo após a compra, devem ser cadastrados.
                                                                As orientações seguirão por e-mail após a compra.
                                                            </small>
                                                        </div>
                                                    }
                                                    <Button href={'/checkout'} size={'large'} type={'primary'} className={`${css.checkoutButton}`}>Prosseguir</Button>
                                                </div>
                                                <p>
                                                    Em Até 12x
                                                    Desconto de R$ 44,95 via depósito/transferência
                                         </p>
                                            </div>
                                        </section>
                                    </div>
                                </Col>
                            </Row>
                        </Container> : 'Carregando...'
                    }


                </header>
                <section>
                    <Container fluid>
                        <Row>
                            <Col md={8}>
                                <div className={`${css.tripLead}`}>
                                    <h2>Visão Geral</h2>
                                    <p className={css.tripLeadHeadLine}>
                                        Conhecer cidades históricas, balneário badalado e um rio que vira mar. Sinta a experiência de estar em um destino cultural entre os mais
                                        procurados da América Latina. E que tal um hotel de LUXO para se hospedar? Surpreenda-se com essa Trip!
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <div className={`${css.tripLead}`}>
                                    <h2>Avaliações</h2>
                                    <TripReviews />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </main>
        </SiteLayout >
    );
}
export default Trip;