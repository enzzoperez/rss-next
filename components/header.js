import React, { Component } from 'react';
import Link from "next/link";

import { ListPapers } from "../pages/listPapers";

const sections = [
	{section: 'Ultimas noticias', url:'/'},
	{section: 'Lista de diarios', url:'/listPapers'},
	{section: 'Categorias', url:'/aboutPage'},
	{section: 'Clima', url:'/aboutPage'},
	{section: 'Next Innovation Lab', url:'/aboutPage'}
]

export default class Header extends Component {
  render() {
		const {showBack} = this.props
    return (
		<div>
			<nav>
        <Link href="/">
					<a>{ showBack && <span className="back">&lt;</span> }
						<span className="title">
							Next News
						</span>
					</a>
				</Link>
      </nav>
			
			<ul>
				{sections.map((item, index)=> {
					return(
						<li key={index}>
							<Link href={item.url}>
								<a>{item.section}</a>
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
    )
  }
};
