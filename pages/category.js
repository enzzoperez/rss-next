import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'

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