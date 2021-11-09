import axios from 'axios';
import React, { useEffect } from 'react';
import TripSchedule from '../api/TripSchedule';

import CategoryCollection from '../resources/modules/CategoryCollection';
import { session } from '../session';
import withAuth from '../utils/withAuth';
import ApiServer from './api';
// import trips from './trips-by-category.json';

export async function getStaticProps(context) {

  const { data: { data }, status } = await ApiServer().get('/client/public/trips-by-category');

  if (status === 404) return { notFound: true }

  return {
    props: {
      trips: data
    }
  }
}

function Home({ layout, trips }) {

  console.log(trips)
  React.useEffect(() => { layout('AppLayout') });
  return (
    <section> <CategoryCollection data={trips} />  </section>
  );
}

export default Home