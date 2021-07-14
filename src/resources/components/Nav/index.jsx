import React from 'react';
import { Button } from '../_Elements/Button';
import Logo from '../../images/logo/tripler-logo.svg';
import * as Navbar from './styles';
import Burger from '../Burger';

export default function Nav({ overlay, props }) {

    const [open, setOpen] = React.useState(false);

    return (
        <Navbar.Container overlay={overlay}>
            <Navbar.Header>
                <Navbar.Wrapper>
                    <Navbar.Area><Burger open={open} onClick={() => setOpen(!open)} /></Navbar.Area>
                    <Navbar.Area><img width={'100'} src={Logo} /> </Navbar.Area>
                    <Navbar.NavbarArea>
                        <Navbar.Nav navOpen={open}>
                            <Navbar.NavLink href={'#'}>Destinos</Navbar.NavLink>
                            <Navbar.NavLink href={'#'}>Bate & Volta </Navbar.NavLink>
                            <Navbar.NavLink href={'#'}>Férias </Navbar.NavLink>
                            <Navbar.NavLink href={'#'}>Final de Semana</Navbar.NavLink>
                        </Navbar.Nav>
                    </Navbar.NavbarArea>
                    <Navbar.Area>
                        <Button outlined variant={'white'}>Entrar</Button>
                    </Navbar.Area>
                </Navbar.Wrapper>
            </Navbar.Header>
        </Navbar.Container>

    )
}