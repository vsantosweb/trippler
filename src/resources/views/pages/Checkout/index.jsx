import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import css from './checkout.module.scss';
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
  const [paymentMethods, setPaymentMethod] = useState({ paymentMethod: 'CREDIT_CARD' })
  const [passagerPackages, setPassagerPackages] = useState(false);
  const [additionalPackages, setadditionalPackages] = useState(false);
  const dispatch = useDispatch();
  const currentCart = dispatch(getCart());

  console.log(currentCart.cart, 'currentCart')
  useEffect(() => {
    getAdditionalPackages()
  }, [])
  const getAdditionalPackages = () => (TripSchedule.additionalPackages(currentCart.cart.code).then(response => setadditionalPackages(response.data)))
  console.log(additionalPackages, 'packages')
  const handlePaymentMethod = (paymentMethodKey) => {

    switch (paymentMethodKey) {
      case 'CREDIT_CARD':
        setFormData({ paymentMethod: { method: paymentMethodKey } });
        console.log(paymentMethodKey, 'cartao')
        break;
      case 'BOLETO':
        setFormData({ paymentMethod: paymentMethodKey });
        console.log(paymentMethodKey, 'boleto!!')
        break;
      default:
        break;
    }

  }

  const handleInput = (e) => {

    let formFields = {};

    formFields = Object.assign({}, formData);
    console.log(e, 'onchange')

    formFields[e.target.name] = e.target.value;



    let validator = Validator.make(formFields, {

      email: 'email',
      fullname: ['required', 'min:4'],
      document: (formFields.document ? (formFields.document.length > 11 ? 'cnpj' : 'cpf') : 'required'),
      birthday: 'required|date',
      phone: 'required',
      password: 'required|min:8',
      ccnumber: 'creditcard'

    });

    validator.extend('cpf', documentValidator.validCpf, ':attr inválido');
    validator.extend('cnpj', documentValidator.validCnpj, ':attr inválido');

    setFormData(formFields);

    if (validator.fails()) {

      let errors = validator.getErrors();

      for (let field in errors) {
        console.log(field)
        if (field === e.target.name) {
          setFormFeedback({
            validateStatus: 'error',
            help: errors[field][0],
            [e.target.name]: 'true',
            disabledSubmit: true,
          });
          console.log(formFeedback, 'ta com errro')
          return false;
        }
      }
    }

    return validator.fails() ?
      setFormFeedback({ disabledSubmit: true }) :
      setFormFeedback({ disabledSubmit: false, validateStatus: 'success', [e.target.name]: 'false', validated: true });
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

  /**
   * @return Render View
   */
  return (
    <CheckoutLayout>
      <div className={`${css.wrapperContent} ${css.sectionBlock}`}>
        <Container fluid className={css.containerWrapper}>
          <Row>
            <Col md={8}>
              <form onSubmitCapture={handleSubmit} labelCol={{ span: 6 }} className={`${css.checkoutContent} ${css.left}`}
                layout="vertical"
                size={'large'}>
                <div className={`${css.checkoutBlock} container-fluid`}>
                  <h3 className={css.blockTitle}>1. Pacotes Adicionais</h3>
                  <div className={'row'}>
                    {additionalPackages ? additionalPackages.map((item, key) =>
                      <div className={'col-md-4'}>
                        <CardAdditionalPackage data={item} passagers={currentCart.cart.passagers} />
                      </div>
                    ) : ''}
                  </div>
                </div>
                <div className={css.checkoutBlock}>
                  <h3 className={css.blockTitle}>2. Escolha a forma de pagamento</h3>
                  <p><strong>Já possui uma conta?</strong> <a href="#">Faça login</a> </p>


                  <Row className={css.finishCheckout}>
                    <Col><button htmlType={'submit'} block loading={formFeedback.submited} type={'primary'} disabled={false}>Finalizar Compra</button></Col>
                  </Row>
                </div>
              </form>
            </Col>
            <Col md={4}>
              <div className={`${css.checkoutContent} ${css.right}`}>
                <div className={`${css.checkoutDetails} ${css.checkoutBlock}`}>
                  <div className={css.detailsHeader}>
                    <h3 className={css.title}>Detalhe s da compra</h3>
                  </div>
                  <div className={css.detailsBody}>
                    <div className={css.productDetail}>
                      <div className={css.productInfo}>
                        <div className={css.productName}>Arx Trial</div>
                        <div className={css.productFeature}>Plano Starter</div>
                      </div>
                      <div className={css.productInfo}>
                        <div className={css.info}>R$ 49,90</div>
                      </div>
                    </div>
                    <p className={css.productDescription}>
                      <strong>Inclui: </strong> Criação de realidade aumentada ilimitadado, acesso ao painel de controle.
              </p>
                  </div>
                  <div className={css.detailsFooter}>
                    <div className={css.productDetail}>
                      <div className={css.productInfo}>
                        <div className={css.productName}>Total do pedido</div>
                      </div>
                      <div className={css.productInfo}>
                        <div className={css.info}>R$ 49,90</div>
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

