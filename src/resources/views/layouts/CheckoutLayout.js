import React from 'react';
import NavbarHeader from '../../components/Navbars/NavbarHeader';
import Footer from '../../components/Footer/Footer';
import css from './Layout.module.scss';

// import { Container } from './styles';

function CheckoutLayout({ children , pageTitle }) {
  return (
    <div className={css.mainWrapper}>
      {children}
    </div>
  );
}

export default CheckoutLayout;