import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { SwapiServiceConsumer } from '../swapi-services-context';


const PersonDetails = ( {itemId} ) => {
	return (
		<SwapiServiceConsumer>
			{
				({ getPerson, getPersonImage }) => {
					return (
						<ItemDetails itemId      = {itemId}
									 getData     = {getPerson}
									 getImageUrl = {getPersonImage} >	

									<Record field='gender'    label='Gender :'/>
									<Record field='birthYear' label='Birth Year :'/>
									<Record field='eyeColor'  label='Eye Color :'/>
									<Record field='hairColor' label='Hair Color :'/>
						</ItemDetails>
					)
				}
			}
		</SwapiServiceConsumer>
	)
}


const PlanetDetails = ( {itemId} ) => {
	return (
		<SwapiServiceConsumer>
			{
				({ getPlanet, getPlanetImage }) => {
					return (
						<ItemDetails itemId      = {itemId}
									 getData     = {getPlanet}
									 getImageUrl = {getPlanetImage} >	

									<Record field='population'    label='Population :'/>
									<Record field='rotationPeriod' label='Rotation Period:'/>
									<Record field='diameter'  label='Diameter :'/>
									<Record field='gravity' label='Gravity :'/>
									<Record field='climate' label='Climate :'/>

						</ItemDetails>
					)
				}
			}
		</SwapiServiceConsumer>
	)
}


const StarshipDetails = ( {itemId} ) => {
	return (
		<SwapiServiceConsumer>
			{
				({ getStarship, getStarshipImage }) => {
					return (
						<ItemDetails itemId      = {itemId}
									 getData     = {getStarship}
									 getImageUrl = {getStarshipImage} >	

									<Record field='model'    label='Model :'/>
									<Record field='manufacturer' label='Manufacturer :'/>
									<Record field='costInCredits'  label='Cost In Credits :'/>
									<Record field='length' label='Length :'/>
									<Record field='crew' label='Crew :'/>
									<Record field='passengers' label='Passengers :'/>
									<Record field='cargoCapacity' label='Cargo Capacity :'/>

						</ItemDetails>
					)
				}
			}
		</SwapiServiceConsumer>
	)

}

const FilmDetails = ( {itemId} ) => {
	return (
		<SwapiServiceConsumer>
			{
				({ getFilm, getFilmImage }) => {
					return (
						<ItemDetails itemId      = {itemId}
									 getData     = {getFilm}
									 getImageUrl = {getFilmImage} >	

									<Record field='opening' />									
									<Record field='release' label='Release Date :'/>
									<Record field='director' label='Director :'/>
									<Record field='producer' label='Producer :'/>
						</ItemDetails>
					)
				}
			}
		</SwapiServiceConsumer>
	)
}

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails,
	FilmDetails
}
