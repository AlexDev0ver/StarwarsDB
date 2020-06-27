import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';
import { Route } from 'react-router-dom'


const WithData = (View, getData, getTypeOfSearch) => {

	return class extends Component {

		state = {
			data : null,
			loading : true,
			items : 10,
			searchValue : null
		};

		numPage = 1;


		iconForward = '>';
		iconBack = '<';

		componentDidMount () {
			this.updateList();
		};


		updateList () {
			getData(this.numPage)
				.then((data) => {
					this.setState({
						data,
						loading : false,
						items : data.length
					})
				})
		}


		nextPage () {
			if ( this.state.items === 10) {
				return (
					this.numPage++,
					this.setState({
						loading : true,
						visible : true
					}),
					this.updateList()
				)

			} 

			else {
				this.setState({
					visible : false
				})
			}
		};

		prevPage () {
			if ( this.numPage !== 1) {
				return (
					this.numPage--,
					this.setState({
						loading : true,
						visible : true
					}),
					this.updateList()
				)
			}

			else {
				this.setState({
					visible : false
				})
			}
		}

		searchItem (getTypeOfSearch, value) { 
			getTypeOfSearch(value)
				.then((data) => {
					this.setState({
						data,
						loading : false,
						items : data.length,
						searchValue : value
					})
				})
		}


		render () {

			const { data, loading } = this.state;

			if (!data || loading) {
				return <Spinner />
			}

			if (<Route path = '/films/' />) {	

				return (
					<ErrorBoundry>
						<View {...this.props} data = { data } />
					</ErrorBoundry>
				)				
			}

			return (
				
				<ErrorBoundry>

					<View {...this.props} data = { data } 
										  iconForward = {this.iconForward}
										  iconBack = {this.iconBack}
										  prevPage = {() => this.prevPage()} 
										  nextPage = {() => this.nextPage()} 
										  numPage = {this.numPage}  />
					<input
						className = 'searchPanel'
						placeholder = {'Type to search here'}
						onChange = { (e) => { this.searchItem(getTypeOfSearch, e.target.value )} }
					/>

				</ErrorBoundry>
			)
		}
	};
}

export default WithData;
