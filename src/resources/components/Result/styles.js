import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 48px 32px; */
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    /* justify-content: center; */
`;

export const IconContainer = styled.div`
    font-size:2em;
    background: ${({ theme }) => theme.colors.primary};
    padding: .4em;
    border-radius: 100%;
    color: #fff;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h4`
    line-height: 1.8;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;

`

export const SubTitle = styled.div`
    font-size: 18px;
    margin-bottom: 1em;
`
export const Extra = styled.div`
display: flex;
gap: 10px;
align-items: center;
width: 100%;
`