import React, { useState } from "react"
import { useDispatch } from 'react-redux';

export default function useCart() {

    const [passengerTypes, setPassengerTypes] = useState(null);
    const [ticketTotal, setTicketTotal] = useState(0);
    const [scheduleData, setScheduleData] = useState(0);

    const [boarding, setBoarding] = useState(false);
    const [validCart, setCartValid] = useState(false);
    const [tickets, setTickets] = useState([]);

    const [cart, setCart] = useState({
        tickets: false
    });

    const dispatch = useDispatch();

    React.useEffect(() => {

        setCart({ ...cart, tickets });

    }, [tickets, boarding])

    console.log(scheduleData)

    React.useEffect(() => {

        if (scheduleData) {
            
            let ticketTypes = scheduleData.passengers.map(passenger => ({
                type: passenger.name,
                description: passenger.description,
                price: scheduleData.price,
                tax: passenger.amount,
                unit_price: passenger.amount + scheduleData.price,
                total: passenger.amount + scheduleData.price,
                quantity: passenger.name === 'Adulto' ? 1 : 0,
                optionals: [],
                info: null,
            }));

            setPassengerTypes(ticketTypes);

            setTickets([ticketTypes.filter(ticketTypes => ticketTypes.type === 'Adulto')[0]])
        }

        if (!Object.values(cart).every(el => el)) {
            return setCartValid(false)
        }
        setCartValid(true)

    }, [scheduleData]);


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

    return { addTicket, removeTicket, setBoarding, setScheduleData, tickets, passengerTypes, ticketTotal, cart, validCart, dispatchCart }
}