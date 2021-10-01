import React from 'react'
import Input from '../../resources/components/_Elements/Input';
import * as Styled from './styles';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import Drawer from '../../resources/components/Drawer';
import Switch from "react-switch";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { createCart, getCart } from '../api/cart';
SwiperCore.use([Navigation]);

import { useSelector } from 'react-redux';
import Cart from '../../api/Cart/Cart';
import Cookie from 'js-cookie';
import moment from 'moment';
import Button from '../../resources/components/_Elements/Button';
import { useForm } from 'react-hook-form';
import { createOrder } from '../api/orders';






export default function Book({ layout, cart }) {

    console.log(cart)
    const [book, setBook] = React.useState({});
    const [passengers, setPassengers] = React.useState(0);
    const [disableSubmit, setDisableSubmit] = React.useState(0);
    const [totalAmount, setTotalAmount] = React.useState(0);
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

    let _fetch = React.useRef(true);

    React.useEffect(() => {

        layout('AppLayout');
        showBook();
        return () => { _fetch = false }

    }, [])

    React.useEffect(() => {
        console.log(isValid)
        setDisableSubmit(!isValid);
    }, [isValid])

    const handleSubmitPassenger = (formData) => {

         console.log(formData, 'ksksksk')

        let teste = book.tickets.map((ticket, index) => ticket.info = formData.ticket[index].info);

        console.log(teste)
        // for (let ticket of book.tickets) {
        //     // Puxa todos os tipos pela key
        //     ticket.info = 
        //     ticket.push(formData.ticket[ticket.type])
        // }
        createOrder({
            trip_schedule_id: book.trip_schedule.id,
            tickets: book.tickets,
            boarding: book.boarding
        }).then(response=> console.log(response))
        return 'ok';
        createCart({
            trip_schedule_id: book.trip_schedule.id,
            tickets: book.tickets,
            boarding: book.boarding
        }).then(response => console.log(response, 'funfoo'))
    }

    const cartSession = useSelector(state => state.cart);


    function showBook() {
        getCart(cartSession.session).then(response => {
            if (_fetch) {
                setBook(response.data);
                let passengerQuantity = response.data.tickets.reduce((ticket, next) => ticket.quantity + next.quantity);
                let total = response.data.tickets.map(ticket => ticket.total).reduce((total, next) => total + next)
                setTotalAmount(total);
                setPassengers(Array.from({ length: passengerQuantity }, (x, z) => z))
            }
        })
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

Book.getInitialProps = async ({ params }) => {

    console.log(Cookie.get('token'), 'COOKIE')
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${1}`)
    const cart = await res.json()
  
    return { cart: cart }
  }
  