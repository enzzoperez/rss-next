import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'
import html from 'react-inner-html';
const parseString = require('xml2js').parseString;
import Layout from "../components/layout";
import ListNews from "../components/listNews";

export default class Index extends Component {
    // componentDidMount(){
    //     this.renderList()
    // }
    renderList () {
        const {list} = this.props
        console.log('mira', list.rss.channel[0].item);
        return(
            list.rss.channel[0].item.map(({title, link, description}, index)=>{
                return (
                    <div key={index}>
                        {<div dangerouslySetInnerHTML={{__html: description}} />}
                        <div dangerouslySetInnerHTML={{__html: `Titulo: ${title}`}} />
                        <p>link: {link}</p>
                        <hr></hr>
                    </div>
                )
            })
        )
    }

    render() {        
        return (
            <Layout>
                {this.renderList()}
            </Layout>
        )
    }
};

Index.getInitialProps = async ({req}) => {
    const response = await fetch('http://www.elesquiu.com/rss/un_foto.html')
    const xml = await response.text()
    let list
    parseString(xml, (err, result) => {
        list = result
    });
    return {list: list}
}
