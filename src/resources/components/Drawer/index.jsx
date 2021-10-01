import React from 'react'
import * as Styled from './styles';

export default function Drawer({ children, title, open, onClose }) {
    return (
        <Styled.Drawer open={open}>
            <Styled.DrawerContainer>
                <Styled.DrawerHeader>
                    <span> {title}  </span>
                    <i onClick={() => onClose(!open)} className={'las la-times'}></i>
                </Styled.DrawerHeader>
                <Styled.DrawerBody>{children}</Styled.DrawerBody>
            </Styled.DrawerContainer>
        </Styled.Drawer>
    )
}