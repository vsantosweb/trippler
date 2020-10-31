import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import css from './cart.module.scss';
import CheckoutLayout from '../../layouts/CheckoutLayout';
import Validator from 'Validator';
import * as documentValidator from '../../../helpers/DocumentValidator';
import { Row, Col, Container, Hidden } from 'react-grid-system';
import CardAdditionalPackage from '../../../components/Cards/CardAdditionalPackage';
import { getCart, setCart } from '../../../../store/cart/cartAction';
import TripSchedule from '../../../../api/Trip/TripSchedule';
import { getOrder, setOrder } from '../../../../store/order/orderAction';

function Checkout({ plans, ...props }) {

  const [formData, setFormData] = useState({});
  const [formFeedback, setFormFeedback] = useState(false);
  const [additionalPackages, setadditionalPackages] = useState(false);
  const [passagers, setPassagers] = useState(false);
  const [myCart, setMyCart] = useState(false);
  const [order, makeOrder] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [formsValidationStatus, setFormsValidationStatus] = useState([]);
  const [totalPassagerAmount, setTotalPassagerAmount] = useState(false);
  const dispatch = useDispatch();
  const cart = dispatch(getCart());


  console.log(myCart, 'order');

  useEffect(() => {

    setPassagers(cart.cart.passagers);
    setMyCart(cart.cart, passagers);
    getAdditionalPackages();
    dispatch(setOrder(order));
    calculateTotalPassagerAmount();

  }, [])

  const formRules = (formFields) => {

    let validator = [];
    for (let i = 0; i < formFields.length; i++) {

      validator[i] = Validator.make(formFields[i], {
        fullName: ['required', 'min:4'],
        // document: (formFields.document ? (formFields.document.length > 11 ? 'cnpj' : 'cpf') : 'required'),
        // birthday: 'required|date',
      })

    }
    return validator;
  }
  const getAdditionalPackages = () => (TripSchedule.additionalPackages(cart.cart.code).then(response => setadditionalPackages(response.data)))

  const calculateTotalPassagerAmount = () => {

    let totalAmount = [];

    if (cart.cart) {
      for (let passager of cart.cart.passagers) {
        passager.totalAmount = passager.amount + cart.cart.price;
        if (passager.additionalPackages) {
          passager.additionalPackages.map(pack => {
            passager.totalAmount = passager.totalAmount + pack.amount;
          })
        }
      }

    }


    return totalAmount;
  }

  const calculateTotalAmount = () => {

    myCart.totalAmount = (myCart.price * myCart.passagers.length);
    for (let passager of myCart.passagers) {

      myCart.totalAmount = parseFloat((myCart.totalAmount + passager.totalAmount - myCart.price).toFixed(2));

    }

    return myCart.totalAmount;


  }
  /**
   * Envia o formulário com todos os dados do checkout
   * @submit formData
   */
  const handleSubmit = (e) => {

    e.preventDefault();

    console.log('enviadoo!!!!', myCart.passagers)
    let validators = formRules(myCart.passagers);
    let feedBack = []

    let validationCheck = validators.map((validator, key) => {
      if (validator.fails()) {

        const fieldErrors = Object.keys(validator.getErrors());
        for (let field of fieldErrors) {

          feedBack[key] = { [field]: validator.getErrors()[field] }
          setFormFeedback({ ...formFeedback, feedBack: feedBack.filter(item => item) });
        }

        console.log(key, validator.getErrors()[e.target.name])
        return validator.fails();
      }
    })

    if (checkValidForms(validationCheck)) {
      dispatch(setOrder(myCart));
      props.history.push('/checkout');
    }

    //  props.history.push('/checkout');
    // setFormFeedback({submited:true})
  }
  const chosePassagerPackages = (passagers) => {
    console.log(cart.cart, 'cart.cart')
    setMyCart({ ...myCart, passagers });
    setPassagers(passagers);

  }
  const handleInputPassagers = (e, key) => {
    let passagers = Object.assign([], myCart.passagers);

    passagers[key][e.target.name] = e.target.value;
    setMyCart({ ...myCart, passagers });

    let validators = formRules(passagers);
    let feedBack = []

    let validationCheck = validators.map((validator, key) => {

      if (validator.fails()) {

        feedBack[key] = { [e.target.name]: validator.getErrors()[e.target.name] }

        setFormFeedback({ ...formFeedback, feedBack: feedBack.filter(item => item) });
        console.log(key, validator.getErrors()[e.target.name])
        return validator.fails();
      }

      feedBack[key] = { [e.target.name]: '' }

      delete feedBack[key][e.target.name]
      setFormFeedback({ ...formFeedback, feedBack: feedBack.filter(item => item) });

      return validator.fails();

    });

    if (checkValidForms(validationCheck)) {
      setDisableSubmit(false)
      return 'habiltiarbotao'
    }
    setDisableSubmit(true)

  }

  const checkValidForms = (checkedForms) => {

    setFormsValidationStatus(checkedForms);

    let allIsFalse = true;
    checkedForms.map(res => {
      if (res === true) {
        allIsFalse = false;
      }
    })
    return allIsFalse
  }
  /**
   * @return Render View
   */

  return (
    <CheckoutLayout>
      <div className={`${css.wrapperContent} ${css.sectionBlock} ${css.cartWrapper}`}>
        <Container fluid className={css.containerWrapper}>
          <Row>
            <Col md={8}>
              <form onSubmit={handleSubmit} className={`${css.checkoutContent} ${css.left}`}>
                <div className={`${css.cartBlock} container-fluid`}>
                  <h3 className={css.blockTitle}>1. Pacotes Adicionais</h3>
                  <div className={'row'}>
                    {additionalPackages ? additionalPackages.map((item, key) => {

                      return <div className={'col-md-4'}>
                        <CardAdditionalPackage data={item} passagers={myCart.passagers} changePassagers={chosePassagerPackages} />
                      </div>
                    }

                    ) : ''}
                  </div>
                </div>
                <div className={css.cartBlock}>

                  <h3 className={css.blockTitle}>2. Identificação dos passageiros</h3>
                  <div className="accordion" id={'passagerData'}>

                    {myCart ? myCart.passagers.map((passager, key) => (

                      <div className="card">
                        <div className="card-header">
                          <h5 className="mb-0">
                            <button type={'button'} className="btn btn-link" data-toggle="collapse" data-target={'#passger' + key} aria-expanded="true" aria-controls={key}>{passager.fullName ? key + 1 + ' ' + passager.fullName : key + 1 + ' Passageiro'}</button>
                          </h5>
                        </div>
                        <div id={'passger' + key} className="collapse" data-parent="#passagerData">
                          <div className="card-body">
                            <div className={'form-row'}>
                              <div className={'form-group col-md-12'}>
                                <label>Nome completo</label>
                                <input name={'fullName'} onChange={e => handleInputPassagers(e, key)} className={'form-control'} />
                                {formFeedback ? <small> {formFeedback.feedBack[key] ? formFeedback.feedBack[key].fullName : ''} </small> : ''}
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
                                <select className="form-control" name={'gender'} onChange={e => handleInputPassagers(e, key)}>
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
                  <div className={'form-row'}>
                    <button type="submit" disabled={disableSubmit} className={'mt-2 btn btn-info btn-block'} >Fechar pacote</button>
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
                    {myCart ? myCart.passagers.map((passager, key) => (
                      <ul className={css.productDescription}>
                        <li>
                          <strong>Passageiro {key + 1}: </strong> {passager.fullName ? passager.fullName : passager.name} - {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(passager.amount + myCart.price)}
                          {passager.additionalPackages ? passager.additionalPackages.map((pack, key) => {

                            return <dl>
                              <dt>{pack.name} - {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pack.amount)}</dt>
                              <dd>- <small>{pack.description}</small> </dd>
                            </dl>
                          }
                          ) : ''}
                        </li>
                        <br />Total: {myCart ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(passager.totalAmount) : ''}

                      </ul>
                    )) : ''}

                  </div>
                  <div className={css.detailsFooter}>
                    <div className={css.productDetail}>
                      <div className={css.productInfo}>
                        <div className={css.productName}>Total do pedido</div>
                      </div>
                      <div className={css.productInfo}>
                        <div className={css.info}>{myCart ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculateTotalAmount()) : ''} </div>
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

