import React, { Component } from 'react';
import { extractDescription, extractImage } from "../utils/utils";

export default class NewsClarin extends Component {
    render() {
        const {news} = this.props
        return (
            news.items.map(({title, link, description, enclosure, pubDate}, index)=>{
                let shortDescription = extractDescription(description)
                let date = new Date(pubDate)
                let dateNow = date.toLocaleDateString()
                let time = date.toLocaleTimeString()
                return (
                    <div className="newsEsquiu" key={index}>
                        <div className="itemNews">
                            <img src={enclosure.link}/>
                            <h2><a href={ link }>{ title }</a></h2>
                            <div dangerouslySetInnerHTML={{__html: `${shortDescription}`}}/>
                            <div className="detailsNews">
                                <strong>{ dateNow } - {time}</strong>
                            </div>
                        </div>
                    </div>
                )}
            )
        )
    }
}