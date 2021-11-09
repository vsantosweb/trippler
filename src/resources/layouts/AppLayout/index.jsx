import React from 'react';
import Drawer from '../../components/Drawer';
import Footer from '../../components/Footer';
// import Footer from '../components/Footer';
import Nav from '../../components/Nav';
import * as Styled from './styles';


export default function AppLayout({ children }) {
    return (
        <div style={{display:'flex', flexDirection: 'column', minHeight: '100%', height: 'auto'}}>
            <Nav />
            <div style={{ minHeight: '100%', height: '100%', flex: 1 }}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

