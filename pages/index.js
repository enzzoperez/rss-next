import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'
const parseString = require('xml2js').parseString;
import Layout from "../components/layout";
import ListNews from "../components/listNews";

export default class Index extends Component {
    renderList () {
        const {list} = this.props
        
        return(
            list.rss.channel[0].item.map(({title, link, description, pubDate}, index)=>{
                let imgSrc
                let shortDescription = null
                let date = new Date(pubDate); 
                parseString(description[0], (err, result) => {
                    if(result){
                        shortDescription = description[0].substring(description[0].indexOf('div>') + 4)
                        imgSrc = result.div.img[0].$.src
                    }
                    else{ 
                        imgSrc = 'http://www.industrialparts.com.sv/wp-content/uploads/2017/02/Error_l-531.jpg'
                    }
                });
                return (
                    <div key={index}>
                        <img src={imgSrc}/>
                        {shortDescription? 
                        <div dangerouslySetInnerHTML={{__html: `Resumen: ${shortDescription}`}} />: 
                        <div>Resumen no disponible</div>}  
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
