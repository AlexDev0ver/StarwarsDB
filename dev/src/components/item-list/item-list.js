import React from 'react';
import PropTypes from 'prop-types';

import './item-list.css';

const ItemList = (props) => {

	const { data, onItemSelected, children: renderLabel, prevPage, numPage, nextPage, iconForward, iconBack } = props;

	const items = data.map((item) => {

		const { id } = item;
		const label = renderLabel(item);

		return (
			<li className = 'list-group-item'
					key = {id}
					onClick = { () => { onItemSelected(id) } }>
				{label}
			</li>	
		)
	});

	return (
		<React.Fragment>
			<ul className = 'item-list list-group'>
				{items}
			</ul>
			<div className = 'pages'>
				<button
					className = 'prevItems'
					onClick = { prevPage }>
					{iconBack}
				</button>	
				<div className = 'numPage'>{numPage}</div>			
				<button
					className = 'nextItems'
					onClick = { nextPage } >
					{iconForward}
				</button>					
			</div>
		</React.Fragment>
	)
};

ItemList.defaultProps = {
	onItemSelected : () => {}
}

ItemList.propTypes = {
	data : PropTypes.arrayOf(PropTypes.object).isRequired,
	onItemSelected : PropTypes.func,
	children : PropTypes.func.isRequired,
	prevPage : PropTypes.func.isRequired,
	numPage : PropTypes.number.isRequired,
	nextPage : PropTypes.func.isRequired
};



export default ItemList;