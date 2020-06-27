import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import PlanetsPage from '../planets-page';
import StarshipsPage from '../starships-page';
import FilmsPage from '../films-page';
import { SwapiServiceProvider } from '../swapi-services-context';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {


	swapiService = new SwapiService();

	render () {

		return (

			<div className = 'app container'>

				<ErrorBoundry>

					<SwapiServiceProvider value = {this.swapiService}>
						<Router>

							<Header />
							<RandomPlanet />

							<Switch>
								<Route path = '/' render = {() => <h2>Welcome to StarWars DataBase</h2> } exact />
								<Route path = '/people/:id?' component = {PeoplePage} />
								<Route path = '/planets/:id?' component = {PlanetsPage} />
								<Route path = '/starships/:id?' component = {StarshipsPage} />
								<Route path = '/films/:id?' component = {FilmsPage} />
								<Route render = {() => <h2>Page not found</h2>} />							
							</Switch>

						</Router>
					</SwapiServiceProvider>

				</ErrorBoundry>	
						
			</div>
		)
	}
}
