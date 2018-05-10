import React, { Component } from 'react';
import { extractDescription, extractImage } from "../utils/utils";
import fetch from 'isomorphic-unfetch'
import { Row, Col, Jumbotron, Button } from 'reactstrap';


export default class Category extends Component {
    render() {
        const {name} = this.props.url.query
        
        return (
        <div>
            Categorys
        </div>
        )
    }
};

Category.getInitialProps = async ({query}) => {
    console.log('quer', query)
    return ('yayaya')
}