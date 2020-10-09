import React from 'react';

import css from './NavbarDesktop.module.scss';
import { mobileActive } from '../NavbarMobile/NavbarMobile.module.scss';
import Cart from '../../Cart';

export default function NavbarDesktop() {

    const handleNavbarMobile = () => {
        const navbarMobile = document.getElementById('asideNav');
        navbarMobile.classList.toggle(mobileActive);
    }

    return (
        <header className={css.header}>
            <div className={css.headerWrapper}>
                <button onClick={handleNavbarMobile} className={css.toggleNavigation}><span className={'material-icons'}>menu</span> </button>
                <div className={css.leftContent}>
                    <div className={css.brand}>
                        <h3>Viagens</h3>
                    </div>
                </div>
                <nav className={css.mainNavigation}>
                    <ul className={css.nav}>
                        <li className={css.navItem}><a href={'#'} className={css.navLink}>Bate & Volta</a></li>
                        <li className={css.navItem}><a href={'#'} className={css.navLink}>Férias</a></li>
                        <li className={css.navItem}><a href={'#'} className={css.navLink}>Feriado</a></li>
                        <li className={css.navItem}><a href={'#'} className={css.navLink}>Atendimento</a></li>
                        <li className={css.navItem}><a href={'#'} className={css.navLink}>Sou Agente</a></li>
                    </ul>
                </nav>
                <div className={css.rightContent}>
                    <button className={'btn btn-secondary'}>Login</button>
                    <button className={'btn btn-secondary'}>Registre-se</button>
                    <Cart/>
                </div>
            </div>
        </header>
    );
}

