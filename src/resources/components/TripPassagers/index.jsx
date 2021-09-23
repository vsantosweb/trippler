import React from 'react'
import Button from '../_Elements/Button';
import * as Styled from './styles';
import moment from 'moment';
import { useForm } from 'react-hook-form';

export default function PassengerTicket({ tripSchedule }) {


    const { register } = useForm();
    const passengerPrices = tripSchedule.passengers.map(passenger => passenger.pivot.amount);
    const lowestPrice = Math.min(...passengerPrices);

    const [totalAmount, setTotalAmount] = React.useState(0);

    let passengers = tripSchedule.passengers.map(passenger => ({
        ...passenger,
        tickets: 0,
        price: passenger.pivot.amount + tripSchedule.price,
        total: 0
    }))

    const [passengerTickets, setPassengerTickets] = React.useState(passengers);

    React.useEffect(() => {

        setTotalAmount(passengerTickets.reduce((passenger, current) => passenger.total + current.total));

    }, [passengerTickets])

    const addTicket = (passenger) => {

        passenger.tickets = passenger.tickets + 1;
        passenger.total = passenger.total + passenger.price;

        setPassengerTickets([...passengerTickets]);

    }

    const removeTicket = (passenger) => {

        if (passenger.tickets <= 0) return false;

        passenger.tickets = passenger.tickets - 1;
        passenger.total = passenger.total - passenger.price;
        setPassengerTickets([...passengerTickets]);
    }

    console.log(passengerTickets, 'ok')

    return (
        <Styled.PassagerList>

            <Styled.InfoTrip>
                <Styled.InfoDetails>
                    <Styled.Period><i className={'las la-calendar'}></i> {`${moment(tripSchedule?.start_date).format('DD/MM H:m')} - ${moment(tripSchedule?.end_date).format('DD/MM H:m')}`}</Styled.Period>
                    <Styled.Vacancies> {tripSchedule?.status.name}</Styled.Vacancies>
                </Styled.InfoDetails>
                <Styled.InfoDetails justify={'flex-end'}>
                    <Styled.InfoTop>A partir de</Styled.InfoTop>
                    <Styled.InfoPriceValue>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(tripSchedule.price + lowestPrice)}</Styled.InfoPriceValue>
                </Styled.InfoDetails>
            </Styled.InfoTrip>

            <Styled.TicketForm>
                {passengerTickets?.map((passenger, index) => <Styled.Container key={index}>
                    <Styled.Info>
                        <Styled.Title>{passenger.name}</Styled.Title>
                        <Styled.Description>{passenger.description}</Styled.Description>
                    </Styled.Info>
                    <Styled.Action>
                        <Styled.ActionButton type={"button"} onClick={() => addTicket(passenger)}>+</Styled.ActionButton>
                        <Styled.Quantity {...register(passenger.name)}>{passenger.tickets}</Styled.Quantity>
                        <Styled.ActionButton type={"button"} onClick={() => removeTicket(passenger)}>-</Styled.ActionButton>
                    </Styled.Action>
                </Styled.Container>
                )}

                <Styled.TotalAmountContainer>
                    <Styled.TotalAmount>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(totalAmount)}</Styled.TotalAmount>
                </Styled.TotalAmountContainer>

                <Button color={'primary'}>Fechar Pacote</Button>
            </Styled.TicketForm>

        </Styled.PassagerList>
    )
}