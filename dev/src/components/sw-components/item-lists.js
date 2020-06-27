import React from 'react';

import ItemList from '../item-list';
import { WithData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';


const swapiService = new SwapiService();

const {
	getAllPeople,
	getPersonSearch,
	getAllPlanets,
	getPlanetSearch,
	getAllStarships,
	getStarshipSearch,
	getAllFilms,
	getFilmSearch
} = swapiService;

const withChildName = (Wrapped) => {
	return (props) => {
		return (
			<Wrapped {...props}>
				{(i) => ( `${i.name}` )}
			</Wrapped>
		)
	}
}

const PersonList = WithData (withChildName(ItemList), getAllPeople, getPersonSearch)
const PlanetList = WithData (withChildName(ItemList), getAllPlanets, getPlanetSearch)
const StarshipList = WithData (withChildName(ItemList), getAllStarships, getStarshipSearch)
const FilmsList = WithData (withChildName(ItemList), getAllFilms, getFilmSearch)

export {
	PersonList,
	PlanetList,
	StarshipList,
	FilmsList
}
