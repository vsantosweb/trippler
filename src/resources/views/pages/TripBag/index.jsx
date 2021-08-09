import React from "react";
import { useSelector, useDispatch } from "react-redux";

import css from "./cart.module.scss";
import * as documentValidator from "../../../helpers/DocumentValidator";
import CardAdditionalPackage from "../../../components/Cards/CardAdditionalPackage";

import Cart from "../../../../api/Cart/Cart";
import { tripScheduleShow } from "../../../../api/Trip/TripSchedule";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AdditionalPackage from "../../../components/AdditionalPackage";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

SwiperCore.use([Navigation]);

export default function TripBag({ layout }) {

  const [cart, setCart] = React.useState({});
  const [tripSchedule, settripSchedule] = React.useState({});

  const cartSession = useSelector((state) => state.tripBag);

  let _fetch = React.useRef(false);

  React.useEffect(() => {

    layout('AppLayout');

    Cart.show(cartSession.session).then(response => {
      _fetch && setCart(response.data)
      tripScheduleShow(response.data.cart_data.tripScheduleCode).then(response => _fetch && settripSchedule(response.data));
    });

    return () => { _fetch = false }

  }, [])

  console.log(cart)

  return (

    <div>
            {/* <h5>1 - Identificação dos Clientes</h5>
            <Accordion>
                {[1,2,3,4,5,6,7,8].map(item => (
                  <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>Cliente {item}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <label>Nome</label>
                     <input />
                     <label>RG</label>
                     <input />
                     <label>Data de Nascimento</label>
                     <input />
                  </AccordionItemPanel>
              </AccordionItem>
                ))}
            </Accordion> */}
      <h5>2 - Pacotes Adicionais</h5>
      {cart &&  <AdditionalPackage data={tripSchedule?.additional_packages} passengers={cart?.cart_data?.items} />}
    </div>
  );
}
