import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

const theme = {
    defaultContainer: {
        width: '1280px',
        spacing: '.8em'
    },
    colors: {
        primary: '#7c00ff',
        secondary: '#ff9800' /*'#e6207e'*/,
        text: '#333',
        background: '#fff',
        accent: '#d396c3',
        muted: '#efefef',
    },
    space: [
        0,
        '0.125rem', // 2px
        '0.25rem', // 4px
        '0.5rem', // 8px
        '1rem', // 16px
        '2rem', // 32px
        '4rem', // 64px
        '8rem', // 128px
        '16rem', // 256px
    ],
    fonts: {
        body: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        heading: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    },
    sizes: {
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        xs: '0.75rem',
    },
    fontWeights: {
        light: 200,
        normal: 400,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.1,
    },
    borders: {
        none: 'none',
        thin: '1px solid',
    },
    radiusDefault: '8px',
    defaultRadius: '8px'

}

const Theme = ({ children }) => (

    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
);

export default Theme;
