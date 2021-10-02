import React from 'react';
import Drawer from '../../components/Drawer';
// import Footer from '../components/Footer';
import Nav from '../../components/Nav';
import * as Styled from './styles';


export default function AppLayout({ children }) {
    return (
        <React.Fragment>
            <Nav />
            <div style={{ minHeight: '100%', height: '100%' }}>
                {children}
            </div>
            {/* <Footer/> */}
        </React.Fragment>
    )
}

