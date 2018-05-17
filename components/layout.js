import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Example from "./navbar";
import Footer from "./footer";
import { Container } from 'reactstrap'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-119234292-1');


export default class Layout extends Component {
  render() {
    const {title, description, children} = this.props
    return (
      <div>
        <Head>
          <meta name="description" content={ description? description: 'PWA de Noticias catamarqueñas. A Simple PWA of News from Catamarca'} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Next News</title>
          <link rel="manifest" href="/static/manifest.webmanifest" />
          <meta name="theme-color" content="#cc7c28" />
          <link rel="shortcut icon" href="/static/logo-next.png" />
          <link rel="apple-touch-icon" href="static/logo-next.png" />
          <meta name="apple-mobile-web-app-title" content="Next News" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119234292-1"></script>
          <script dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'UA-119234292-1');
          `}} />

        </Head>

      <div>
        <Example/>
            {children}
        <Footer/>
      </div>

      <style jsx global>{`
        body { 
          margin: 0;
          background: #fafafa;
          font-family: Nilland;
        }
      `}</style>
    </div>
    )
  }
};