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
                                <Badge className="mb-3" color="primary">La Nación</Badge>
                                <CardTitle><a href={ url }>{ title }</a></CardTitle>
                                <div dangerouslySetInnerHTML={{__html: `<CardText>${shortDescription}</CardText>`}}/>
                                <CardText>
                                    <small className="text-muted">
                                        <strong>{ dateNow } - {time}</strong></small>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                )}
            )
        )
    }
};
