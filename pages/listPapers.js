import React, { Component } from 'react';
import Link from "next/link";
import Layout from "../components/layout";

const papers = [
	{name: 'El esquiu', url:'/journal'},
	{name: 'El ancasti', url:'/journal'},
	{name: 'Catamarca Actual', url:'/journal'},
	{name: 'Clarin', url:'/journal'}
]

const JournalComponent = (props) => {
	const {name, url} = props
	return (
		<Link href={`${url}/?name=${name}`}>
			<a>{name}</a>
		</Link>
	)
};

export default class ListPapers extends Component {
	render() {
		return (
			<Layout>
				{papers.map((item, index)=>(
					<JournalComponent key={index} name={item.name} url={item.url}/>
				))}
			</Layout>
		)
	}
};
