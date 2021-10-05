import React from 'react';

import * as Styled from './styles';

const Result = ({ title, subTitle, extra, icon }) => (
    <Styled.Container>
        {icon && <Styled.IconContainer>{icon}</Styled.IconContainer>}
        <Styled.Title>{title}</Styled.Title>
        <Styled.SubTitle>{subTitle}</Styled.SubTitle>
        <Styled.Extra>{extra}</Styled.Extra>
    </Styled.Container>
)

export default Result;