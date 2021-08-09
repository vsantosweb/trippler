import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Gallery from "react-grid-gallery";
import Validator from "Validator";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import css from "./Trip.module.scss";
import SiteLayout from "../../layouts/SiteLayout";
import { Container, Row, Col } from "react-grid-system";
import TripReviews from "../../../components/Reviews/TripReviews/TripReviews";
import  { tripScheduleShow } from "../../../../api/Trip/TripSchedule";
import { ModalLogin } from "../../../components/Modal/ModalLogin";
import Cart from "../../../../api/Cart/Cart";

import cookie from "js-cookie";
import { Button } from "../../../components/_Elements/Button";

SwiperCore.use([Navigation]);

// Cokkie.remove('cart')
const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];

const Trip = (props) => {
  const [tripSchedule, setTripSchedule] = useState(false);
  const [tripPackage, setTripPackage] = useState("");
  const [passengers, setpassengers] = useState(false);
  const [totalPrice, setTotalPrice] = useState(tripSchedule.price);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [loginRequest, setLoginRequest] = useState("");

  const dispatch = useDispatch();
  const loggedCustomer = useSelector((state) => state.customer);

  const validation = (data) => {
    let validator = Validator.make(data, {
      boarding_location: "required",
      package: "required",
      passengers: "quantity",
    });

    validator.extend("quantity", validatepassengers, ":attr is not a valid");

    if (validator.fails()) {
      return setDisableSubmit(true);
    } else {
      return setDisableSubmit(false);
    }
  };

  const validatepassengers = (name, value, params) => {
    if (tripPackage.passengers) {
      return tripPackage.package.quantity === tripPackage.passengers.length;
    }
    return false;
  };

  useEffect(() => {
    tripScheduleShow(props.match.params.code).then((response) => {
      setTripSchedule(response.data);
      setTotalPrice(response.data.price);
    });

    validation(tripPackage);
  }, [tripPackage]);

  const chosepassengerTypes = (element, position) => {
    let passengers = Object.assign([], tripPackage.passengers);
    let passenger = JSON.parse(element.target.value);
    passengers[position] = passenger;
    setTripPackage({ ...tripPackage, passengers });
  };

  const passengerCount = () => {
    let passengers = [];

    for (let i = 0; i < tripPackage.package.quantity; i++) {
      passengers.push(
        <select
          style={{ width: "100%", margin: ".4em 0" }}
          className={"form-control"}
          name={`passageiro[${i}]`}
          defaultValue="Selecione o tipo de passageiro"
          onChange={(element) => chosepassengerTypes(element, i)}
        >
          {tripSchedule.passenger_types.map((passenger) => (
            <option key={passenger.id} value={JSON.stringify(passenger)}>
              {passenger.name}
            </option>
          ))}
        </select>
      );
    }
    return passengers;
  };

  const handleBoardingLocation = (e) => {
    setTripPackage({
      boarding_location: JSON.parse(e.target.value),
      ...tripPackage,
    });
  };
  const handlePackage = (selectedPackage) => {
    setTripPackage({
      code: tripSchedule.code,
      name: tripSchedule.trip.name,
      price: tripSchedule.price,
      package: selectedPackage,
      ...tripPackage,
    });
  };

  const handleSubmit = () => {
    if (!loggedCustomer) {
      return setLoginRequest(true);
    }

    Cart.add(tripPackage).then((response) => {
      cookie.set("csid", response.data, { expires: 7 });
      return props.history.push("/mochila");
    });
  };
  return (
    <div className={`${css.tripPage} ${css.containerWrapper}`}>
      <ModalLogin
        visible={loginRequest}
        handleClose={() => setLoginRequest(false)}
      />

      <header className={css.tripHeader}>
        {tripSchedule ? (
          <Container fluid>
            <Row>
              <Col md={8}>
                <div className={`${css.tripLead}`}>
                  <h1 className={css.tripLeadTitle}>{tripSchedule.trip.name} </h1>
                </div>

              </Col>
              <Col md={4}>
                <div className={css.tripForm}>
                  <header className={css.tripFormHeader}>
                    <img src={tripSchedule.trip.image_url} />
                  </header>
                  <section className={css.tripMainWrapper}>
                    <div className={css.tripCheckoutBox}>
                      <div className={css.tripPriceTextContent}>
                        <span className={css.price}>R${totalPrice}</span>
                        {/* <del>R$ {tripSchedule.price + tripPackage.amount} </del> */}
                      </div>
                      <div className={css.tripCheckoutActions}>
                        <small>Selecione o local de Embarque</small>
                        <select
                          style={{ width: "100%", margin: ".4em 0" }}
                          className={"form-control"}
                          name={"boarding_locations"}
                          defaultValue="Selecione o tipo de passageiro"
                          onChange={handleBoardingLocation}
                        >
                          {tripSchedule.boarding_locations.map((location) => (
                            <option
                              key={location.id}
                              value={JSON.stringify(location)}
                            >
                              {location.name}
                            </option>
                          ))}
                        </select>
                        {!tripPackage.package ? (
                          <div className={css.tripPackageList}>
                            <h4>ESCOLHA UM PACOTE</h4>
                            <p>
                              Ao efetuar a reserva, você poderá optar por pagar
                              para todos os passageiros ou cada um pagar o seu
                            </p>

                    
                            <button
                              className={`${css.slideNav} slide-nav swiper-button-prev`}
                            >
                              {"<"}
                            </button>
                            <button
                              className={`${css.slideNav} slide-nav swiper-button-next`}
                            >
                              {">"}
                            </button>
                            <Swiper
                              navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                              }}
                              direction="horizontal"
                              spaceBetween={10}
                              slidesPerView={3}
                              freeMode={true}
                              onSwiper={(swiper) => console.log(swiper)}
                            >
                              {tripSchedule.packages.map((tripPackage) => (
                                <SwiperSlide className={css.tripPackageContent}>
                                  <div
                                    className={css.packageItem}
                                    key={tripPackage.id}
                                    onClick={() => handlePackage(tripPackage)}
                                  >
                                    <span className={css.packageTitle}>
                                      {tripPackage.name} x{tripPackage.quantity}
                                    </span>
                                    <p>{tripPackage.description}</p>
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        ) : (
                          <div className={css.trippassengerTypes}>
                            {
                              <button
                                className={"btn btn-light"}
                                onClick={() => setTripPackage("")}
                              >
                                {"Escolher outro"}
                              </button>
                            }{" "}
                            <h4>SELECIONE OS PASSAGEIROS</h4>
                            <p>
                              Ao efetuar a reserva, você poderá optar por pagar
                              para todos os passageiros ou cada um pagar o seu
                            </p>
                            {/* <hr /> */}
                            {passengerCount()}
                            {/* <hr /> */}
                            <small>
                              *Observação: bebê até 4 anos, viajando no colo e
                              acompanhado de dois adultos, é isento e não entram
                              no cálculo do pacote, porém, logo após a compra,
                              devem ser cadastrados. As orientações seguirão por
                              e-mail após a compra.
                            </small>
                          </div>
                        )}
                        <button
                          onClick={handleSubmit}
                          disabled={disableSubmit}
                          className={`${css.checkoutButton} btn btn-info`}
                        >
                          FECHAR PACOTE
                        </button>

                        <Button disabled={false} outlined variant={'secondary'}>Fechar</Button>

                      </div>
                      <p>
                        Em Até 12x Desconto de R$ 44,95 via
                        depósito/transferência
                      </p>
                    </div>
                  </section>
                </div>
              </Col>
            </Row>

          </Container>
        ) : (
          "Carregando..."
        )}
      </header>
      {/* <section>
                    <Container fluid>
                        <Row>
                            <Col md={8}>
                                <div className={`${css.tripLead}`}>
                                    <h2>Visão Geral</h2>
                                    <p className={css.tripLeadHeadLine}>
                                        Conhecer cidades históricas, balneário badalado e um rio que vira mar. Sinta a experiência de estar em um destino cultural entre os mais
                                        procurados da América Latina. E que tal um hotel de LUXO para se hospedar? Surpreenda-se com essa Trip!
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <div className={`${css.tripLead}`}>
                                    <h2>Avaliações</h2>
                                    <TripReviews />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section> */}
    </div>
  );
};
export default Trip;
