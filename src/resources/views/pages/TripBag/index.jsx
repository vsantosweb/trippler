import React from "react";
import { useSelector, useDispatch } from "react-redux";

import css from "./cart.module.scss";
import * as documentValidator from "../../../helpers/DocumentValidator";
import CardAdditionalPackage from "../../../components/Cards/CardAdditionalPackage";

import Cart from "../../../../api/Cart/Cart";
import { tripScheduleShow } from "../../../../api/Trip/TripSchedule";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <Swiper direction="horizontal" spaceBetween={5} slidesPerView={1.4} freeMode={true}>

        {tripSchedule && cart && tripSchedule?.additional_packages?.map((item, key) => (
          <SwiperSlide key={key}>
            <CardAdditionalPackage
              key={key}
              data={item}
              passagers={cart.cart_data.items}
            // changePassagers={chosePassagerPackages}
            />
          </SwiperSlide>
        ))}


      </Swiper>

    </div>
  );
}
