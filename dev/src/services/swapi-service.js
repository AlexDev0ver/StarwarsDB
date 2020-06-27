export default class SwapiService {

	_apiBase = 'https://swapi.dev/api';
	_imageBase = 'https://starwars-visualguide.com/assets/img';

	getResource = async(url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` +
			`, received ${res.status}`)
		}

		return await res.json();
	};

	getAllPeople = async (page) => {
		 const res =  await this.getResource(`/people/?page=${page}`);
		 return res.results.map(this._transformPerson);
	}

	getPerson = async (id) => {
		const person = await this.getResource(`/people/${id}/`);
		return this._transformPerson(person);
	}

	getPersonSearch = async (value) => {
		const res = await this.getResource(`/people/?search=${value}`);
		return res.results.map(this._transformPerson);
	}

	getAllPlanets = async (page) => {
		 const res =  await this.getResource( `/planets/?page=${page}` );
		 return res.results.map(this._transformPlanet);
	}

	getPlanet = async (id) => {
		const planet = await this.getResource(`/planets/${id}/`);
		return this._transformPlanet(planet);
	}

	getPlanetSearch = async (value) => {
		 const res =  await this.getResource( `/planets/?search=${value}` );
		 return res.results.map(this._transformPlanet);
	}

	getAllStarships = async (page) => {
		 const res =  await this.getResource(`/starships/?page=${page}`);
		 return res.results.map(this._transformStarship);
	}

	getStarship = async (id) => {
		const starship = await this.getResource(`/starships/${id}/`);
		return this._transformStarship(starship);
	}

	getStarshipSearch = async (value) => {
		 const res =  await this.getResource(`/starships/?search=${value}`);
		 return res.results.map(this._transformStarship);
	}

	getAllFilms = async () => {
		const res = await this.getResource(`/films/`);
		return res.results.map(this._transformFilm);
	}

	getFilm = async (id) => {
		const film = await this.getResource(`/films/${id}`);
		return this._transformFilm(film);
	}

	getFilmSearch = () => { return 0 }

	getPersonImage = ({ id }) => {
		return `${this._imageBase}/characters/${id}.jpg`
	}

	getStarshipImage = ({ id }) => {
		return `${this._imageBase}/starships/${id}.jpg`
	}

	getPlanetImage = ({ id }) => {
		return `${this._imageBase}/planets/${id}.jpg`
	}

	getFilmImage = ({ id }) => {
		return `${this._imageBase}/films/${id}.jpg`
	}

	_extractId = (item) => {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	}

	_transformPerson = (person) => {
		return {
			id : this._extractId(person),
			name : person.name,
			gender : person.gender,
			hairColor : person.hair_color,
			birthYear : person.birth_year,
			eyeColor : person.eye_color
		}
	};

	_transformPlanet = (planet) => {
		return {
			id : this._extractId(planet),
			name : planet.name,
			population : planet.population,
			rotationPeriod : planet.rotation_period,
			diameter : planet.diameter,
			gravity : planet.gravity,
			climate : planet.climate
		}
	};

	_transformStarship = (starship) => {
		return {
			id : this._extractId(starship),
			name : starship.name,
			model: starship.model,
			manufacturer : starship.manufacturer,
			costInCredits : starship.cost_in_credits,
			length : starship.length,
			crew: starship.crew,
			passengers : starship.passengers,
			cargoCapacity: starship.cargo_capacity
		}
	};

	_transformFilm = (film) => {
		return {
			id : this._extractId(film),
			name : film.title,
			opening : film.opening_crawl,
			director : film.director,
			producer : film.producer,
			release : film.release_date
		}
	};

}
