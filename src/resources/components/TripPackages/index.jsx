import React from 'react'
import Slider from '../Slider';
import * as Styled from './styles';
import { useForm } from 'react-hook-form';
import { Button } from '../_Elements/Button';
import moment from 'moment';
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

export default function TripPackages({ data }) {

    const [packageDetails, setPackageDetails] = React.useState({ open: false });
    const passagers = Array.from(Array(packageDetails.quantity).keys());

    const { register, handleSubmit, getValues, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

    let packages = data.packages || [];
    let passagerTypes = data.passagers || [];
    let boarding_locations = data.boarding_locations || [];

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    }
    const packageInfo = () => {
        console.log(packageDetails, 'DETAILS')

        return (
            <Styled.PackageInfo open={packageDetails.open}>

                <Styled.PackageInfoHeader>
                    <span> Detalhes do Pacote  </span>
                    <i onClick={() => setPackageDetails({ ...packageDetails, open: false })} className={'las la-times'}></i>
                </Styled.PackageInfoHeader>

                <Styled.PackageBody>
                    <Styled.AccommodationAlbum>
                        {packageDetails.accommodation && <Slider images={packageDetails.accommodation?.images} />}
                    </Styled.AccommodationAlbum>
                    <Styled.PackageBodySection>
                        <Styled.AccommodationTitle>{packageDetails.accommodation?.name}</Styled.AccommodationTitle>
                        <p>{packageDetails.accommodation?.description}</p>
                    </Styled.PackageBodySection>
                    <Styled.PackageBodySection>
                        <Styled.AccommodationDetailList>
                            <ul>
                                {packageDetails.accommodation?.included_items.map((item, key) => (
                                    <li key={key}>{item.name}</li>
                                ))}
                            </ul>
                        </Styled.AccommodationDetailList>
                    </Styled.PackageBodySection>
                    <Styled.PackageBodySection>
                        <i className={'las la-map-marker'}></i>  <span>{packageDetails.accommodation?.address || 'Endereço não informado'}</span>
                    </Styled.PackageBodySection>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Styled.PackageBodySection>
                            <Styled.AccommodationTitle>Local de Embarque</Styled.AccommodationTitle>
                            {
                                <select {...register('boarding_locations', { required: true })}>
                                    <option value={''}>Selecione o Local de Embarque</option>
                                    {boarding_locations.map((local, key) => (
                                        <option key={key} value={local.id}>{local.name} - {local.departure_time}</option>
                                    ))}
                                </select>
                            }
                            {errors?.boarding_locations?.type === "required" && <small>Escolha o local de embarque</small>}
                        </Styled.PackageBodySection>
                        <Styled.PackageBodySection>

                            <Styled.AccommodationTitle>Idade dos Triplers</Styled.AccommodationTitle>
                            {
                                passagers.map((passager, index) => (

                                    <React.Fragment>
                                        {/* <label>Tripler {key + 1} </label> */}
                                        <select key={index} {...register('passagers.[' + index + ']', { required: true })}>
                                            <option value={''}>Selecione os Triplers</option>
                                            {passagerTypes.map((passager, key) => (
                                                <option key={key} value={passager}>{passager.name}</option>
                                            ))}
                                        </select>
                                        {errors?.passagers?.type === "required" && <small>Selecione o passageiro</small>}
                                    </React.Fragment>
                                ))
                            }
                        </Styled.PackageBodySection>
                        <Styled.PricePackageContent>
                            <Styled.PriceInfo>
                                <Styled.Price>{packageDetails?.amount * passagers.length}</Styled.Price>
                                <small>Total do Pacote</small>
                            </Styled.PriceInfo>
                            <Button disabled={!isValid} variant={'primary'}>Continuar</Button>
                        </Styled.PricePackageContent>
                    </form>
                </Styled.PackageBody>
            </Styled.PackageInfo>
        )

    }

    return (
        <React.Fragment>
            <h4>Pacotes</h4>
            <Swiper direction="horizontal" spaceBetween={5} slidesPerView={2.1} freeMode={true}>

                {packages.map((tripPackage, key) => (
                    <SwiperSlide key={key} style={{ paddingBottom: '1.8em' }}>
                        <Styled.PackageItem onClick={() => setPackageDetails({ open: !packageDetails.open, ...tripPackage })}>
                            <Styled.PackageItemHeader>
                                <Styled.PackageTitle>{tripPackage.name}</Styled.PackageTitle>
                            </Styled.PackageItemHeader>
                            <Styled.PackageItemBody>
                                <p>{tripPackage.description}</p>

                            </Styled.PackageItemBody>
                            <Styled.PackagePriceContent>
                                <Styled.PackageAmount>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(tripPackage.amount)}</Styled.PackageAmount>
                                <small>Por pessoa</small>
                            </Styled.PackagePriceContent>
                            <Styled.PackageItemFooter>
                                <Button block variant={'secondary'}>Quero este</Button>
                            </Styled.PackageItemFooter>
                        </Styled.PackageItem>
                    </SwiperSlide>
                ))}

                {packageInfo()}

            </Swiper>
        </React.Fragment>
    )
}