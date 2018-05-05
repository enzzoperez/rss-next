import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'
const parseString = require('xml2js').parseString;
import { extractDescription, extractImage } from "../utils/utils";
import Layout from "../components/layout";
import ListNews from "../components/listNews";

export default class Index extends Component {
    

    render() {
        const {news} = this.props        
        return (
            <Layout>
                {news.map(({title, imgSrc, shortDescription, date, time}, index)=>(
                    <div key={index}>
                        <img src={imgSrc}/>
                        <div dangerouslySetInnerHTML={{__html: `Resumen: ${shortDescription}`}} />
                        <div dangerouslySetInnerHTML={{__html: `Titulo: ${title}`}} />
                        <p>Fecha: {date} - Hora: {time}</p>
                        <hr></hr>
                    </div>
                ))}
            </Layout>
        )
    }
};

Index.getInitialProps = async ({req}) => {
    const response = await fetch('http://www.elesquiu.com/rss/un_foto.html')
    const xml = await response.text()
    let list
    let news = []
    parseString(xml, (err, result) => {
        list = result
    });
    news = list.rss.channel[0].item.map(({title, link, description, pubDate}, index)=>{
        let titleProp = title
        let imgSrc = extractImage(description[0])
        let shortDescription = extractDescription(description[0])
        let date = new Date(pubDate);
        let dateNow = date.toLocaleDateString()
        let time = date.toLocaleTimeString()
        return {title:titleProp, imgSrc: imgSrc, shortDescription: shortDescription, date: dateNow, time: time}
    })
    return {news: news}
}
