import React, { Component } from 'react';
import { extractDescription, extractImage } from "../utils/utils";


export default class ListNews extends Component {
    render() {
        const {news} = this.props
        return (
            news.items.map(({title, link, description, thumbnail, pubDate}, index)=>{
                let shortDescription = extractDescription(description)
                let date = new Date(pubDate)
                let dateNow = date.toLocaleDateString()
                let time = date.toLocaleTimeString()
                return (
                    <div key={index}>
                        <img src={thumbnail}/>
                        <div dangerouslySetInnerHTML={{__html: `Resumen: ${shortDescription}`}} />
                        <div dangerouslySetInnerHTML={{__html: `Titulo: ${title}`}} />
                        <p>Fecha: {dateNow} - Hora: {time}</p>
                        <a href={link} target='_blank' rel='noreferrer noopener nofollow'>Ver noticia</a>
                        <hr></hr>
                    </div>
                )
            })
        )
    }
};
