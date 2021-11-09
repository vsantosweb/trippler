import React from 'react'
import * as Styled from './styles';
// import order from '../../../pages/payment/order.json';
import moment, { Moment } from 'moment';
import Link from 'next/link';

type OrderListProps = {
    orders: object[]
}

type OrderListItemProps = {
    order: object,
    tripTitle: string,
    agencyName: string,
    startDate: string,
    endDate: string,
    boradingLocation: string,
    departureTime: string,
    orderStatus: any,
    expireAt: Moment

}

export const OrderListItem = ({ order, tripTitle, agencyName, startDate, endDate, boradingLocation, departureTime, orderStatus, expireAt }: OrderListItemProps) => {

    const [expiration, setExpiration] = React.useState<any>('');

    let orderStatuses = ['Cancelado', 'Pago', 'Processando', 'Pré-Reserva'];

    React.useEffect(() => {
        const now = moment.utc();

        const time = now.diff(expireAt, "minute");

        const duration = moment.duration(Math.abs(time), 'm');

        let rest = null;
        const intervalId = setInterval(() => {

            duration.subtract(1, "s");
            const inMilliseconds = duration.asMilliseconds();

            setExpiration(moment.utc(inMilliseconds).format("mm:ss"))
            rest = moment.utc(inMilliseconds).format("mm:ss");

            if (inMilliseconds !== 0) return;
            setExpiration('Expirado...')
        }, 1000);

        return () => clearInterval(intervalId);
    }, [])

    const getExpiration = (end: Moment) => {


    }

    return (
        <Link href={'/payment/' + order.code}>
            <Styled.Session  >
                <Styled.SessionHeader>
                    <Styled.SessionTitle>{tripTitle}</Styled.SessionTitle>
                    <Styled.SessionSubTitle>{agencyName}</Styled.SessionSubTitle>
                </Styled.SessionHeader>
                <Styled.SessionBody>
                    <Styled.CheckIn>
                        <Styled.CheckInfo>
                            <Styled.CheckTitle>Check-In</Styled.CheckTitle>
                            <Styled.CheckDate>{startDate}</Styled.CheckDate>
                        </Styled.CheckInfo>
                        <Styled.CheckInfo>
                            <Styled.CheckTitle>Check-Out</Styled.CheckTitle>
                            <Styled.CheckDate>{endDate}</Styled.CheckDate>
                        </Styled.CheckInfo>
                    </Styled.CheckIn>
                    <Styled.Boarding>
                        <span><i className={'las la-bus'}></i> Embarque </span>
                        <span><i className={'las la-arrow-right'}></i></span>
                        <span style={{ flex: 1 }}>{boradingLocation} - {departureTime}</span>

                    </Styled.Boarding>
                    <small>*Não toleramos atrasos, fique atento aos horários de check-in e check-out.</small>
                    <Styled.OrderStatus>
                        <Styled.StatusIcon color={orderStatus}><i className={'las la-file-alt'}></i> </Styled.StatusIcon>
                        <span style={{ flex: 1 }}>{orderStatuses[orderStatus]}</span>
                        {orderStatus === 3 && 'Expira em ' + expiration}
                    </Styled.OrderStatus>
                </Styled.SessionBody>
            </Styled.Session>
        </Link>
    )
}

export default function OrderList({ orders }: OrderListProps) {

    return (
        <Styled.Container>
            {orders?.map((order, index) =>
                <OrderListItem
                    tripTitle={order.ticket.trip_schedule.trip.name}
                    agencyName={order.ticket.trip_schedule.trip.agency.name}
                    key={index}
                    order={order}
                    startDate={moment(order.ticket.trip_schedule.start_date).format('lll')}
                    endDate={moment(order.ticket.trip_schedule.end_date).format('lll')}
                    boradingLocation={order.ticket.boarding.name}
                    departureTime={order.ticket.boarding.departure_time}
                    orderStatus={order.status}
                    expireAt={moment(order.expire_at)}
                />
            )}
        </Styled.Container>
    )
}


