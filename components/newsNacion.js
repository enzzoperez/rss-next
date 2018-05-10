import React, { Component } from 'react';
import { extractDescription, extractImage } from "../utils/utils";

import { Badge, Card, CardBody, Button, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


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
                    <div className="newsNacion" key={index}>
                        <Card className="itemNews mb-3" href={url}>
                            <CardImg width="10%" src={urlToImage}/>
                            <CardBody>
                                <Badge className="mb-3" color="primary">
                                    La Nación
                                </Badge>
                                <CardTitle>
                                    <h2>
                                        <a href={ url }>{ title }</a>
                                    </h2>
                                </CardTitle>
                                <div dangerouslySetInnerHTML={{__html: `<CardText>${shortDescription}</CardText>`}}/>
                                <CardText>
<<<<<<< Updated upstream
                                    <small className="text-muted">
                                        <div className="detailsNews">
                                            { dateNow } - {time}
                                        </div>
                                    </small>
=======
                                    <small className="text-muted"><div className="detailsNews">
                                    { dateNow } - {time}
                                </div></small>
>>>>>>> Stashed changes
                                </CardText>
                            </CardBody>
                        </Card>

<<<<<<< Updated upstream
                       <style jsx>{`
=======
                        <style jsx>{`
>>>>>>> Stashed changes
                            h2 {
                                font-size: 1.1em;
                                font-family: 'Roboto';
                                font-weight: 400;
                                margin: 0;
                                margin-bottom: 0.5em;
                            }
                            h2 a {
                                color: #333;
                                font-family: 'Roboto';
                                font-size: 2rem;
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
                )}
            )
        )
    }
};
