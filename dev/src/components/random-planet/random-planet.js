import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {

	swapiService = new SwapiService();

	state = {
		planet : {},
		loading: true,
		error : false
	};

	static defaultProps = {
		updateInterval : 30*1000 // N * 1s
	};

	static propTypes = {
		updateInterval : PropTypes.number
	}

	componentDidMount () {
		const { updateInterval } = this.props;
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, updateInterval);
	};

	componentWillUnmount () {
		this.interval = clearInterval();
	}

	onPlanetLoaded = (planet) => {
		this.setState({ 
			planet,
			loading : false 
		});
	};

	onError = (err) => {
		this.setState({
			error : true,
			loading : false
		})
	};

	updatePlanet = () => {
		const id = Math.floor( Math.random() * 21 )+ 3;
		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError)
	};

	render () {

		const { planet, loading, error } = this.state;

		const hasData = !(loading || error);

		const errorMassage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = hasData ? <PlanetView planet = { planet } /> : null

		return (
			<div className = 'random-planet jumbotron rounded'>
				{errorMassage}
				{spinner}
				{content}
			</div>
		)
	};
};


const PlanetView = ({ planet }) => {
			
	const { id, name, population, rotationPeriod, diameter } = planet;

	return (
		<React.Fragment>
			<img className = 'planet-image' 
				src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
				alt = 'sorry, we have bad signal from deep space'/>
			<div>
				<h4>{name}</h4>
				<ul className = 'list-group list-group-flush'>
					<li className = 'list-group-item'>
						<span className = 'term'>Population :</span>
						<span>{population}</span>
					</li>
					<li className = 'list-group-item'>
						<span className = 'term'>Rotation Period :</span>
						<span>{rotationPeriod}</span>
					</li>
					<li className = 'list-group-item'>
						<span className = 'term'>Diameter :</span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
		</React.Fragment>
	)
} 
