import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'
const parseString = require('xml2js').parseString;
import { extractDescription, extractImage } from "../utils/utils";
import Layout from "../components/layout";
import ListNews from "../components/listNews";

export default class Index extends Component {
    renderList () {
        const {list} = this.props
        
        return(
            list.rss.channel[0].item.map(({title, link, description, pubDate}, index)=>{
                let imgSrc = extractImage(description[0])
                let shortDescription = extractDescription(description[0])
                let date = new Date(pubDate); 
                return (
                    <div key={index}>
                        <img src={imgSrc}/>
                        <div dangerouslySetInnerHTML={{__html: `Resumen: ${shortDescription}`}} />
                        <div dangerouslySetInnerHTML={{__html: `Titulo: ${title}`}} />
                        <p>Fecha: {date.toLocaleDateString()} - Hora: {date.toLocaleTimeString()}</p>
                        <hr></hr>
                    </div>
                )
            })
        )
    }

    render() {        
        return (
            <Layout>
                {this.renderList()}
            </Layout>
        )
    }
};

Index.getInitialProps = async ({req}) => {
    const response = await fetch('http://www.elesquiu.com/rss/un_foto.html')
    const xml = await response.text()
    let list
    parseString(xml, (err, result) => {
        list = result
    });
    return {list: list}
}
