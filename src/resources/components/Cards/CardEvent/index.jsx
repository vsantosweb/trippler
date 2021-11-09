import React from 'react';
import moment from 'moment';
import Link from 'next/link'

import * as Styled from './style';

const CardEvent = ({ data, category, image }) => {
    return (
        <Styled.CardEvent>
            <Link href={'/trip/' + data.uuid}>
                <Styled.CardEventBody>
                    <Styled.CardEventImage src={image} />
                    {/* <Styled.CategoryTag> {category.name} </Styled.CategoryTag> */}
                    <Styled.CardEventTitle>{data.name}</Styled.CardEventTitle>
                    <Styled.CardEventInfo>
                        <Styled.CardEventPriceWrapper>
                            <Styled.CardEventPriceText>A partir de</Styled.CardEventPriceText>
                            <Styled.CardEventPrice>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(data.price_from)}</Styled.CardEventPrice>
                        </Styled.CardEventPriceWrapper>
                    </Styled.CardEventInfo>
                </Styled.CardEventBody>
            </Link>
        </Styled.CardEvent>
    );
}
export default CardEvent;