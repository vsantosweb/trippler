import React from 'react'
import Input from '../../resources/components/_Elements/Input';
import * as Styled from './styles';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import Drawer from '../../resources/components/Drawer';
import Switch from "react-switch";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { createCart, getCart } from '../api/carts';
SwiperCore.use([Navigation]);

import { useSelector } from 'react-redux';
import Cart from '../../api/Cart/Cart';
import Cookie from 'js-cookie';
import moment from 'moment';
import Button from '../../resources/components/_Elements/Button';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import withAuth from '../../utils/withAuth';
import { createOrder } from '../../api/order/OrderResource';
import { createOrderApi } from '../api/orders';
import CartApi from '../../api/Cart';
import handler from '../api/carts/[session]';
import api from '../../api';
import ApiServer from '../api';


export async function getServerSideProps({ req, res, query }) {

    const { data: { data }, status } = await ApiServer(req).get('/client/customer/carts/' + query.session);

    if (status === 404) return { notFound: true }

    return { props: { book: data } }
}

function Book({ layout, book }) {

    let passengerQuantity = book.tickets.reduce((ticket, next) => ticket.quantity + next.quantity);
    let total = book.tickets.map(ticket => ticket.total).reduce((total, next) => total + next);
    const totalAmount = total;
    const passengers = Array.from({ length: passengerQuantity }, (x, z) => z);
    // const [book, setBook] = React.useState({});
    // const [passengers, setPassengers] = React.useState(0);
    const [disableSubmit, setDisableSubmit] = React.useState(0);
    // const [totalAmount, setTotalAmount] = React.useState(0);
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

    let _fetch = React.useRef(true);

    React.useEffect(() => { layout('AppLayout') }, [])

    React.useEffect(() => {
        console.log(isValid)
        setDisableSubmit(!isValid);
    }, [isValid])

    const handleSubmitPassenger = (formData) => {


        let teste = book.tickets.map((ticket, index) => ticket.info = formData.ticket[index].info);
        createOrder({
            trip_schedule_id: book.trip_schedule.id,
            tickets: book.tickets,
            boarding: book.boarding
        }).then(response => window.location.href = '/payment/' + response.data.code);

    }


    return (
        <Styled.Book>
            <Styled.BookInfo>
                <Styled.BookInfoHeader>
                    <Styled.TripName>{book?.trip_schedule?.trip?.name}</Styled.TripName>
                </Styled.BookInfoHeader>
                <Styled.BookInfoBody>
                    <Styled.BookPassenger>
                        {book?.tickets?.map((ticket, index) => <span key={index}><i className={'las la-user'}></i> {ticket.quantity} {ticket.type}</span>)}
                    </Styled.BookPassenger>
                    <Styled.Boarding><i className={'las la-bus'}></i> {book?.boarding?.name} - {book?.boarding?.departure_time}</Styled.Boarding>
                    <Styled.BookCheckInfo>
                        <span>{moment(book?.trip_schedule?.start_date).format('ll')} - {moment(book?.trip_schedule?.end_date).format('ll')} </span>
                        <span>{book?.trip_schedule?.period.name}</span>
                    </Styled.BookCheckInfo>
                    <Styled.TotalAMount>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(totalAmount)}</Styled.TotalAMount>
                </Styled.BookInfoBody>
            </Styled.BookInfo>

            <Styled.BookInfo>
                <Styled.BookInfoHeader>
                    <Styled.TripName>Informações dos Viajantes</Styled.TripName>
                </Styled.BookInfoHeader>
                <Styled.BookInfoBody>

                    <form>
                        <Accordion>
                            {book?.tickets?.map((ticket, index) =>
                                <AccordionItem key={ticket.id} style={{ marginBottom: '10px', padding: '10px', border: 'solid 1px #eee', borderRadius: '10px' }} key={index}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton >
                                            <i className={'las la-user'}></i> {ticket.type} {index + 1}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <Input
                                            label={'Nome *'}
                                            helper={''}
                                            {...register(`ticket.${index}.${'info'}.name`, { required: true, minLength: 3 })}
                                            placeholder={'Nome completo'}
                                        />

                                        <Input label={'Email *'} {...register(`ticket.${index}.${'info'}.email`)} placeholder={'Nome completo'} />
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )}
                        </Accordion>
                    </form>
                </Styled.BookInfoBody>
            </Styled.BookInfo>

            <Button
                icon={<i className={'las la-arrow-right'}></i>}
                disabled={disableSubmit}
                onClick={handleSubmit(handleSubmitPassenger)}
                color={'secondary'}>
                Confirmar Reserva
            </Button>

        </Styled.Book>
    )
}

export default withAuth(Book);