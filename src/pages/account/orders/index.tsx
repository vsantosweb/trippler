import moment from 'moment';
import React from 'react'
import * as Styled from './styles';

import order from '../../payment/order.json';
import Link from 'next/link';

type Props = {
    layout: (layout: 'AppLayout') => void;
}

let orderStatus = ['Cancelado', 'Pago', 'Processando', 'Em aberto']
export default function Orders({ layout }: Props) {

    React.useEffect(() => {
        layout('AppLayout')
    })
    return (
        <Styled.Container>
            {[0, 1, 2, 3, 4, 5, 6].map((index) =>
                <Link key={index} href={'/payment/' + order.code}>
                    <Styled.Session>
                        <Styled.SessionHeader>
                            <Styled.SessionTitle>{order.ticket.trip_schedule.trip.name}</Styled.SessionTitle>
                            <Styled.SessionSubTitle>{order.ticket.trip_schedule.trip.agency.name}</Styled.SessionSubTitle>
                        </Styled.SessionHeader>
                        <Styled.SessionBody>
                            <Styled.CheckIn>
                                <Styled.CheckInfo>
                                    <Styled.CheckTitle>Check-In</Styled.CheckTitle>
                                    <Styled.CheckDate>{moment(order.ticket.trip_schedule.start_date).format('lll')}</Styled.CheckDate>
                                </Styled.CheckInfo>
                                <Styled.CheckInfo>
                                    <Styled.CheckTitle>Check-Out</Styled.CheckTitle>
                                    <Styled.CheckDate>{moment(order.ticket.trip_schedule.end_date).format('lll')}</Styled.CheckDate>
                                </Styled.CheckInfo>
                            </Styled.CheckIn>
                            <Styled.Boarding>
                                <span><i className={'las la-bus'}></i> Embarque </span>
                                <span><i className={'las la-arrow-right'}></i></span>
                                <span style={{ flex: 1 }}>{order.ticket.boarding.name} - {order.ticket.boarding.departure_time}</span>

                            </Styled.Boarding>
                            <small>*Não toleramos atrasos, fique atento aos horários de check-in e check-out.</small>
                            <Styled.OrderStatus>
                                <Styled.StatusIcon color={order.status}><i className={'las la-ticket-alt'}></i> </Styled.StatusIcon>
                                {orderStatus[order.status]}
                            </Styled.OrderStatus>
                        </Styled.SessionBody>
                    </Styled.Session>
                </Link>
            )}
        </Styled.Container>
    )
}