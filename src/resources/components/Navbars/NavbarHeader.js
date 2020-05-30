import React, { useState, useEffect } from 'react';
import css from './NavbarHeader.module.scss';

import NavbarDesktop from './NavbarDesktop/NavbarDesktop';
import NavbarMobile from './NavbarMobile/NavbarMobile';

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
        <>
            <NavbarDesktop  />
            <NavbarMobile />
        </>
    );
}
export default NavbarHeader;
