import React, { useEffect, useState, useCallback } from 'react';
import css from './checkout.module.scss';
import CheckoutLayout from '../../layouts/CheckoutLayout';
import Validator from 'Validator';
import * as documentValidator from '../../../helpers/DocumentValidator';
import { Row, Col, Container, Hidden } from 'react-grid-system';
import {
  Form,
  Input,
  Button,
  Collapse,
  Spin
} from 'antd';

const { Panel } = Collapse;

function Checkout({ plans, ...props }) {

  const [formData, setFormData] = useState({});
  const [formFeedback, setFormFeedback] = useState({ disabledSubmit: true, submited: false });
  const [paymentMethods, setPaymentMethod] = useState({paymentMethod: 'CREDIT_CARD'})


  const handlePaymentMethod = (paymentMethodKey) => {
    switch (paymentMethodKey) {
      case 'CREDIT_CARD':
        setFormData({paymentMethod: {method: paymentMethodKey}});
        console.log(paymentMethodKey, 'cartao')
        break;
      case 'BOLETO':
        setFormData({paymentMethod: paymentMethodKey});
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
      <Spin spinning={false} tip={'Processando...'} wrapperClassName={css.wrapperContent}	>
      <div className={`${css.wrapperContent} ${css.sectionBlock}`}>
        <Container fluid className={css.containerWrapper}>
          <Row>
            <Col md={8}>
              <Form onSubmitCapture={handleSubmit} labelCol={{ span: 6 }} className={`${css.checkoutContent} ${css.left}`}
                layout="vertical"
                size={'large'}>
                <div className={css.checkoutBlock}>
                  <h3 className={css.blockTitle}>1. Faça um cadastro</h3>
                  <p><strong>Já possui uma conta?</strong> <a href="#">Faça login</a> </p>

                  <Form.Item hasFeedback {...formFeedback.fullname ? { ...formFeedback } : ''}>
                    <Input placeholder={'Nome Completo*'} name={'fullname'} onChange={handleInput} />
                  </Form.Item>

                  <Form.Item hasFeedback {...formFeedback.email ? { ...formFeedback } : ''}>
                    <Input placeholder={'Email*'} name={'email'} onChange={handleInput} />
                  </Form.Item>

                  <Form.Item hasFeedback {...formFeedback.document ? { ...formFeedback } : ''}>
                    <Input placeholder={'CPF ou CNPJ*'} name={'document'} onChange={handleInput} />
                  </Form.Item>

                  <Form.Item>
                    <Input placeholder={'Data de nascimento*'} type={'date'} name={'birthday'} onChange={handleInput} hasFeedback {...formFeedback.birthday ? { ...formFeedback } : ''} />
                  </Form.Item>

                  <Form.Item hasFeedback {...formFeedback.phone ? { ...formFeedback } : ''}>
                    <Input placeholder={'Celular*'} name={'phone'} onChange={handleInput} />
                  </Form.Item>

                  <Form.Item hasFeedback {...formFeedback.password ? { ...formFeedback } : ''}>
                    <Input.Password placeholder={'Senha*'} name={'password'} onChange={handleInput} />
                  </Form.Item>

                </div>
                <div className={css.checkoutBlock}>
                  <h3 className={css.blockTitle}>2. Escolha a forma de pagamento</h3>
                  <p><strong>Já possui uma conta?</strong> <a href="#">Faça login</a> </p>
                  <Collapse accordion={true} defaultActiveKey={paymentMethods.paymentMethod} onChange={handlePaymentMethod} name={'paymentMethod'}>
                    <Panel accordion={true} header="Cartão de Crédito" key='CREDIT_CARD' id={'PaymentForm'} name={'paymentMethod'}>
                      <p>Pagamento seguro com cartão Você está em um site seguro e seus dados estão protegidos por criptografia </p>
                      <Row justify={'center'}>
                        <Hidden xs>
                          {/* <Col md={6}>
                            <Cards name={formData.ccholder} number={formData.ccnumber} expiry={formData.ccexpiry} cvc={formData.ccsecurity} />
                          </Col> */}
                        </Hidden>
                        <Col md={12}>
                          <Row>
                            <Col md={12}>
                              <Form.Item hasFeedback {...formFeedback.ccnumber ? { ...formFeedback } : ''}>
                                <Input placeholder={'Número do cartão *'} maxLength={16} name={'ccnumber'} onBlur={handleInput} />
                              </Form.Item>
                            </Col>
                            <Col md={12}>
                              <Form.Item hasFeedback {...formFeedback.ccholder ? { ...formFeedback } : ''}>
                                <Input placeholder={'Nome impresso *'} name={'ccholder'} onChange={handleInput} />
                              </Form.Item>
                            </Col>
                            <Col md={6}>
                              <Form.Item hasFeedback {...formFeedback.phone ? { ...formFeedback } : ''}>
                                <Input placeholder={'Vencimento *'} name={'ccexpiry'} onChange={handleInput} />
                              </Form.Item>
                            </Col>
                            <Col md={6}>
                              <Form.Item hasFeedback {...formFeedback.phone ? { ...formFeedback } : ''}>
                                <Input placeholder={'CVC *'} name={'ccsecurity'} onChange={handleInput} />
                              </Form.Item>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Panel>
                    <Panel accordion={true} header="Boleto Bancário" key="BOLETO">
                      <p>{'text'}</p>
                    </Panel>
                  </Collapse>

                  <Row className={css.finishCheckout}>
                    <Col><Button htmlType={'submit'} block loading={formFeedback.submited} type={'primary'} disabled={false}>Finalizar Compra</Button></Col>
                  </Row>
                </div>
              </Form>
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
    </Spin>
    </CheckoutLayout>
  )

}


export default Checkout;

