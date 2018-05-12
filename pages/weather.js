import React, { Component } from 'react'
import fetch from "isomorphic-unfetch";
import Layout from '../components/layout';
import { convertToC } from "../utils/utils";

const WeatherList = (props) => {
    const {list} = props
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
        const {listWeather} = this.props
        return (
            <Layout>
                <WeatherList list={listWeather}/>
            </Layout>
        )
    }
};

Weather.getInitialProps = async () => {
    const cityId = '3837702'
    const userId ='9cb235761e24dfccc8112e7c3419efc1'
    const url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${userId}&units=metric`
    const response = await fetch(url)
    const json = await response.json()
    
    const listWeather = json.list

    return {listWeather}
}

