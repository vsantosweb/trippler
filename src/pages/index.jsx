import axios from 'axios';
import React, { useEffect } from 'react';

import CategoryCollection from '../resources/modules/CategoryCollection';
import { session } from '../session';
import withAuth from '../utils/withAuth';

export async function getStaticProps(context) {

  session()
    const { data } = await axios.get('http://localhost:3000/api/trips');
    return {
      props: data
    }
  }

function Home({ layout, data }) {

    React.useEffect(() => { layout('AppLayout') });

    return (
        <section> <CategoryCollection data={data} /> </section>
    );
}

export default Home