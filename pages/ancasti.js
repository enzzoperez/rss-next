import React, { Component } from 'react';
import fetch from "isomorphic-unfetch";
import Link from "next/link";

export default class Ancasti extends Component {
    render() {
        
        return (
            <div>
                <Link href='/'><a>home</a></Link>
                <Link href='/listPapers'><a>paper</a></Link>
                ancasti
            </div>
        )
    }
}

Ancasti.getInitialProps = async()=>{
    const response = await fetch('https://sgtur.catamarca.gob.ar/api/v1/hospedaje/')
    const xml = await response.json()
    console.log('res', xml);
    
    return (xml)
}