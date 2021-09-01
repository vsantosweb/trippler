import React from 'react'
import * as Styled from './styles';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import moment from 'moment';
import Slider from '../../resources/components/Slider';
import TripPackages from '../../resources/components/TripPackages';
import { tripScheduleShow } from '../../api/Trip/TripSchedule';
import Cart from '../../api/Cart/Cart';

export async function getServerSideProps(context) {

    const response = await tripScheduleShow(context.query.uuid);

    if (response.status === 404) {

        return { notFound: true }
    }
    
    return { props: { tripSchedule: response.data } }
}

export default function Product({ layout, tripSchedule }) {

    let packages = tripSchedule.packages || [];
    
    const packageAmounts = packages.map(pack => pack.amount);

    React.useEffect(() => {  layout('AppLayout') } )

    return (
        <Styled.Container>
            <Slider images={tripSchedule.trip.feature.metadata.trip_media} />
            <Styled.Details>
                <Styled.Name>{tripSchedule.trip.name}</Styled.Name>
                <Styled.Description>{tripSchedule.trip.description}</Styled.Description>
                <Styled.Info>
                    <Styled.InfoDetails>
                        <Styled.Period><i className={'las la-calendar'}></i> {`${moment(tripSchedule.start_date).format('ll')} - ${moment(tripSchedule.end_date).format('ll')}`}</Styled.Period>
                        <Styled.Vacancies> {tripSchedule.status.name}</Styled.Vacancies>
                    </Styled.InfoDetails>

                    <Styled.InfoDetails justify={'flex-end'}>
                        <Styled.InfoTop>A partir de</Styled.InfoTop>
                        <Styled.InfoPriceValue>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(Math.min(...packageAmounts) + tripSchedule.price)}</Styled.InfoPriceValue>
                    </Styled.InfoDetails>
                </Styled.Info>
            </Styled.Details>
            <TripPackages data={tripSchedule} cart={Cart} />
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