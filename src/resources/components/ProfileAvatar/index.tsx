import React from 'react'
import * as Styled from './styles';


type Props = {
    color: 'white' | 'default'
}
export default function ProfileAvatar({ color }: Props) {
    return (
        <Styled.ProfileAvatar color={color}>
            <Styled.Avatar><i className={'las la-user'}></i></Styled.Avatar>
        </Styled.ProfileAvatar>
    )
}