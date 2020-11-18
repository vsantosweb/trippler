import React from 'react';
import Footer from '../../components/Footer';
import NavbarHeader from '../../components/Navbars/NavbarHeader';
import css from './Layout.module.scss';

// import { Container } from './styles';

function SiteLayout({ children }) {
  return (
    <div className={css.mainWrapper}>
      <NavbarHeader />
      {children}
      <Footer />
    </div>
  );
}

export default SiteLayout;