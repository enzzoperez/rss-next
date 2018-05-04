import React, { Component } from 'react';

export default class ListNews extends Component {
    state = {
        list: [],
        loading: true,
        error: false
    }

    fetchRss = async ()=>{
        const response = fetch('http://www.elesquiu.com/rss/un_foto.html')
        if (!response.ok) { throw Error(response.statusText) }
        console.log('yay', response);
        parseString(response, (err, result) => {
            console.logir('xml',result);
        });
    }

    render() {
        return (
        <div>
            List news
        </div>
        )
    }
};
