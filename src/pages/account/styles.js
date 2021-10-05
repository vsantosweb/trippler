import styled from 'styled-components';

export const ProfileDisplay = styled.div`
    display: flex;
    gap: 10px;
    border-bottom: solid 1px #ddd;
    padding: ${({ theme }) => theme.defaultContainer.spacing};
    background: ${({ theme }) => theme.colors.primary};
    align-items: center;
    a{
        border-radius: 100%;
        font-size: 1.8em;
        padding: 0;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
`;


export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: #fff;
`

export const AccountCard = styled.a`
    display: flex;
    flex: 1;
    align-items: center;
    border-bottom: solid 1px #ddd;
    color: inherit;
    padding: ${({ theme }) => theme.defaultContainer.spacing};
    gap: 15px;
`
export const AccountCardContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const AccountCardAction = styled.div`
font-size: 1.4em;

`

export const AccountCardIcon = styled.div`
font-size: 1.6em;
`

export const AccountCardTitle = styled.div`
font-size: 1em;
font-weight: bold;
`

export const AccountCardDescription = styled.p`
    margin: 0;
    font-size: 14px;
`