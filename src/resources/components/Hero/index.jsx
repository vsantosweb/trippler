import React from 'react'
import * as StyledHero from './style';

export default function Hero() {
    return (
        <StyledHero.Container>
            {/* <StyledHero.Banner>
                <StyledHero.Title>Encontre sua trip Arrume sua Bag e bora viajar barato</StyledHero.Title>
            </StyledHero.Banner> */}
            <StyledHero.HeroCategories>
                <StyledHero.HeroCategory>
                    <StyledHero.HeroCategoryItem>
                        <StyledHero.HeroCategoryIcon><i className={'las la-calendar'}></i> </StyledHero.HeroCategoryIcon>
                        <StyledHero.HeroCategoryText>FDS</StyledHero.HeroCategoryText>
                    </StyledHero.HeroCategoryItem>
                    <StyledHero.HeroCategoryItem>
                        <StyledHero.HeroCategoryIcon><i className="las la-exchange-alt"></i></StyledHero.HeroCategoryIcon>
                        <StyledHero.HeroCategoryText>Bate & Volta </StyledHero.HeroCategoryText>
                    </StyledHero.HeroCategoryItem>
                    <StyledHero.HeroCategoryItem>
                        <StyledHero.HeroCategoryIcon><i className="las la-umbrella-beach"></i></StyledHero.HeroCategoryIcon>
                        <StyledHero.HeroCategoryText>Férias</StyledHero.HeroCategoryText>
                    </StyledHero.HeroCategoryItem>
                </StyledHero.HeroCategory>
            </StyledHero.HeroCategories>
        </StyledHero.Container>
    )
}
