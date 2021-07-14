import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import * as Styled from './style';

const CardEvent = ({ data, category, image }) => {
    console.log(data)
    return (
        <Styled.CardEvent>
            <Styled.CardEventBody to={{pathname: '/trips/'+data.trip.name, state:data.code}}>
                <Styled.CardEventImage src={image} />
                <Styled.CategoryTag> {category.name} </Styled.CategoryTag>
                <Styled.CardEventTitle>{data.trip.name}</Styled.CardEventTitle>
                <Styled.CardEventInfo>
                    <Styled.CardEventPriceWrapper>
                        <Styled.CardEventPriceText>A partir de</Styled.CardEventPriceText>
                        <Styled.CardEventPrice>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(data.price)}</Styled.CardEventPrice>
                    </Styled.CardEventPriceWrapper>
                </Styled.CardEventInfo>
            </Styled.CardEventBody>
        </Styled.CardEvent>
    );
}
export default CardEvent;