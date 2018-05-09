import React, { Component } from 'react';
import { extractDescription, extractImage } from "../utils/utils";

import { Badge, Card, CardBody, Button, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


export default class NewsCatActual extends Component {
    render() {
        const {news} = this.props
        return (
            news.items.map(({title, link, description, thumbnail, pubDate}, index)=>{
                let shortDescription = extractDescription(description)
                let date = new Date(pubDate)
                let dateNow = date.toLocaleDateString()
                let time = date.toLocaleTimeString()
                return (
                    <div className="newsEsquiu" key={index}>
                        <Card className="itemNews mb-3" href={link}>
                            <CardImg width="10%" src={thumbnail}/>
                            <CardBody>
                                <Badge className="mb-3" color="info">Catamarca Actual</Badge>
                                <CardTitle><h2><a href={ link }>{ title }</a></h2></CardTitle>
                                <CardText><div dangerouslySetInnerHTML={{__html: `${shortDescription}`}}/></CardText>
                                <CardText>
                                    <small className="text-muted"><div className="detailsNews">
                                    <strong>{ dateNow } - {time}</strong>
                                </div></small>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                )}
            )
        )
    }
};
