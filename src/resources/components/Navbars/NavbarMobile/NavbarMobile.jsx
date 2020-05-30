import React from 'react';

import css from './NavbarMobile.module.scss';
import { Button, Space } from 'antd';

const NavbarMobile = () => {
    
    const handleCloseAside = () => {
        const navbarMobile = document.getElementById('asideNav');
        navbarMobile.classList.toggle(css.mobileActive);
    }
    return(
        <aside className={css.aside} id={'asideNav'}>
            <div className={css.headerWrapper}>
                <div className={css.leftContent}>
                    <div className={css.brand}>
                        <img src={'https://travelhotel.wpengine.com/wp-content/uploads/2018/11/Traveler_logo.svg'} />
                    </div>
                    <a onClick={handleCloseAside} className={css.toggleNavigation} href={'#'}><span className={'material-icons'}>close</span> </a>

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
            <div className={css.mobileOverlay}></div>
        </aside>
    );
}

export default NavbarMobile;