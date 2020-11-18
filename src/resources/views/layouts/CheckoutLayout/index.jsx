import React from 'react';
import css from './Layout.module.scss';

function CheckoutLayout({ children , pageTitle }) {
  return (
    <div className={css.mainWrapper}>
      {children}
    </div>
  );
}

export default CheckoutLayout;