/*
INIT: ensure Babel/Eslint/Flow is configured for ES Class Fields & Static Properties
JSX USAGE: <Iframe src='http://web.site' onLoad={myOnloadFunction}/>
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import Link from "next/link";
import Layout from "../components/layout";

class Iframe extends Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    onLoad: PropTypes.func,
  }

  componentDidMount () {
    let iframe = ReactDOM.findDOMNode(this.refs.iframe)
    iframe.addEventListener('load', this.props.onLoad);
  }

  render () {
    const iframeStyle = {
      width: '100%',
      height: '100%',
      border: '0',
      position: 'absolute',
    }

    return (
      <iframe
        ref="iframe"
        {...this.props}
        frameBorder={'0'}
        width={'100%'}
        height={'100%'}
        style={iframeStyle}
        src='http://www.numerosconsuerte.com.ar/sorteos/catamarca' 
        onLoad={submitForm()}
      />
    )
  }

}

export default Iframe