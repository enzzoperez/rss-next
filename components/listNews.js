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
                    <div className="listNews" key={index}>
                        <div className="itemNews">
                            <h2><a href={ link }>{ title }</a></h2>
                            <div className="detailsNews">
                                <strong>{ dateNow } - {time}</strong>
                            </div>
                        </div>

                        <style jsx>{`
                            .listNews {
                            padding: 0 1em;
                            }
                            .itemNews {
                            padding: 1em 0;
                            border-bottom: 1px solid rgba(0,0,0,0.1);
                            }
                            h2 {
                            font-size: 1.1em;
                            font-family: 'Roboto';
                            font-weight: 400;
                            margin: 0;
                            margin-bottom: 0.5em;
                            }
                            h2 a {
                            color: #333;
                            text-decoration: none;
                            }
                            h2 a:hover {
                            text-decoration: underline;
                            }
                            .detailsNews {
                            font-size: 0.9em;
                            font-weight: bold;
                            }
                            .detailsNews strong {
                            margin-right: 1em;
                            }
                            .detailsNews a {
                            color: #ff6600;
                            text-decoration: none;
                            }
                        `}</style>
                    </div>
                )
            })
        )
    }
};
