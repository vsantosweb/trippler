import React from 'react';
import * as Styled from './style';

export default function SearchBar() {

    return (
        <Styled.Container>
            <Styled.SearchBar>
                <i className="las la-search"></i>
                <Styled.SearchInput placeholder={'Ex. Arraial do Cabo'} />
            </Styled.SearchBar>
            <Styled.SearchButton color={'primary'}>Procurar Trips</Styled.SearchButton>
        </Styled.Container>
    );
}