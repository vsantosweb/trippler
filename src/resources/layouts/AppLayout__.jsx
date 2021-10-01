import React from 'react';
// import Footer from '../components/Footer';
import Nav from '../components/Nav';


export default function AppLayout({ children }) {
    return (
        <React.Fragment>
            <Nav />
            <div style={{ minHeight: '100%', height: 'auto' }}>
                {children}
                <div style={{ width: '100px', height: '100px', background: '#333', position: 'fixed', top: 0 }}>teste</div>
            </div>
            {/* <Footer/> */}
        </React.Fragment>
    )
}

