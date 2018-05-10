import React, { Component } from 'react';
import Link from "next/link";
import Layout from "../components/layout";
import { chooseCategories } from "../utils/utils";


const Categories = (props) => {
    const {daily} = props
    const listCategories = chooseCategories(daily)
    return (
        listCategories.map(cat=>{
            return(
                <Link 
                    href={`/category?name=${cat.link}`}
                    as={'/category'}>
                    <a>categoria: {cat.name}</a>
                </Link>
            )
        })
    )
}

export default class Journal extends Component {
    render() {
        const {name} = this.props.url.query
        
        return (
            <Layout>
                <Categories daily={name}/>
            </Layout>
        )
    }
};


