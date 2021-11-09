
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

import Theme from '../theme';

import "swiper/swiper.scss";
import "../resources/fonts/line-awesome-1.3.0/1.3.0/css/line-awesome.min.css";
import { Layout } from '../resources/layouts';
import { AuthProvier } from '../providers/auth/AuthProvider';
import Head from 'next/head'

export async function getServerSideProps(context) {

}


export default function MyApp({ Component, pageProps, router }) {

    const [layout, setLayout] = useState(false);
    const [pageInfo, pageConfig] = useState({});
    return (

        <AuthProvier>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {/* <LoaderTracker /> */}
                    <Theme>
                        {/* <SessionProvider> */}
                        <Layout layoutType={layout}>
                            <Component layout={setLayout} {...pageProps} />
                        </Layout>
                        {/* </SessionProvider> */}
                    </Theme>
                </PersistGate>
            </Provider>
        </AuthProvier>

    )
}
