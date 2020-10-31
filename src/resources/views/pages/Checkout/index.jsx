import React, { useEffect, useState } from 'react';
import css from './Checkout.module.scss';
import { Container, Row, Col } from 'react-grid-system';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerProfile } from '../../../../store/customer/customerAction';
import { getCart } from '../../../../store/cart/cartAction';

export default function Checkout() {

    const [paymentMethods, setPaymentMethods] = useState([]);
    const payMethods = [
        {
            name: 'Cartão de Credito',
            slug: 'credit_card',
            active: 0
        },
        {
            name: 'Boleto',
            slug: 'boleto',
            active: 0
        }
    ]
    const dispatch = useDispatch();
    const customer = useSelector(state => state.customer);
    const order = dispatch(getCart());
    console.log(order.cart, 'sdsadasd')

    useEffect(() => {
        setPaymentMethods(payMethods);

    }, [])

    const handlePaymentMethod = (e) => {

        for (let paymentMethod of paymentMethods) {

            if (paymentMethod.slug === e.target.value) {
                paymentMethod.active = true;
                console.log(paymentMethod)
                setPaymentMethods([...paymentMethods]);
            } else {
                paymentMethod.active = false;
                setPaymentMethods([...paymentMethods]);
            }

        }

    }
    console.log(paymentMethods, 'resultado final!!!')

    return (
        <div className={`${css.wrapperContent} ${css.sectionBlock} ${css.cartWrapper}`}>
            <Container className={css.containerWrapper}>
                <Row>
                    <Col md={8}>
                        <form>
                            <div>
                                <h4> 1. Detalhes do pagamento</h4>
                                <div className={'form-row'}>
                                    <div className={'form-group col-md-12'}>
                                        <input type={'text'} name={'name'} className={'form-control'} defaultValue={customer.name} />
                                    </div>
                                    <div className={'form-group col-md-12'}>
                                        <input type={'email'} name={'email'} className={'form-control'} defaultValue={customer.email} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4> 2. Forma de pagamento</h4>
                                {paymentMethods.map((method, key) => (
                                    <div className={`${css.payMentMethod} form-row`} key={key}>
                                        <div className={`${css.payMentMethodHead} form-check`}>
                                            <input className="form-check-input" onChange={handlePaymentMethod} type="radio" name="payment_method" id={method.slug} value={method.slug} />
                                            <label className="form-check-label" htmlFor={method.slug}> {method.name} - {method.active} </label>
                                        </div>
                                        {
                                            method.active ? method.slug === 'credit_card' ?
                                                <div className={css.payMentMethodBody}>
                                                    <div className={'form-row'}>
                                                        <div className={'form-group col-md-12'}>
                                                            <label>Numero do cartão</label>
                                                            <input type={'text'} className={'form-control'} />
                                                        </div>
                                                        <div className={'form-group col-md-12'}>
                                                            <label>Nome do titular</label>
                                                            <input type={'text'} className={'form-control'} />
                                                        </div>
                                                        <div className={'form-group col-md-6'}>
                                                            <label>Data de expiração</label>
                                                            <input type={'text'} className={'form-control'} />
                                                        </div>
                                                        <div className={'form-group col-md-6'}>
                                                            <label>CCV</label>
                                                            <input type={'text'} className={'form-control'} />
                                                        </div>
                                                    </div>
                                                </div>

                                                :
                                                <div className={css.payMentMethodBody}>
                                                <div className={'form-row'}>
                                                    <div className={'form-group col-md-12'}>
                                                        <label>Boleto</label>
                                                        <img src={'https://www.growdeck.com.br/wp-content/uploads/2019/06/boleto-icon.png'} width={'200'} />
                                                        <button>Gerar Boleto</button>
                                                    </div>
                                                </div> 
                                                </div>
                                                : ''
                                        }
                                    </div>
                                ))}

                            </div>
                        </form>
                    </Col>
                    <Col md={4}>
                        <div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

