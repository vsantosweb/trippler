import Axios from "axios";
import React, { useEffect, useState } from "react";

import { tripScheduleShow } from "../../api/Trip/TripSchedule";

import TripDetails from "../../resources/modules/TripDetails";
import Trips from "../api/trips";


// export async function getStaticPaths() {
//   // let resp = await fetch('http://localhost:3000/api/trips');
//   // let trips = await resp.json();
//   // console.log(trips, 'AAAAAAAAAAAAAAAAAAAAAAAAAAA')

//   // const paths = trips.data.map((trip) => ({
//   //   params: { id: trip.id.toString() },
//   // }));

//   return { paths: [], fallback: false }
// }
export async function getServerSideProps(context) {

  const data = await tripScheduleShow(context.query.uuid+1);
  tripScheduleShow
  // let trips = await resp.json();
  // const trip = trips.data.find( x => x.id == context.params.id)
  // console.log(trip,   'SADOPASKDOPKASODKASOD')
  // return {
  //   props: trip.id
  // }

  return {
    props: { trip: data.data }
  }
}
export default function Trip({ layout, data, trip }) {

  const [tripSchedule, setTripSchedule] = useState(false);

  useEffect(() => {

    layout('AppLayout')

  }, []);

  return (
   
    <TripDetails data={trip.data} />
  );
};

