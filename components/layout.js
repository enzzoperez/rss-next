import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Example from "./navbar";
import Footer from "./footer";
import Header from "./header";
import { Container } from 'reactstrap'


export default class Layout extends Component {
  render() {
    const {title, description, children} = this.props
    return (
      <div>
        <Head>
          <title>{ title? title: '' }</title>
          <meta name="description" content={ description? description: ''} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <link rel="manifest" href="/static/manifest.webmanifest" />

          <meta name="theme-color" content="#cc7c28" />
          <link rel="shortcut icon" href="/static/icon.png" />
          <link rel="apple-touch-icon" href="/static/icon.png" />
          <meta name="apple-mobile-web-app-title" content="Next Noticias" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>

      <div>
        <Example/>
        <Header/>
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