import React from 'react'
import Slider from '../../components/Slider'
import * as Styled from './style';
import { useForm } from 'react-hook-form';

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Button } from '../../components/_Elements/Button';
import history from '../../../history';

SwiperCore.use([Navigation]);


export default function TripDetails({ data }) {

    const [packageDetails, setPackageDetails] = React.useState({ open: true, data: null });
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

    let packages = data.packages || [];
    let passagerTypes = data.passagers || [];
    let boarding_locations = data.boarding_locations || [];


    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }
    watch()
    console.log(errors, 'ERRORS')
    const packageInfo = () => {

        const passagers = Array.from(Array(packageDetails.quantity).keys());

        return (
            <Styled.PackageInfo open={packageDetails.open}>

                <Styled.PackageInfoHeader>
                    <span> Detalhes do Pacote {data.name} </span>
                    <i onClick={() => setPackageDetails({ ...packageDetails, open: false })} className={'las la-times'}></i>
                </Styled.PackageInfoHeader>

                <Styled.PackageBody>
                    <Styled.AccommodationAlbum>
                        <Slider images={[0, 1, 2, 3, 4, 5, 6]} />
                    </Styled.AccommodationAlbum>
                    <Styled.PackageBodySection>
                        <Styled.AccommodationTitle>Pousada Lamur</Styled.AccommodationTitle>
                        <p>
                            café da manhã, piscina, fazendinha, playground, academia, quadras, salão do jogos, restaurante, bar, frigobar,
                        </p>
                    </Styled.PackageBodySection>
                    <Styled.PackageBodySection>
                        <Styled.AccommodationDetailList>
                            <li>
                                <span>Refeições</span>
                            </li>
                            <li>
                                <span>Camas</span>
                            </li>
                            <li>
                                <span>Refeições</span>
                            </li>
                        </Styled.AccommodationDetailList>
                    </Styled.PackageBodySection>
                    <Styled.PackageBodySection>
                        <i className={'las la-map-marker'}></i>  <span>Av Brasil, 2000</span>
                    </Styled.PackageBodySection>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Styled.PackageBodySection>
                            <Styled.AccommodationTitle>Local de Embarque</Styled.AccommodationTitle>
                            {

                                <React.Fragment>
                                    <select {...register('boarding_locations', { required: true })}>
                                        <option value={''}>Selecione o Local de Embarque</option>
                                        {boarding_locations.map((local, key) => (
                                            <option key={key} value={local.id}>{local.name}</option>
                                        ))}
                                    </select>
                                    {errors?.boarding_locations?.type === "required" && <small>Escolha o local de embarque</small>}
                                </React.Fragment>
                            }
                        </Styled.PackageBodySection>
                        <Styled.PackageBodySection>

                            <Styled.AccommodationTitle>Idade dos Triplers</Styled.AccommodationTitle>
                            {
                                passagers.map((passager, key) => (

                                    <React.Fragment>
                                        {/* <label>Tripler {key + 1} </label> */}
                                        <select {...register('passagers', { required: false })}>
                                            <option value={''}>Selecione o Local de Embarque</option>
                                            {passagerTypes.map((local, key) => (
                                                <option key={key} value={local.id}>{local.name}</option>
                                            ))}
                                        </select>
                                        {errors?.passagers?.type === "required" && <small>Selecione o passageiro</small>}
                                    </React.Fragment>
                                ))
                            }
                        </Styled.PackageBodySection>
                        <Styled.PricePackageContent>
                            <Styled.PriceInfo>
                                <span >R$ 687,00</span>
                                <small>Total do Pacote</small>
                            </Styled.PriceInfo>
                            <Button disabled={!isValid} variant={'primary'}>Continuar</Button>
                        </Styled.PricePackageContent>
                    </form>
                </Styled.PackageBody>
            </Styled.PackageInfo>
        )

    }
    console.log(isValid, 'data')
    return (
        <Styled.Container>
            <Slider images={[0, 1, 2, 3, 4, 5, 6]} />
            <Styled.Details>
                <Styled.Name>Pousada Mar dos Anjos</Styled.Name>
                <Styled.Description>
                    Esta pousada 3 estrelas possui um restaurante e fica perto de Praia dos Anjos
                </Styled.Description>
                <Styled.Info>
                    <Styled.InfoDetails>
                        <Styled.Period><i className={'las la-calendar'}></i> 20/07 - 20/07</Styled.Period>
                        <Styled.Vacancies><i className={'las la-check'}></i> Vagas Disponíveis</Styled.Vacancies>
                    </Styled.InfoDetails>

                    <Styled.InfoDetails justify={'flex-end'}>
                        <Styled.InfoTop>A partir de</Styled.InfoTop>
                        <Styled.InfoPriceValue>R$ 250,00</Styled.InfoPriceValue>
                    </Styled.InfoDetails>
                </Styled.Info>
            </Styled.Details>
            <Swiper direction="horizontal" spaceBetween={5} slidesPerView={2.8} freeMode={true}>

                {packages.map((tripPackage, key) => (
                    <SwiperSlide key={key} style={{ paddingBottom: '1.8em' }}>
                        <Styled.PackageItem onClick={() => setPackageDetails({ open: !packageDetails.open, ...tripPackage })}>
                            <Styled.PackageItemHeader>
                                <Styled.PackageTitle>{tripPackage.name} {tripPackage.quantity}</Styled.PackageTitle>
                            </Styled.PackageItemHeader>
                            <Styled.PackageItemBody><small>{tripPackage.description}</small></Styled.PackageItemBody>
                            <Styled.PackageItemFooter><span>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(tripPackage.amount)}</span> </Styled.PackageItemFooter>
                        </Styled.PackageItem>
                    </SwiperSlide>
                ))}

                {packageInfo()}

            </Swiper>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>O que está incluso ?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>Roteiro</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <strong>SÁBADO</strong>
                        <p>
                            7:30 às 8:00 - Embarque no Metrô Barra Funda
                            - Serviço de bordo
                        </p>

                        <p>
                            11:30 - Previsão de chegada ao Villa Verde Hotel

                            - Almoço servido (não incluso)
                            - Em horário informado, check-in e entrada nos quartos

                            LIVRE PARA CURTIR O HOTEL VILLA VERDE
                        </p>

                        <p>
                            - Jantar no Fratelli Restaurante (opcional)

                            DOMINGO
                            - Café da Manhã
                            - Tempo livre

                            12:00 - Check-out
                        </p>

                        <p>
                            - Passeio a Represa de Jurumirim

                            - Almoço


                            18:00 - Retorno para São Paulo
                            - Serviço de bordo

                            21:00 - Previsão de chegada na Barra Funda
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </Styled.Container>
    )
}