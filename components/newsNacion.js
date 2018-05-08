import React, { Component } from 'react';
import { extractDescription, extractImage } from "../utils/utils";


export default class NewsComponent extends Component {
    render() {
        const {news} = this.props
        return (
            news.articles.map(({title, url, description, urlToImage, publishedAt}, index)=>{
                let shortDescription = extractDescription(description)
                let date = new Date(publishedAt)
                let dateNow = date.toLocaleDateString()
                let time = date.toLocaleTimeString()
                return (
                    <div className="newsEsquiu" key={index}>
                        <div className="itemNews">
                            <img src={urlToImage}/>
                            <h2><a href={ url }>{title}</a></h2>
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
};
