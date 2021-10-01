import React, { useState } from "react"
import { useDispatch } from 'react-redux';

export default function useCart(tripSchedule) {

    let ticketTypes = tripSchedule.passengers.map(passenger => ({
        type: passenger.name,
        description: passenger.description,
        price: tripSchedule.price,
        tax: passenger.pivot.amount,
        unit_price: passenger.pivot.amount + tripSchedule.price,
        total: passenger.pivot.amount + tripSchedule.price,
        quantity: passenger.name === 'Adulto' ? 1 : 0,
        optionals: [],
        info: null,
    }));

    console.log(ticketTypes)
    const [passengerTypes, setPassengerTypes] = useState(ticketTypes);
    const [ticketTotal, setTicketTotal] = useState(0);
    const [boarding, setBoarding] = useState(false);
    const [validCart, setCartValid] = useState(false);
    const [tickets, setTickets] = useState([ticketTypes.filter(ticketTypes => ticketTypes.type === 'Adulto')[0]]);

    const [cart, setCart] = useState({
        boarding: false,
        tickets: false
    });

    const dispatch = useDispatch();

    React.useEffect(() => {

        setCart({ ...cart, tickets, boarding });

    }, [tickets, boarding])

    console.log(cart)

    React.useEffect(() => {

        if (!Object.values(cart).every(el => el)) {
            return setCartValid(false)
        }
        setCartValid(true)

    });


    function addTicket(passengerTypes) {

        passengerTypes.quantity = passengerTypes.quantity + 1;
        // passengerTypes.total = passengerTypes.total + passengerTypes.price;
        
        setTickets([passengerTypes, ...tickets]);

        return console.log(passengerTypes, 'TICKET')

    }

    const removeTicket = (passengerTypes) => {

        if (passengerTypes.type === 'Adulto' && passengerTypes.quantity <= 1) {
            return false;
        }

        if (passengerTypes.quantity <= 0) return false;

        passengerTypes.quantity = passengerTypes.quantity - 1;
        // passengerTypes.total = passengerTypes.total - passengerTypes.price;

        setTickets([...tickets]);
    }

    const dispatchCart = () => dispatch({ type: 'ADD_TO_CART', payload: cart });

    return { addTicket, removeTicket, setBoarding, tickets, passengerTypes, ticketTotal, cart, validCart, dispatchCart }
}