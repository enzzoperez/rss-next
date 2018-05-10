import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Link from "next/link";
import Layout from "../components/layout";
import { chooseCategories } from "../utils/utils";


const Categories = (props) => {
    const {daily} = props
    const listCategories = chooseCategories(daily)
    return (
        listCategories.map(cat=>{
            return(
                <ListGroup>
                    <ListGroupItem>
                        <Link 
                            href={`/category?name=${cat.link}`}
                            as={'/category'}>
                            <a>{cat.name}</a>
                        </Link>
                    </ListGroupItem>
                    
                    <style jsx global>{`
                        a { 
                        color: black;
                        font-family: Nilland;
                        font-size: 1.5rem;
                        }
                    `}</style>
                </ListGroup>

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


