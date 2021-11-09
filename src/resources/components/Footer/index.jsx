import React from 'react';
import * as Styled from './styles';
import Image from 'next/image'

const paymentMethods = ['elo-hipercard', 'master-card', 'paypal', 'visa'];
export default function Footer() {
  return (
    <Styled.Footer>
      <Styled.FooterListContainer>
        <Styled.FooterListTitle>Formas de Pagamento</Styled.FooterListTitle>
        {paymentMethods.map((brand, key) => (
          <Styled.FooterList key={key}>
            <Styled.FooterListItem><Image src={require(`../../assets/images/payment-methods/${brand}.png`)} /></Styled.FooterListItem>
          </Styled.FooterList>
        ))}
      </Styled.FooterListContainer>
      <Styled.CopyRight>
        Copyright © {new Date().getFullYear()} - Tripler Turismo & Eventos. All rights reserved
      </Styled.CopyRight>
    </Styled.Footer>
  )
}

