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
            <div className="listNews">
                <div className="itemNews" key="">
                    <h2><a href={ result.url }>{ result.title }</a></h2>
                    <div className="detailsNews">
                        <strong>{ result.fecha_publicacion }</strong>
                        <Link href={`/noticia?id=${results.id}`} prefetch>
                            <a></a>
                        </Link>
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
    }
};
