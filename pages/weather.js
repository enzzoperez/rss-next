import React, { Component } from 'react'
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
                <div>
                    <p>Dia: {day}</p>
                    <p>Hora: {time}</p>
                    <p>Maxima: {item.main.temp_max}</p>
                    <p>Mínima: {item.main.temp_min}</p>
                    <hr></hr>
                </div>
            )
        })
    )
}

export default class Weather extends Component {
    render() {
        const {currentWeather, listWeather} = this.props
        return (
            <Layout>
                <div>
                    Temperatura actual: <b>{currentWeather}</b>
                    <hr></hr>
                </div>
                <WeatherList currentWeather={currentWeather} list={listWeather}/>
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

