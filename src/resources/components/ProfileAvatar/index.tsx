import React from 'react'
import * as Styled from './styles';


type Props = {
    color: 'white' | 'default';
    avatar: any
}
export default function ProfileAvatar({ color, avatar }: Props) {
    return (
        <Styled.ProfileAvatar color={color}>
            <Styled.Avatar>{avatar}</Styled.Avatar>
        </Styled.ProfileAvatar>
    )
}