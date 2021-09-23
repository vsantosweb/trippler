import React from 'react';
import Button from '../_Elements/Button';
import Logo from '../../images/logo/tripler-logo.svg';
import * as Navbar from './styles';
import Burger from '../Burger';
import Image from 'next';
import { AuthContext } from '../../../providers/auth/AuthProvider';
import ProfileAvatar from '../ProfileAvatar';
import Link from 'next/link';

export default function Nav({ overlay, props }) {

    const [open, setOpen] = React.useState(false);
    const { user } = React.useContext(AuthContext);
    return (
        <Navbar.Container overlay={overlay}>
            <Navbar.Header>
                <Navbar.Wrapper>
                    <Navbar.Area><Burger open={open} onClick={() => setOpen(!open)} /></Navbar.Area>
                    <Navbar.Area> <Logo width="80px" /></Navbar.Area>
                    <Navbar.Area> 
                        {/* <Navbar.Search /> */}
                    </Navbar.Area>
                    <Navbar.NavbarArea>
                        <Navbar.Nav navOpen={open}>
                            <Navbar.NavLink href={'#'}>Destinos</Navbar.NavLink>
                            <Navbar.NavLink href={'#'}>Bate & Volta </Navbar.NavLink>
                            <Navbar.NavLink href={'#'}>Férias </Navbar.NavLink>
                            <Navbar.NavLink href={'#'}>Final de Semana</Navbar.NavLink>
                        </Navbar.Nav>
                    </Navbar.NavbarArea>
                    <Navbar.Area>
                        {!user ? <Button variant={'outlined'} href={'/account/login'} color={'primary'}>Entrar</Button> :
                            <Link href={'/account'} ><a><ProfileAvatar color={'default'} avatar={user.avatar ? <img src={user.avatar} /> :
                                <i className={'las la-user'}></i>} /></a></Link>}
                    </Navbar.Area>
                </Navbar.Wrapper>
            </Navbar.Header>
        </Navbar.Container>

    )
}