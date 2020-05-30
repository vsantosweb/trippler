import React from 'react';
import NavbarHeader from '../../components/Navbars/NavbarHeader';
import Footer from '../../components/Footer/Footer';

// import { Container } from './styles';

function SiteLayout({ children , pageTitle }) {
  return (
    <main>
      <NavbarHeader />
      {children}
      <Footer />
    </main>
  );
}

export default SiteLayout;