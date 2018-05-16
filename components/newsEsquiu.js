import React, { Component } from 'react';
import { extractDescription, extractImage } from "../utils/utils";

import { Badge, Card, CardBody, Col, Button, CardTitle, CardText, CardImg, CardImgOverlay, Row } from 'reactstrap';


export default class NewsEsquiu extends Component {
    render() {
        const {news} = this.props
        return (
            news.items.map(({title, link, description, thumbnail, pubDate}, index)=>{
                let shortDescription = extractDescription(description)
                let date = new Date(pubDate)
                let dateNow = date.toLocaleDateString()
                let time = date.toLocaleTimeString()
                return (
                    <Row className="newsEsquiu" key={index}>
                        <Col lg="3" xl="3"></Col>
                        <Col lg="6" xl="6">
                            <Card className="itemNews mb-3" href={link}>
                                <CardImg onError={this.addDefaultSrc} style={{ width: "100%" }} src={thumbnail}/>
                                <CardBody>
                                    <Badge className="mb-3" color="warning">
                                        El Esquiu
                                    </Badge>
                                    <CardTitle>
                                        <h2>
                                            <a href={ link }>{ title }</a>
                                        </h2>
                                    </CardTitle>
                                    <CardText><div dangerouslySetInnerHTML={{__html: `${shortDescription}`}}/></CardText>
                                    <CardText>
                                        <small className="text-muted">
                                            <div className="detailsNews">
                                                { dateNow } - {time}
                                            </div>
                                        </small>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <style jsx>{`
                            .newsEsquiu {
                                background-color: #ffffff; 
                            }
                            .imagen-card {
                                width: 70%;
                                border-radius: calc(.25rem - 1px);
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
                    </Row>
                )  
            })
        )
        
    }
    addDefaultSrc(ev){
        ev.target.src = 'static/img-default-elesquiu.png'
    }
};
