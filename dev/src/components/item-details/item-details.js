import React, { Component } from 'react';

import Spinner from '../spinner';
import ItemView from '../item-view';

import './item-details.css';

const Record = ({ item, field, label }) => {
	return (
	    <li className="list-group-item">
	      <span className="term">{label}</span>
	      <span>{item[field]}</span>
	    </li>
  	);
};

export {
	Record
}

export default class ItemDetails extends Component {

	state = {
		item: null,
		image: null,
		loading : true
	}


	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.setState({loading : true})
			this.updatePerson();
		}
	}

	updatePerson () {
		const { itemId, getData, getImageUrl } = this.props;

		if (!itemId) {
			return;
		}

		getData( itemId )
			.then((item) => {
				this.setState({
					item,
					image : getImageUrl(item),
					loading : false
				})
			})
	}

	render() {

		const { item, image, loading } = this.state;

		const hasData = !loading;
		const spinner = loading ? <Spinner /> : null;
		const content = 
			hasData ? <ItemView item = { item } 
								image = { image }>

								{this.props.children}

					  </ItemView> : null;

		return (
			<div className = 'person-details card'>
				{spinner}
				{content}
			</div>
		)
	};
};

