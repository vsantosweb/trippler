import styled from 'styled-components';

export const ProfileAvatar = styled.div`
    font-size: 1.4em;
`

export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    background: ${({ background, theme }) => background || theme.colors.primary };
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.4em;
    color: #ffffff;
`