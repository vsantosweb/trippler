import React from 'react'
import * as Styled from './styles';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import moment from 'moment';
import Slider from '../../resources/components/Slider';
import TripPackages from '../../resources/components/TripPackages';
import { tripScheduleShow } from '../../api/Trip/TripResource';
import Cart from '../../api/Cart/Cart';
import PassengerTicket from '../../resources/components/TripPassagers';
import useCart from '../../resources/modules/Cart';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../providers/auth/AuthProvider';
import TripSchedule from '../../api/TripSchedule';
import CartResource from '../../api/Cart';
import { createCart } from '../api/carts';
import ApiServer from '../api';
import api from '../../api';

export async function getServerSideProps({ req, res, query }) {

    const { data: { data }, status } = await ApiServer().get('/client/public/trip/schedule/' + query.uuid);

    if (status === 404) return { notFound: true }


    return { props: { tripSchedule: data } }
}

export default function Product({ layout, tripSchedule }) {

    const { addTicket, removeTicket, tickets, ticketTotal, cart, validCart, passengerTypes, setBoarding } = useCart(tripSchedule);
    const dispatch = useDispatch();
    const { user } = React.useContext(AuthContext);

    let packages = tripSchedule.packages || [];

    const packageAmounts = packages.map(pack => pack.amount);

    const priceType = tripSchedule.only_day ?
        new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(tripSchedule.price) :
        new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(Math.min(...packageAmounts) + tripSchedule.price)


    React.useEffect(() => { layout('AppLayout') })

    async function dispatchCart() {

        const { create } = CartResource();

        if (!user) return window.location.href = '/account/login';

        await api.post('/client/customer/carts', { trip_schedule_id: tripSchedule.id, ...cart }).then(response => {
            return window.location.href = '/book/' + response.data.data;
        });

    }

    return (
        <Styled.Container>
            <Slider images={tripSchedule.trip.feature.metadata.trip_media} />
            <Styled.Details>
                <Styled.Name>{tripSchedule.trip.name}</Styled.Name>
                <Styled.Description>{tripSchedule.trip.description}</Styled.Description>
                <label>Local de embarque</label>
                <select name={'boarding_locations'} onChange={(e) => setBoarding(JSON.parse(e.target.value))}>
                    <option value={false}>Selecione o Local de Embarque</option>
                    {tripSchedule?.boarding_locations.map((local, key) => (
                        <option key={key} value={JSON.stringify({
                            name: local.name,
                            departure_time: local.departure_time
                        })}>{local.name} - {local.departure_time}</option>
                    ))}
                </select>
            </Styled.Details>
            {!tripSchedule.only_day ?
                <TripPackages data={tripSchedule} cart={Cart} /> :
                <PassengerTicket {...{ addTicket, removeTicket, tickets, ticketTotal, tripSchedule, validCart, dispatchCart, passengerTypes }} />
            }
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>O que levar ?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ul>
                            {tripSchedule.trip.feature.metadata.trip_takes.map((tripTakes, key) =>
                                <li key={key}>
                                    <h6>{tripTakes.title}</h6>
                                    <p>{tripTakes.description}</p>
                                </li>
                            )}
                        </ul>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>Roteiro</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ul>
                            {tripSchedule.trip.feature.metadata.road_map.map((roadMap, key) =>
                                <li key={key}>
                                    <h6>{roadMap.title}</h6>
                                    <p>{roadMap.description}</p>
                                </li>
                            )}
                        </ul>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </Styled.Container>
    )
}