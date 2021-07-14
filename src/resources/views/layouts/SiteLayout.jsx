import React from 'react';
import Footer from '../../components/Footer';
import css from './Layout.module.scss';

// import { Container } from './styles';

function SiteLayout({ children }) {
  return (
    <div className={css.mainWrapper}>
      {children}
      <Footer />
    </div>
  );
}

export default SiteLayout;