import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetch from 'isomorphic-unfetch'
import withRedux from "next-redux-wrapper";

import Layout from "../components/layout";
import NewsEsquiu from "../components/newsEsquiu";
import NewsClarin from "../components/newsClarin";
import NewsCatActual from "../components/newsCatActual";
import NewsNacion from "../components/newsNacion";


export default class Index extends Component {
    state = {
        loading: true
    }

    componentDidMount(){
        let {loading} = this.props
        this.setState({loading: loading})
    }

    render() {
        const {newsEsquiu, newsClarin, newsCatActual, newsNacion} = this.props
        if (this.state.loading) {
            return (
            <Layout>
                <p>Cargando Noticias...</p>
            </Layout>)
        }             
        return (
            <Layout>
                <NewsEsquiu news={newsEsquiu}/>
                <NewsClarin news={newsClarin}/>
                <NewsCatActual news={newsCatActual} />
                <NewsNacion news={newsNacion}/>
            </Layout>
        )
    }
};

Index.getInitialProps = async ({req}) => {
    const apiKey = 'ae6ifsllsv5k53bwud5dwhchjlyqmrcwctcxcbta'
    const apiKeyNacion='79b0a6432abc49f1a441245a915f065b'

    const urlEsquiu =`https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.elesquiu.com%2Frss%2Fun_foto.html&api_key=${apiKey}&count=5`
    const responseEsquiu = await fetch(urlEsquiu)
    const newsEsquiu = await responseEsquiu.json()

    

    const urlClarin = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.clarin.com%2Frss%2Flo-ultimo%2F&api_key=${apiKey}&count=5`
    const responseClarin = await fetch(urlClarin)
    const newsClarin = await responseClarin.json()

    const urlCAtActual = `https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.catamarcactual.com.ar%2Frss%2Fun_foto.html&api_key=${apiKey}&count=5`
    const responseCatActual = await fetch(urlCAtActual)
    const newsCatActual = await responseCatActual.json()

    const urlNacion = `https://newsapi.org/v2/everything?sources=la-nacion&apiKey=${apiKeyNacion}&pageSize=5`
    const responseNacion = await fetch(urlNacion)
    const newsNacion = await responseNacion.json()

    return {
        newsEsquiu: newsEsquiu, 
        newsClarin: newsClarin,
        newsCatActual: newsCatActual,
        newsNacion: newsNacion,
        loading: false
    }
}