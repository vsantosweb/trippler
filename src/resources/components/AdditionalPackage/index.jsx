import React from 'react'
import * as Styled from './styles';
import Switch from "react-switch";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

export default function AdditionalPackage({ data, passengers }) {

    const [open, setOpen] = React.useState(true);
    const [enabledPassenger, setEnablePaassenger] = React.useState([]);
    const [ currentAddtPackage, setCurrentAddtPackage ] = React.useState({});
    console.log(passengers, 'DATA')
   
    const handleEnablePassager = (e, el) => {
        console.log(el.target,'VALOR')
    }
    const AddtPackageShow = () => {
        return (

            <Styled.AddtPackageContainer open={open}>
                <Styled.AddtPackageHeader>
                    <Styled.AddtPackageTitle>{currentAddtPackage.name}</Styled.AddtPackageTitle>
                    <i onClick={() => setOpen(!open)} className={'las la-times'}></i>
                </Styled.AddtPackageHeader>
                <Styled.AddtPackageContent>
                    <Styled.AddtPackagePassengerList>
                        {passengers?.map((passenger, index) => (
                            <Styled.AddtPackagePassengerListItem key={index}>
                                <span>{passenger.type}</span>
                                <Switch value={passenger} name={'passger['+index+']'} onChange={handleEnablePassager}  />
                            </Styled.AddtPackagePassengerListItem>
                        ))}
                    </Styled.AddtPackagePassengerList>
                </Styled.AddtPackageContent>
                <Styled.AddtPackageFooter>
                    <Styled.AddtrPackageButton variant={'primary'}>Limpar</Styled.AddtrPackageButton>
                    <Styled.AddtrPackageButton variant={'primary'}>Incluir todos</Styled.AddtrPackageButton>
                </Styled.AddtPackageFooter>
            </Styled.AddtPackageContainer>
        )
    }

    return (
        <React.Fragment>
            <Swiper direction="horizontal" spaceBetween={10} slidesPerView={2.3} freeMode={true}>
                {[0,1,2,3,4]?.map((item, key) => (
                    <SwiperSlide key={key}>
                        <Styled.Container onClick={() => {
                            setOpen(true)
                            setCurrentAddtPackage(item)
                        }}>
                            <Styled.Thumbnail>
                                <img src={'https://www.fully.com.br/upload/galeria/675/galeria_1575382463.jpg'} />
                            </Styled.Thumbnail>
                            <Styled.Title>{'Passeio de Jets Ki'}</Styled.Title>
                            <Styled.Description>{'Lorem Ipsum is simply dummy text of the printing and'}</Styled.Description>
                            <Styled.Price>{'20,00'}</Styled.Price>
                        </Styled.Container>
                    </SwiperSlide>
                ))}
            </Swiper>

            {open && AddtPackageShow()}

        </React.Fragment>
    )
}