import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardDeck,
        CardSubtitle, CardBody,  Row, Col, ListGroup, ListGroupItem, CardColumns } from 'reactstrap';
import fetch from "isomorphic-unfetch";
import Layout from '../components/layout';
import { convertToC } from "../utils/utils";

const WeatherList = (props) => {
    const {currentWeather, list} = props
    return (
        list.map((item, index)=>{
            let d = new Date(item.dt_txt)
            let day = d.toLocaleDateString()
            const time = d.toLocaleTimeString()
            return (
                <Card>
                    <CardBody>
                        <CardTitle>
                            Dia: {day}
                        </CardTitle>
                        <CardSubtitle>
                            <p>Hora: {time} hs</p>
                        </CardSubtitle>
                        <CardText>
                            <p>Maxima: {item.main.temp_max} ºC</p>
                            <p>Mínima: {item.main.temp_min} ºC</p>
                        </CardText>
                    </CardBody>
                </Card>
            )
        })
    )
}

export default class Weather extends Component {
    render() {
        const {currentWeather, listWeather} = this.props
        return (
            <Layout>
                <Row class="mx-auto mt-5">
                    <Col lg={{ size: 10, order: 2, offset: 1 }} xl={{ size: 10, order: 2, offset: 1 }}>
                        <Card inverse>
                            <CardImg width="100%" src="static/weather-background.jpg" width="30%"/><CardImgOverlay>
                            <Row>
                                <Col lg={{ size: 3, order: 2, offset: 5 }} xl={{ size: 3, order: 2, offset: 5 }}>
                                    <CardTitle class="mx-auto tituloclima">Temperatura actual</CardTitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{ size: 6, order: 2, offset: 4 }} xl={{ size: 4, order: 2, offset: 4 }}>
                                    <CardText>
                                        <p className="tituloclima">
                                            {currentWeather} ºC
                                        </p>
                                    </CardText>
                                </Col>
                            </Row>
                            </CardImgOverlay>
                        </Card>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ size: 10, order: 2, offset: 1 }} xl={{ size: 10, order: 2, offset: 1 }}  >
                        <CardColumns>
                            <WeatherList currentWeather={currentWeather} list={listWeather}/>
                        </CardColumns>
                    </Col>
                </Row>
                <style jsx>{`
                    .tituloclima {
                        font-size: 90px; 
                    }
                    .card {
                        background-color: blue,
                    }
                `}</style>
            </Layout>
        )
    }
};

Weather.getInitialProps = async () => {
    const cityId = '3837702'
    const userId ='9cb235761e24dfccc8112e7c3419efc1'
    const urlExtend = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${userId}&units=metric`
    const urlCurrent = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${userId}&units=metric`

    let response = await fetch(urlExtend)
    const jsonExtend = await response.json()
    response = await fetch(urlCurrent)
    const jsonCurrent = await response.json()
    
    const currentWeather = jsonCurrent.main.temp
    const listWeather = jsonExtend.list

    return {currentWeather, listWeather}
}

