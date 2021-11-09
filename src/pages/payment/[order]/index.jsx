import moment from 'moment';
import React from 'react'
import withAuth from '../../../utils/withAuth'
import getOrder from '../../api/orders/[code]'
import * as Styled from '../styles';
import Button from '../../../resources/components/_Elements/Button';
import Drawer from '../../../resources/components/Drawer';
import { useForm } from 'react-hook-form';
import CreditCard from '../../../resources/components/Payments/CreditCard';
// import order from '../order.json';
import api from '../../../api';
import { OrderListItem } from '../../../resources/components/OrderList';

export async function getServerSideProps({ req, query }) {

    const { data } = await getOrder(req, query.order);

    return { props: { order: data } }
}

function Payment({ layout, order }) {

    const [openPayment, setOpenPayMent] = React.useState(false);
    const [paymentMethodisValid, setPaymentMethodisValid] = React.useState(false);
    const [paymentData, setPaymentData] = React.useState(null);
    const [paymentButtonText, setPaymentButtonText] = React.useState('Finalizar Compra');
    const [paymentSubmited, setPaymentSubmited] = React.useState(false);
    const { register, watch, handleSubmit, formState: { isValid } } = useForm({ mode: 'onChange' });
    let cardData = null;

    React.useEffect(() => { layout('AppLayout') });

    const submitPayment = (e) => {

        setPaymentSubmited(true);
        setPaymentButtonText('Processando...')
        api.post('/client/customer/orders/payment', {
            order: order.code,
            payment_method: 'credit_card',
            ...cardData,
        }).then(response => {
            if (!response.data.error && response.data.message === 'processing') {
                window.location.href = `/payment/${response.data.data}/success`
            }
            setPaymentButtonText('Finalizar Compra')

            setPaymentMethodisValid(true);

        })
    }
    console.log(paymentMethodisValid)
    const validateCard = (validForm, formData) => {
        setPaymentMethodisValid(validForm);
        cardData = formData;
    }

    return (
        <Styled.Container>
            <OrderListItem
                tripTitle={order.ticket.trip_schedule.trip.name}
                agencyName={order.ticket.trip_schedule.trip.agency.name}
                order={order}
                startDate={moment(order.ticket.trip_schedule.start_date).format('lll')}
                endDate={moment(order.ticket.trip_schedule.end_date).format('lll')}
                boradingLocation={order.ticket.boarding.name}
                departureTime={order.ticket.boarding.departure_time}
                orderStatus={order.status}
                expireAt={moment(order.expire_at)}
            />

            <Styled.Session>
                <Styled.SessionHeader>
                    <Styled.SessionTitle>Triplers</Styled.SessionTitle>
                    <Styled.SessionSubTitle>Informações dos passageiros</Styled.SessionSubTitle>
                </Styled.SessionHeader>
                <Styled.SessionBody>
                    {order.ticket.passengers.map(passenger =>
                        <Styled.Passenger key={passenger.id}>
                            <Styled.PassengerName style={{ 'margin': 0 }}>{passenger.name} - ({passenger.type}) </Styled.PassengerName>
                            <Styled.PassengerItem> Passagem <span>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(passenger.total)}</span></Styled.PassengerItem>
                            {passenger.optionals.map(optional => <Styled.PassengerItem>{optional.name} <span>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(optional.tax)}</span></Styled.PassengerItem>)}
                            <Styled.PassengerItem><strong>Total</strong> <strong>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(passenger.total)}</strong></Styled.PassengerItem>
                        </Styled.Passenger>)}
                </Styled.SessionBody>
                <Styled.SessionFooter>
                    <Styled.TotalArea>
                        Total:
                        <Styled.TotalAmount>
                            {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(order.total)}
                        </Styled.TotalAmount>
                    </Styled.TotalArea>
                </Styled.SessionFooter>
            </Styled.Session>
            {order.status === 3 && <Button
                onClick={() => setOpenPayMent(true)}
                icon={<span className={'las la-lock'}>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(order.total)}</span>}
                color={'secondary'}>
                Pagamento
            </Button>
            }


            <Drawer open={openPayment} title={'Formas de pagamento'} onClose={setOpenPayMent}>
                <Styled.PaymentMethods>
                    <form onSubmit={handleSubmit(submitPayment)}>
                        <Styled.PaymentMethod>
                            <Styled.PaymentMethodHeader>
                                <Styled.PaymentMethodName htmlFor={'credit_card'}>Cartão de Crédito</Styled.PaymentMethodName>
                                <Styled.PaymentMethodControl>
                                    <input id={'credit_card'} {...register('payment_method', { required: true })} value={'credit_card'} type={'radio'} />
                                </Styled.PaymentMethodControl>
                            </Styled.PaymentMethodHeader>

                            {watch('payment_method') === 'credit_card' &&
                                <CreditCard
                                    order={order}
                                    register={register}
                                    validFields={(isValid, formData) => validateCard(isValid, formData)}
                                />}

                        </Styled.PaymentMethod>
                        {/* <label style={{ display: 'flex' }}> <span><input type={'checkbox'} /></span> <small>Aceito as condições do Contrato de Prestação de Serviços de Turismo.</small></label> */}
                        {paymentSubmited ?
                            <Button disabled={paymentSubmited} color={'primary'}>{paymentButtonText}</Button> :
                            <Button disabled={!paymentMethodisValid} onClick={submitPayment} color={'primary'}>{paymentButtonText}</Button>
                        }
                    </form>

                </Styled.PaymentMethods>

            </Drawer>
        </Styled.Container>
    )
}

export default Payment;