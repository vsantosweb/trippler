/*
 * React Structure
 *
 * (c) Vitor Santos <vitor@vsantosweb.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import { SEO } from '../resources/components/SEO';
import { Layout } from '../resources/layouts/index.tsx';
import ErrorBoundary from '../ErrorBoundary';
import { SessionProvider } from './session/SessionContext';
import AppRoutes from './router';
import history from '../history';
import Theme from '../theme';


export default function App(props) {

    const [layout, setLayout] = useState(false);
    const [pageInfo, pageConfig] = useState({});

    useEffect(() => {


    }, [pageInfo])

    return (
        <ErrorBoundary>
            <SessionProvider>
                <Theme>
                    <Router history={history}>
                        <Layout layoutType={layout}>
                            <SEO {...pageInfo} />
                            <AppRoutes setLayout={setLayout} layout={setLayout} pageConfig={pageConfig} />
                        </Layout>
                    </Router>
                </Theme>
            </SessionProvider>
        </ErrorBoundary>
    )


}