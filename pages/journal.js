import React, { Component } from 'react';
import Layout from "../components/layout";


const Categories = (props) => {
    return (
        <p>Categoriess</p>
    )
}

export default class Journal extends Component {
    render() {
        const {name} = this.props.url.query
        console.log('pop');
        
        return (
            <Layout>
                <Categories/>
            </Layout>
        )
    }
};


