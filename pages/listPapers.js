import React, { Component } from 'react';
import Link from "next/link";
import Layout from "../components/layout";

const papers = [
	{nombre: 'El esquiu', url:'/ancasti'},
	{nombre: 'El ancasti', url:'/ancasti'},
	{nombre: 'Catamarca Actual', url:'/ancasti'},
	{nombre: 'Clarin', url:'/ancasti'}
]

export default class ListPapers extends Component {
	render() {
		return (
			<Layout>
				{papers.map((item, index)=>(
					<Link href={item.url}>
						<a key={index}>{item.nombre}</a>
					</Link>
				))}
			</Layout>
		)
	}
};
