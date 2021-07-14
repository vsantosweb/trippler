import React from 'react';
import { Helmet } from 'react-helmet';

export function SEO(props) {
  
  let { children, pageDescription, pageTitle, pageUrl, image } = props;

  return (
    <React.Fragment>
      <Helmet
        defaultTitle={process.env.REACT_APP_NAME|| pageTitle}
        htmlAttributes={{ lang: 'pt-br' }}
        titleTemplate={`%s | ${pageDescription}`}
      >

        <title>{process.env.REACT_APP_NAME|| pageTitle}</title>

        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={pageDescription}/>
        <meta property="og:title" content={`${process.env.REACT_APP_NAME|| pageTitle}}`}/>

        {image && <meta property="og:image" content={image} />}

        <meta property="twitter:title" content={`${process.env.REACT_APP_NAME|| pageTitle}}`}/>
        <meta property="twitter:card" content={image ? 'summary_large_media' : 'summary'} />

        {image && <meta property="twitter:image" content={image} />}

      </Helmet>
      {children}
    </React.Fragment>
  )
}
