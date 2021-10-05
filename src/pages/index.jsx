import axios from 'axios';
import React, { useEffect } from 'react';
import TripSchedule from '../api/TripSchedule';

import CategoryCollection from '../resources/modules/CategoryCollection';
import { session } from '../session';
import withAuth from '../utils/withAuth';
import ApiServer from './api';

export async function getStaticProps(context) {

  const { data: { data }, status } = await ApiServer().get('/client/public/trip/schedule/categories');

  if (status === 404) return { notFound: true }

  return {
    props: {
      data: data
    }
  }
}

function Home({ layout, data }) {

  React.useEffect(() => { layout('AppLayout') });
  return (
    <section> <CategoryCollection data={data} /> </section>
  );
}

export default Home