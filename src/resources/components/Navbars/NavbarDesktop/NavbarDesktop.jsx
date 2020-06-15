import React from 'react';

import css from './NavbarDesktop.module.scss';
import { mobileActive } from '../NavbarMobile/NavbarMobile.module.scss';

import { Button, Space } from 'antd';
const NavbarDesktop = () => {

    const handleNavbarMobile = () => {
        const navbarMobile = document.getElementById('asideNav');
        navbarMobile.classList.toggle(mobileActive);
    }

    return (
        <header className={css.header}>
            <div className={css.headerWrapper}>
                <a onClick={ handleNavbarMobile } className={css.toggleNavigation} href={'#'}><span className={'material-icons'}>menu</span> </a>
                <div className={css.leftContent}>
                    <div className={css.brand}>
                        <h3>Viagens</h3>
                        {/* <img src={'https://travelhotel.wpengine.com/wp-content/uploads/2018/11/Traveler_logo.svg'} /> */}
                    </div>
                </div>
                <nav className={css.mainNavigation}>
                    <ul className={css.nav}>
                        <li className={css.navItem}><a className={css.navLink}>Bate & Volta</a></li>
                        <li className={css.navItem}><a className={css.navLink}>Férias</a></li>
                        <li className={css.navItem}><a className={css.navLink}>Feriado</a></li>
                        <li className={css.navItem}><a className={css.navLink}>Atendimento</a></li>
                        <li className={css.navItem}><a className={css.navLink}>Sou Agente</a></li>
                    </ul>
                </nav>
                <div className={css.rightContent}>
                    <Space size={'small'}>
                        <Button style={{ fontWeight: 'bold' }} type={'primary'} size={'large'} ghost>Login</Button>
                        <Button style={{ fontWeight: 'bold' }} type={'primary'} size={'large'}>Registre-se</Button>
                    </Space>
                </div>
            </div>
        </header>
    );
}

export default NavbarDesktop;