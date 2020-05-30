import React, { useState, useEffect } from 'react';
import css from './NavbarHeader.module.scss';

import { Button } from 'antd';

const NavbarHeader = () => {

    const [mobile, setMobile] = useState(false);
    const [mobileNav, setmobileNav] = useState('');
    const openNavigation = () => {
        setMobile(true)
        let element = document.getElementById('porra');
        // element.classList.toggle(css.mobileToggle);
        console.log(mobileNav, 'caralhoooo!')
        return;

    }
    useEffect(() => {
        if (mobile) {
            setmobileNav({ element: document.getElementById('porra') });
        }
    }, [])
    const closeNavigation = () => {

    }

    return (
        <div className={css.headerContent}>
            <header className={css.topHeader}>
                <div className={css.navbarContent}>
                    <div className={css.navbarHeader}>
                        <button onClick={() => openNavigation()} className={css.mobileButton}>
                            <span class="material-icons">menu</span>
                        </button>
                        <div className={css.brandContent}>
                            <img src={'https://travelhotel.wpengine.com/wp-content/uploads/2018/11/Traveler_logo.svg'}></img>
                        </div>
                        {(mobile) ?
                            <div className={css.navMobile}>

                                <nav id="porra" className={`${css.mobileNavigation}`}>
                                    <div className={css.navContent}>
                                        <div className={css.navHeader}>
                                            <div className={css.brandContent}>Logo</div>
                                            <button  className={css.closeBtn}><span class="material-icons">close</span></button>
                                        </div>
                                        <ul className={`${css.navigation}`}>
                                            <li className={css.navItem}>
                                                <a className={css.navLink} href='#'>Acessar</a>
                                            </li>
                                            <li className={css.navItem}>
                                                <a className={css.navLink} href='#'>Cadastre-se</a>
                                            </li>
                                        </ul>
                                        <hr />
                                        <ul className={`${css.navigation}`}>
                                            <li className={css.navItem}>
                                                <a className={css.navLink} href='#'>Finais de semana</a>
                                            </li>
                                            <li className={css.navItem}>
                                                <a className={css.navLink} href='#'>Bate & Volta</a>
                                            </li>
                                            <li className={css.navItem}>
                                                <a className={css.navLink} href='#'>Feriados</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className={css.navMask}></div> */}
                                    <div className={css.overlay}></div>
                                </nav>

                            </div> :

                            <nav className={`${css.desktopNavigation}`}>
                                <ul className={`${css.navigation}`}>
                                    <li className={css.navItem}>
                                        <a className={css.navLink} href='#'>Finais de semana</a>
                                    </li>
                                    <li className={css.navItem}>
                                        <a className={css.navLink} href='#'>Bate & Volta</a>
                                    </li>
                                    <li className={css.navItem}>
                                        <a className={css.navLink} href='#'>Feriados</a>
                                    </li>

                                </ul>
                                <div>
                                    <Button style={{ marginRight: '2px' }} type={'secondary'}>Acessar Conta</Button>
                                    <Button style={{ marginLeft: '2px' }} type={'primary'}>Registre-se</Button>
                                </div>
                            </nav>}
                    </div>
                </div>
            </header>
        </div>
    );
}
export default NavbarHeader;
