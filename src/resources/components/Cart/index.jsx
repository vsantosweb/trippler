import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import css from './Cart.module.scss';
import cookie from 'js-cookie';

export default function Cart() {

    const [openCart, setOpenCart] = useState(false);
    const [cart, setCart] = useState(false);

    const selectCart = useSelector(state => state.cart);

    useEffect(() => {
        // cookie.remove('cart')
        if(selectCart){
            return setCart(selectCart);
        }
        if(cookie.get('cart') !== undefined){
            return setCart(cookie.get('cart'));
        }

        // setCart(cookie.get('cart'));
        console.log('montei o carinbho')
    }, [])
    
    
    return (
        <div className={css.cart}>
            <button onMouseOver={() => setOpenCart(true)} className={css.cartButton}>
                {cart ? <span className={css.count}>!</span> : ''}
                <span className="material-icons">shopping_bag</span>
            </button>
            {openCart ?
                <div onMouseLeave={() => setOpenCart(false)} className={css.cartWrapper}>
                    <div className={css.cartHeader}>Meu pacote</div>
                    <div className={css.cartBody}>
                        <h3 className={css.tripName}>Cânion Fortaleza - Cambará do Sul - RS</h3>
                        <p>
                            2 adultos x R$ 429,00  <br />
                            1 criança x R$ 349,00
                        </p>
                    </div>
                    <div className={css.cartFooter}>
                        <div className={css.cartFooterContent}>
                            <span className={css.totalText}>Subtotal</span>
                            <span className={css.totalAmount}>350,00</span>
                        </div>
                        <button className={'btn btn-info'} >Finalizar</button>
                    </div>
                </div> : ''}
        </div>
    )
}