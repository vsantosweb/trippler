import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import css from './cart.module.scss';
import CheckoutLayout from '../../layouts/CheckoutLayout';
import Validator from 'Validator';
import * as documentValidator from '../../../helpers/DocumentValidator';
import { Row, Col, Container, Hidden } from 'react-grid-system';
import CardAdditionalPackage from '../../../components/Cards/CardAdditionalPackage';
import { getCart } from '../../../../store/cart/cartAction';
import TripSchedule from '../../../../api/Trip/TripSchedule';


function Checkout({ plans, ...props }) {

  const [formData, setFormData] = useState({});
  const [formFeedback, setFormFeedback] = useState({ disabledSubmit: true, submited: false });
  const [additionalPackages, setadditionalPackages] = useState(false);
  const [passagers, setPassagers] = useState(false);
  const [myCart, setMyCart] = useState(false);
  const [order, makeOrder] = useState(false);
  const dispatch = useDispatch();
  const cart = dispatch(getCart());

  useEffect(() => {
    setPassagers(cart.cart.passagers);
    setMyCart(cart.cart);
    makeOrder(cart.cart, passagers)
    getAdditionalPackages();
  }, [])

  const formRules = (formFields, rules) => (

    Validator.make(formFields, {
      fullname: ['required', 'min:4'],
      document: (formFields.document ? (formFields.document.length > 11 ? 'cnpj' : 'cpf') : 'required'),
      birthday: 'required|date',
      phone: 'required',
      ccnumber: 'creditcard'

    })
  )
  const getAdditionalPackages = () => (TripSchedule.additionalPackages(cart.cart.code).then(response => setadditionalPackages(response.data)))


  const calculateTotalAmount = (amount) => {

    order.totalAmount = (order.price * order.passagers.length);

    for (let passager of order.passagers) {

      order.totalAmount = parseFloat((order.totalAmount + passager.totalAmount).toFixed(2));

    }
    return order.totalAmount;
  }
  /**
   * Envia o formulário com todos os dados do checkout
   * @submit formData
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, 'submit')
    // setFormFeedback({submited:true})
  }

  const handleInputPassagers = (e, key) => {
    let passagers = Object.assign([], order.passagers);

    passagers[key][e.target.name] = e.target.value;
    makeOrder({ ...order, passagers });
    let validator = formRules(passagers[key])
    // formRules.extend('cpf', documentValidator.validCpf, ':attr inválido');
    // formRules.extend('cnpj', documentValidator.validCnpj, ':attr inválido');
  }
  console.log(order, 'current order!!!!')

  /**
   * @return Render View
   */

  return (
    <CheckoutLayout>
      <div className={`${css.wrapperContent} ${css.sectionBlock} ${css.cartWrapper}`}>
        <Container fluid className={css.containerWrapper}>
          <Row>
            <Col md={8}>
              <form onSubmitCapture={handleSubmit} labelCol={{ span: 6 }} className={`${css.checkoutContent} ${css.left}`}
                layout="vertical"
                size={'large'}>
                <div className={`${css.cartBlock} container-fluid`}>
                  <h3 className={css.blockTitle}>1. Pacotes Adicionais</h3>
                  <div className={'row'}>
                    {additionalPackages ? additionalPackages.map((item, key) => {

                      return <div className={'col-md-4'}>
                        <CardAdditionalPackage data={item} passagers={passagers} changePassagers={setPassagers} />
                      </div>
                    }

                    ) : ''}
                  </div>
                </div>
                <div className={css.cartBlock}>

                  <h3 className={css.blockTitle}>2. Identificação dos passageiros</h3>
                  <div className="accordion" id={'passagerData'}>

                    {order ? order.passagers.map((passager, key) => (

                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target={'#passger' + key} aria-expanded="true" aria-controls={key}> {key + 1} . Passageiro</button>
                          </h5>
                        </div>
                        <div id={'passger' + key} class="collapse" data-parent="#passagerData">
                          <div class="card-body">
                            <div className={'form-row'}>
                              <div className={'form-group col-md-12'}>
                                <label>Nome completo</label>
                                <input name={'fullName'} onChange={e => handleInputPassagers(e, key)} className={'form-control'} />
                              </div>
                            </div>
                            <div className={'form-row'}>
                              <div className={'form-group col-md-8'}>
                                <label>RG</label>
                                <input name={'document'} onChange={e => handleInputPassagers(e, key)} className={'form-control'} />
                              </div>
                              <div className={'form-group col-md-4'}>
                                <label>Data de nascimento</label>
                                <input name={'birthday'} onChange={e => handleInputPassagers(e, key)} className={'form-control'} />
                              </div>
                            </div>
                            <div className={'form-row'}>
                              <div className={'form-group col-md-4'}>
                                <label>Telefone (Opcional)</label>
                                <input name={'document'} onChange={e => handleInputPassagers(e, key)} className={'form-control'} />
                              </div>
                              <div className={'form-group col-md-8'}>
                                <label>Sexo</label>
                                <select class="form-control" name={'gender'} onChange={e => handleInputPassagers(e, key)}>
                                  <option selected>Escolha.</option>
                                  <option value={'M'}>Masculino</option>
                                  <option value={'F'}>Feminino</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )) : 'Carregando...'}
                  </div>

                </div>
                <div className={css.cartBlock}>
                  <h3 className={css.blockTitle}>3. Pagamento</h3>
                  <div className="accordion" id={'paymentMethod'}>

                    {order ? ['Boleto', 'Cartão de Crédito'].map((method, key) => (

                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target={'#passger' + key} aria-expanded="true" aria-controls={key}> {method} </button>
                          </h5>
                        </div>
                        <div id={'passger' + key} class="collapse" data-parent="#passagerData">
                          <div class="card-body">
                            <div className={'form-row'}>
                              <div className={'form-group col-md-12'}>
                                <label>Nome completo</label>
                                <input name={'fullName'} onChange={e => handleInputPassagers(e, key)} className={'form-control'} />
                              </div>
                            </div>
                            <div className={'form-row'}>
                              <div className={'form-group col-md-8'}>
                                <label>RG</label>
                                <input name={'document'} onChange={e => handleInputPassagers(e, key)} className={'form-control'} />
                              </div>
                              <div className={'form-group col-md-4'}>
                                <label>Data de nascimento</label>
                                <input name={'birthday'} onChange={e => handleInputPassagers(e, key)} className={'form-control'} />
                              </div>
                            </div>
                            <div className={'form-row'}>
                              <div className={'form-group col-md-4'}>
                                <label>Telefone (Opcional)</label>
                                <input name={'document'} onChange={e => handleInputPassagers(e, key)} className={'form-control'} />
                              </div>
                              <div className={'form-group col-md-8'}>
                                <label>Sexo</label>
                                <select class="form-control" name={'gender'} onChange={e => handleInputPassagers(e, key)}>
                                  <option selected>Escolha.</option>
                                  <option value={'M'}>Masculino</option>
                                  <option value={'F'}>Feminino</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )) : 'Carregando...'}
                  </div>
                </div>
              </form>
            </Col>
            <Col md={4}>
              <div className={`${css.cartContent} ${css.right}`}>
                <div className={`${css.cartDetails} ${css.cartBlock}`}>
                  <div className={css.detailsHeader}>
                    <h3 className={css.blockTitle}>Minha mochila</h3>
                  </div>
                  <div className={css.detailsBody}>
                    <div className={css.productDetail}>
                      <div className={css.productInfo}>
                        <h5 className={css.productName}>{myCart.name}</h5>
                        <div className={css.productFeature}>{myCart ? myCart.package.description : ''}</div>
                      </div>
                    </div>
                    {order ? order.passagers.map((passager, key) => (
                      <ul className={css.productDescription}>
                        <li>
                          <strong>Passageiro {key + 1}: </strong> {passager.name} - {passager.amount + myCart.price}
                          {passager.additionalPackages ? passager.additionalPackages.map((pack, key) => {

                            return <dl>
                              <dt>{pack.name} - {pack.amount}</dt>
                              <dd>- <small>{pack.description}</small> </dd>
                            </dl>
                          }
                          ) : ''}
                        </li>
                        <br />Total: {order && passager ? passager.totalAmount + order.price : ''}

                      </ul>
                    )) : ''}

                  </div>
                  <div className={css.detailsFooter}>
                    <div className={css.productDetail}>
                      <div className={css.productInfo}>
                        <div className={css.productName}>Total do pedido</div>
                      </div>
                      <div className={css.productInfo}>
                        <div className={css.info}>{order ? calculateTotalAmount() : ''} </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </CheckoutLayout>
  )

}


export default Checkout;

