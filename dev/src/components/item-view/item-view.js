import React, { Component } from 'react';


export default class ItemView extends Component {

	render () {

		const { item, image } = this.props;
		const { name } = item;
		
		return (

			<React.Fragment>
				<img className = 'person-image'
					src= {image}
					alt = '' />
				<div className = 'card-body'>
					<h4>{name}</h4>
					<ul className = 'list-group list-group-flush'>
						{
							React.Children.map(this.props.children, (child) => {
								return React.cloneElement(child, {item});
							})
						}
					</ul>	
				</div>
			</React.Fragment>
		)
	}
}