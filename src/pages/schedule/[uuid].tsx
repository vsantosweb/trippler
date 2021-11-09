import React from 'react'
import * as Styled from './styles';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import moment from 'moment';
import Slider from '../../resources/components/Slider';
import PassengerTicket from '../../resources/components/TripPassagers';
import useCart from '../../resources/modules/Cart';
import { AuthContext } from '../../providers/auth/AuthProvider';
import CartResource from '../../api/Cart';
import ApiServer from '../api';
import api from '../api';
import TimelineRoadmap from '../../resources/components/TimelineRoadmap';
import schedule from './schedule.json';

import {
    Drawer,
    DrawerBody,
    IconButton,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    Button,
    ButtonGroup
} from "@chakra-ui/react";

export default function tripSchedule({ layout }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { addTicket, removeTicket, tickets, ticketTotal, cart, validCart, passengerTypes, setBoarding } = useCart(schedule);
    // const dispatch = useDispatch();
    const { user } = React.useContext(AuthContext);

    React.useEffect(() => { layout('AppLayout') })

    async function dispatchCart() {

        const { create } = CartResource();

        if (!user) return window.location.href = '/account/login';

        await api.post('/client/customer/carts', { trip_schedule_id: schedule.uuid, ...cart }).then(response => {
            return window.location.href = '/book/' + response.data.data;
        });

    }
    return (
        <>
        
            {/* <label>Local de embarque</label>
                <select name={'boarding_locations'} onChange={(e) => setBoarding(JSON.parse(e.target.value))}>
                    <option value={false}>Selecione o Local de Embarque</option>
                    {schedule?.boarding_locations.map((local, key) => (
                        <option key={key} value={JSON.stringify({
                            name: local.name,
                            departure_time: local.departure_time
                        })}>{local.name} - {local.departure_time}</option>
                    ))}
                </select> */}
            <PassengerTicket {...{ addTicket, removeTicket, tickets, ticketTotal, schedule, validCart, dispatchCart, passengerTypes }} />

            <Styled.TripFeaturesNav>
                <Styled.TripFeaturesNavList>
                    <Styled.TripFeaturesNavListItem onClick={onOpen}>
                        <Styled.TripFeatureIcon><i className={'las la-map-marked'}></i></Styled.TripFeatureIcon>
                        Roteiro
                    </Styled.TripFeaturesNavListItem>
                    <Styled.TripFeaturesNavListItem>
                        <Styled.TripFeatureIcon><i className={'las la-check'}></i></Styled.TripFeatureIcon>
                        O que levar
                    </Styled.TripFeaturesNavListItem>
                    <Styled.TripFeaturesNavListItem>
                        <Styled.TripFeatureIcon><i className={'las la-check'}></i></Styled.TripFeatureIcon>
                        O que levar
                    </Styled.TripFeaturesNavListItem>
                </Styled.TripFeaturesNavList>
            </Styled.TripFeaturesNav>

            <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">Roteiro</DrawerHeader>
                    <DrawerBody>
                        <TimelineRoadmap data={schedule.roadmap} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}