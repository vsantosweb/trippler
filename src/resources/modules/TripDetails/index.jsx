import React from 'react'
import Slider from '../../components/Slider'
import * as Styled from './styles';
import { useForm } from 'react-hook-form';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Button } from '../../components/_Elements/Button';
import history from '../../../history';
import moment from 'moment';
import TripPackages from '../../components/TripPackages';
import Cart from '../../../api/Cart/Cart';



export default function TripDetails({ data }) {
    
    let packages = data.packages || [];
    const packageAmounts = packages && packages.map(pack => pack.amount);
    console.log(data)
    return (
        <Styled.Container>
            {data.trip && <Slider images={data.trip?.feature.metadata.trip_media} />}
            <Styled.Details>
                <Styled.Name>{data.trip?.name}</Styled.Name>
                <Styled.Description>{data.trip?.description}</Styled.Description>
                <Styled.Info>
                    <Styled.InfoDetails>
                        <Styled.Period><i className={'las la-calendar'}></i> {`${moment(data.start_date).format('ll')} - ${moment(data.end_date).format('ll')}`}</Styled.Period>
                        <Styled.Vacancies> {data.status?.name}</Styled.Vacancies>
                    </Styled.InfoDetails>

                    <Styled.InfoDetails justify={'flex-end'}>
                        <Styled.InfoTop>A partir de</Styled.InfoTop>
                        {data && <Styled.InfoPriceValue>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(Math.min(...packageAmounts) + data.price)}</Styled.InfoPriceValue>}
                    </Styled.InfoDetails>
                </Styled.Info>
            </Styled.Details>
           <TripPackages data={data} cart={Cart} />
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>O que levar ?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ul>
                            {data?.trip?.feature.metadata.trip_takes.map((tripTakes, key) =>
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
                            {data?.trip?.feature.metadata.road_map.map((roadMap, key) =>
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