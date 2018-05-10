import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'
import { Row, Col, Jumbotron, Button } from 'reactstrap';

import { extractDescription, extractImage } from "../utils/utils";
import Layout from "../components/layout";
import NewsCategories from "../components/newsCategories";

export default class Category extends Component {
    render() {
        const {news} = this.props
        
        return (
            <Layout>
                <NewsCategories news={news}/>
            </Layout>                
        )
    }
};

Category.getInitialProps = async ({query}) => {
    const urlApi = 'https://api.rss2json.com/v1/api.json?rss_url='
    const urlRss = query.name

    const response = await fetch(`${urlApi}${urlRss}`)
    const json = await response.json()

    return {news: json}
}