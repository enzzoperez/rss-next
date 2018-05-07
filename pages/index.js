import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'
import Layout from "../components/layout";
import ListNews from "../components/listNews";

export default class Index extends Component {
    

    render() {
        const {news} = this.props                
        return (
            <Layout>
                <ListNews news={news}/>
            </Layout>
        )
    }
};

Index.getInitialProps = async ({req}) => {
    const apiKey = 'ae6ifsllsv5k53bwud5dwhchjlyqmrcwctcxcbta'
    const url =`https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.elesquiu.com%2Frss%2Fun_foto.html&api_key=${apiKey}&count=20`
    const response = await fetch(url)
    const news = await response.json()

    return {news}
}
