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
import api from '../../api';
import TimelineRoadmap from '../../resources/components/TimelineRoadmap';
// import trip from './trip.json';

import Button from '../../resources/components/_Elements/Button';
import { Badge } from '@chakra-ui/react';
import { Link } from 'next/link';
import {
    Drawer,
    DrawerBody,
    IconButton,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    ButtonGroup
} from "@chakra-ui/react"

export async function getServerSideProps({ req, res, query }) {

    const { data: { data }, status } = await ApiServer().get('/client/public/trips/' + query.uuid);

    if (status === 404) return { notFound: true }


    return { props: { trip: data } }
}

export default function Product({ layout, trip }) {

    console.log((5 * 252 + 4 * 124 + 3 * 40 + 2 * 29 + 1 * 33) / (252 + 124 + 40 + 29 + 33))

    const { isOpen, onOpen, onClose } = useDisclosure()

    const roadmapDrawer = useDisclosure();

    const [schedule, setSchedule] = React.useState(false);

    const { addTicket, removeTicket, tickets, ticketTotal, cart, validCart, passengerTypes, setBoarding, setScheduleData } = useCart();

    // const dispatch = useDispatch();
    const { user } = React.useContext(AuthContext);

    // let packages = tripSchedule.packages || [];

    // const packageAmounts = packages.map(pack => pack.amount);

    // const priceType = tripSchedule.is_package ?
    //     new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(tripSchedule.price) :
    //     new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(Math.min(...packageAmounts) + tripSchedule.price)

    React.useEffect(() => { layout('AppLayout') })
    console.log(roadmapDrawer)
    const openDrawer = (schedule) => {


        api.get('/client/public/trip/schedule/' + schedule.uuid).then(response => {
            setSchedule(response.data.data);
            setScheduleData(response.data.data)
            onOpen(!isOpen);
        });
    }

    async function dispatchCart() {

        if (!user) return window.location.href = '/account/login';

        await api.post('/client/customer/carts', { trip_schedule_id: schedule.uuid, ...cart }).then(response => {
            return window.location.href = '/book/' + response.data.data;
        });

    }
    return (
        <Styled.Container>
            <Slider images={['https://i.pinimg.com/originals/2d/75/73/2d757346cb695202ba46e42101058827.jpg']} />
            <Styled.Details>
                <Styled.Name>{trip.name}</Styled.Name>

                {/* <Styled.Description>{trip.description}</Styled.Description>  */}
            </Styled.Details>

            <Styled.SchedulesContainer>
                {trip.schedules.map((schedule, index) =>
                    <Styled.TripScheduleCard key={index} onClick={() => openDrawer(schedule)}>
                        <Styled.TripScheduleCardHeader>
                            <i style={{ fontSize: '1.4em' }} className={'las la-calendar'}></i> <strong>{moment(schedule.start_date).format('ll')} - {moment(schedule.end_date).format('ll')}</strong>
                        </Styled.TripScheduleCardHeader>
                        <Styled.TripScheduleCardBody>
                           
                            <Styled.TripScheduleBoardings>
                                <Styled.TripScheduleBoarding>Term. Grajau</Styled.TripScheduleBoarding>
                                <Styled.TripScheduleBoarding>Term. Barra Funda</Styled.TripScheduleBoarding>
                            </Styled.TripScheduleBoardings>
                            <Styled.TripScheduleBoardingIcon>
                                <Styled.TripSchedulePrice>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(schedule.price)}</Styled.TripSchedulePrice>
                            </Styled.TripScheduleBoardingIcon>
                        </Styled.TripScheduleCardBody>
                        <Styled.TripScheduleCardFooter>
                            <div>Bate & Volta</div>
                            <Styled.TripScheduleStatus>Vagas Disponíveis</Styled.TripScheduleStatus>

                        </Styled.TripScheduleCardFooter>
                    </Styled.TripScheduleCard>
                )}
            </Styled.SchedulesContainer>
            <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">Configure o seu pacote</DrawerHeader>
                    <DrawerBody style={{ padding: '1em 0' }}>

                        {schedule && <PassengerTicket {...{
                            addTicket,
                            removeTicket,
                            tickets,
                            ticketTotal,
                            schedule,
                            validCart,
                            dispatchCart,
                            passengerTypes
                        }} />}
                        <Styled.TripFeaturesNav>
                            <Styled.TripFeaturesNavList>
                                <Styled.TripFeaturesNavListItem onClick={roadmapDrawer.onOpen}>
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

                        <Drawer placement={'right'} size={'lg'} onClose={roadmapDrawer.onClose} isOpen={roadmapDrawer.isOpen}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader borderBottomWidth="1px">Roteiro</DrawerHeader>
                                <DrawerBody>
                                    <TimelineRoadmap data={schedule.roadmap} />
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Styled.Container>
    )
}