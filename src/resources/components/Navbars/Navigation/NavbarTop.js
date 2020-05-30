import React from 'react';

import css from './NavbarTop.module.scss';
import { Button } from 'antd';
const Navigation = ({ mobile, mobileToggle }) => {

    return (
        (mobile) ?
            <div className={css.navMobile}>

                <nav id="porra" className={`${css.mobileNavigation}`}>
                    <div className={css.navContent}>
                        <div className={css.navHeader}>
                            <div className={css.brandContent}>Logo</div>
                            <button onClick={() => mobileToggle()} className={css.closeBtn}><span class="material-icons">close</span></button>
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
            </nav>
    );
}
export default Navigation;



