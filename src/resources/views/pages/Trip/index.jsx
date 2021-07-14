import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Gallery from "react-grid-gallery";
import Validator from "Validator";


import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import css from "./Trip.module.scss";
import SiteLayout from "../../layouts/SiteLayout";
import { Container, Row, Col } from "react-grid-system";
import TripReviews from "../../../components/Reviews/TripReviews/TripReviews";
import TripSchedule, { tripScheduleShow } from "../../../../api/Trip/TripSchedule";
import { ModalLogin } from "../../../components/Modal/ModalLogin";
import Cart from "../../../../api/Cart/Cart";

import cookie from "js-cookie";
import { Button } from "../../../components/_Elements/Button";
import Slider from "../../../components/Slider";
import TripDetails from "../../../modules/TripDetails";


const Trip = ({ layout, ...props }) => {
  const [tripSchedule, setTripSchedule] = useState(false);

  let _fetch = React.useRef(true);

  useEffect(() => {

    layout('AppLayout');

    tripScheduleShow(props.location.state).then(response => _fetch && setTripSchedule(response.data))

    return () => { _fetch = false }
    
  }, []);

  return (
    <TripDetails data={tripSchedule} />
  );
};
export default Trip;
