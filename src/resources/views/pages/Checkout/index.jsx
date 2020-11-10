import React, { useEffect, useState } from 'react';
import css from './Checkout.module.scss';
import { Container, Row, Col } from 'react-grid-system';
import { useDispatch, useSelector } from 'react-redux';
import Validator from 'Validator';
import { getCart } from '../../../../store/cart/cartAction';
import pagarme from 'pagarme';
import Payment from '../../../../api/Checkout/Payment';

export default function Checkout() {

    const [paymentMethods, setPaymentMethods] = useState([]);
    const [installments, setInstallments] = useState([]);
    const [creditCard, setCreditCard] = useState({ card_number: '', card_holder_name: '', card_expiration_date: '', card_cvv: '' });
    const [disableSubmit, setDisableSubmit] = useState(true);
    const [customerData, setCustomerData] = useState(false);
    const [checkoutData, setCheckoutData] = useState(false);

    const dispatch = useDispatch();
    const order = dispatch(getCart());
    const customer = useSelector(state => state.customer);
    const payMethods = [{ name: 'Cartão de Credito', slug: 'credit_card', }, { name: 'Boleto', slug: 'boleto', }];
    useEffect(() => {

        setCheckoutData(order.cart)
        setCustomerData(customer);
        console.log(order, 'aaaaaaaaaaaaaaaaaaaa')
        setPaymentMethods(payMethods);

        pagarme.client.connect({ api_key: 'ak_test_7ZdqNZE9QSlamtPbi5v030vmN1v1vj' })
            .then(client => client.transactions.calculateInstallmentsAmount({
                id: 1234,
                max_installments: 6,
                free_installments: 3,
                interest_rate: 10,
                amount: parseInt(order.cart.totalAmount * 100)
            }))
            .then((response, key) => {

                let items = [];
                for (let key in response.installments) {
                    items.push(response.installments[key])
                }
                setInstallments(items);
            })
    }, [customer])

    const creditCardRules = (creditCardData) => {

        let invalid = false;

        for (let key in creditCardData) {

            if (key !== 'brand' && !creditCardData[key]) {

                invalid = true
            }
        }

        return invalid
    }

    const handlePaymentMethod = (e) => {
        for (let paymentMethod of paymentMethods) {

            if (paymentMethod.slug === e.target.value) {
                paymentMethod.active = true;
                setPaymentMethods([...paymentMethods]);
                setCheckoutData({ ...checkoutData, paymentMethod });

            } else {
                paymentMethod.active = false;
                setPaymentMethods([...paymentMethods]);
            }
        }

    }

    const handleCustomer = (e) => {

        let json = Object.assign({}, creditCard);
        json[e.target.name] = e.target.value;
        setCustomerData(json);
    }
    const handleCreditCard = (e) => {

        let json = Object.assign({}, creditCard);
        json[e.target.name] = e.target.value;
        setCreditCard(json);

        let cardValidations = pagarme.validate({ card: json });

        if (!creditCardRules(cardValidations.card)) {

            delete creditCard.installments;
            checkoutData.installments = json.installments;
            console.log(json, 'caraioooooooooo!!!!')

            pagarme.client.connect({ api_key: 'ak_test_7ZdqNZE9QSlamtPbi5v030vmN1v1vj' })
                .then(client => client.cards.create(json))
                .then(card =>{
                    setCheckoutData({...checkoutData, card})
                    console.log(card)
                })

            return setDisableSubmit(false);
        }
        setDisableSubmit(true);
    }

    const handleSubmitPayment = (e) => {
        e.preventDefault();
        if (checkoutData.installments === undefined) {
            checkoutData.installments = 1;
        }
        checkoutData.customer = customerData;
        console.log(checkoutData)

        Payment.create(checkoutData).then(response => console.log(response, 'irraaa'));
    }
    return (
        <div className={`${css.wrapperContent} ${css.sectionBlock} ${css.cartWrapper}`}>
            <Container className={css.containerWrapper}>
                <Row>
                    <Col md={8}>
                        <form onSubmit={handleSubmitPayment} >
                            <div>
                                <h4> 1. Detalhes do pagamento</h4>
                                <h5>Dados do pagante</h5><hr />
                                <div className={'form-row'}>
                                    <div className={'form-group col-md-12'}>
                                        <label>Nome</label>
                                        <input disabled type={'text'} name={'name'} className={'form-control'} onChange={handleCustomer} defaultValue={customerData.name} />
                                    </div>
                                    <div className={'form-group col-md-6'}>
                                        <label>Email</label>
                                        <input disabled type={'email'} name={'email'} className={'form-control'} onChange={handleCustomer} defaultValue={customerData.email} />
                                    </div>
                                    <div className={'form-group col-md-6'}>
                                        <label>CPF</label>
                                        <input disabled type={'document'} name={'text'} className={'form-control'} onChange={handleCustomer} defaultValue={customerData.cpf} />
                                    </div>
                                </div>
                                <h5>Endereço</h5><hr />
                                {customerData ? <div className={'form-row'}>
                                    <div className={'form-group col-md-4'}>
                                        <label>CEP</label>
                                        <input disabled type={'postcode'} name={'text'} className={'form-control'} onChange={handleCustomer} defaultValue={customerData.address.postcode} />
                                    </div>
                                    <div className={'form-group col-md-8'}>
                                        <label>Endereço</label>
                                        <input disabled type={'document'} name={'address_1'} className={'form-control'} onChange={handleCustomer} defaultValue={customerData.address.address_1} />
                                    </div>
                                    <div className={'form-group col-md-6'}>
                                        <label>Bairro</label>
                                        <input disabled type={'document'} name={'address_2'} className={'form-control'} onChange={handleCustomer} defaultValue={customerData.address.address_2} />
                                    </div>
                                    <div className={'form-group col-md-6'}>
                                        <label>Cidade</label>
                                        <input disabled type={'document'} name={'city'} className={'form-control'} onChange={handleCustomer} defaultValue={customerData.address.city} />
                                    </div>
                                </div> : ''}

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
                                                        <div className={'form-group col-md-6'}>
                                                            <label>Parcelas</label>
                                                            <select type={'text'} name={'installments'} className={'form-control'} onChange={handleCreditCard} defaultValue={1} >

                                                                {installments.map((item, key) =>

                                                                    <option key={key} value={item.installment} defaultValue={1} >
                                                                        {`${item.installment}x ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((item.installment_amount / 100).toFixed(2))}`}
                                                                    </option>

                                                                )}
                                                            </select>
                                                        </div>
                                                        <div className={'form-group col-md-12'}>
                                                            <label>Numero do cartão</label>
                                                            <input type={'text'} name={'card_number'} className={'form-control'} onChange={handleCreditCard} />
                                                        </div>
                                                        <div className={'form-group col-md-12'}>
                                                            <label>Nome do titular</label>
                                                            <input type={'text'} name={'card_holder_name'} className={'form-control'} onChange={handleCreditCard} />
                                                        </div>
                                                        <div className={'form-group col-md-6'}>
                                                            <label>Data de expiração</label>
                                                            <input type={'text'} name={'card_expiration_date'} className={'form-control'} onChange={handleCreditCard} />
                                                        </div>
                                                        <div className={'form-group col-md-6'}>
                                                            <label>CVV</label>
                                                            <input type={'text'} name={'card_cvv'} className={'form-control'} onChange={handleCreditCard} />
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
                                <button disabled={disableSubmit} >Finalizar compra</button>
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

