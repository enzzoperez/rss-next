import React, { Component } from 'react';
import Footer from "./footer";
import Header from "./header";

export default class Layout extends Component {
  render() {
    const {children} = this.props
    return (
      <div>
        <Header/>
            {children}
        <Footer/>
      </div>
    )
  }
};
