import React from 'react'
import Slider from '../Slider';
import * as Styled from './styles';
import { useForm } from 'react-hook-form';
import  Button  from '../_Elements/Button';
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from 'react-redux';

SwiperCore.use([Navigation]);

export default function TripPackages({ data, cart }) {
    
    const [packageDetails, setPackageDetails] = React.useState({ open: false });
    const selectedpassengers = Array.from(Array(packageDetails.quantity).keys());
    const { register, handleSubmit, getValues, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

    let packages = data.packages || [];
    let passengerTypes = data.passengers || [];
    let boarding_locations = data.boarding_locations || [];
    let totalAmount = packageDetails.amount && (packageDetails.amount + data.price) * packageDetails.quantity;
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        let selectedpassenger = [];

        let passengerAmount = formData.passengers.map(id => {

            selectedpassenger.push(passengerTypes.filter(passenger => passenger.id == id)[0])

            return selectedpassenger.map(passenger => passenger.pivot.amount)[0]
        })

        const packageDIspatch = {

            accommodation: { name: packageDetails.accommodation.name },
            tripScheduleCode: data.code,
            type: packageDetails.name,
            quantity: packageDetails.quantity,
            shared: packageDetails.shared,
            totalAmount: totalAmount + passengerAmount.reduce((total, amount) => total + amount),
            items: selectedpassenger.map(passenger => ({
                type: passenger.name,
                amount: passenger.pivot.amount
            }))
        }
        console.log(packageDIspatch, 'XABLAU')
        cart.add(packageDIspatch).then(response => {

            if(response.error) return  alert('Problema ao completar pedido:'+response.message)
            dispatch({ type: 'ADD_BAG', payload: response.data })
            // history.push('/mochila?trackid=' + data.code)

        })
    }

    const packageInfo = () => {

        return (
            <Styled.PackageInfoContainer open={packageDetails.open}>
                <Styled.PackageInfo>

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

                                <Styled.AccommodationTitle>Selecione os Triplers</Styled.AccommodationTitle>
                                {
                                    selectedpassengers.map((passenger, index) => (
                                        index == 0 ?

                                            <select key={index} defaultValue={1} {...register('passengers.[' + index + ']', { required: false })}>
                                                <option value={1}>{passengerTypes[0]?.name}</option>
                                            </select> :

                                            <select key={index} {...register('passengers.[' + index + ']', { required: true })}>
                                                {passengerTypes.map((passenger, key) => <option key={key} value={passenger.id}>{passenger.name}</option>)}
                                            </select>
                                    ))
                                }
                                {errors?.passengers?.type === "required" && <small>Selecione o passageiro</small>}
                            </Styled.PackageBodySection>
                            <Styled.PricePackageContent>
                                <Styled.PriceInfo>
                                    <Styled.Price>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(totalAmount)}</Styled.Price>
                                    <small>Total do Pacote sem taxas adicionais</small>
                                </Styled.PriceInfo>
                                <Button disabled={!isValid} block href={'/account/login'} color={'primary'}>Fechar Pacote</Button>
                            </Styled.PricePackageContent>
                        </form>
                    </Styled.PackageBody>
                </Styled.PackageInfo>
            </Styled.PackageInfoContainer>
        )

    }

    return (
        <React.Fragment>
            <h4>Pacotes</h4>
            <Swiper direction="horizontal" spaceBetween={5} slidesPerView={2.1} freeMode={true}>

                {packages.map((tripPackage, key) => (
                    <SwiperSlide key={key}>
                        <Styled.PackageItem onClick={() => setPackageDetails({ open: !packageDetails.open, ...tripPackage })}>
                            <Styled.PackageItemHeader>
                                <Styled.PackageTitle>{tripPackage.name}</Styled.PackageTitle>
                            </Styled.PackageItemHeader>
                            <Styled.PackageItemBody>
                                <p>{tripPackage.description}</p>
                            </Styled.PackageItemBody>
                            <Styled.PackagePriceContent>
                                <Styled.PackageAmount>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(tripPackage.amount + data.price)}</Styled.PackageAmount>
                                <small>Por pessoa</small>
                            </Styled.PackagePriceContent>
                            <Styled.PackageItemFooter>
                                <Button color={'secondary'}>Quero este</Button>
                            </Styled.PackageItemFooter>
                        </Styled.PackageItem>
                    </SwiperSlide>
                ))}

                {packageInfo()}

            </Swiper>
        </React.Fragment>
    )
}