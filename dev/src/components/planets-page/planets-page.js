import React from 'react';
import { withRouter } from 'react-router-dom';

import { PlanetList } from '../sw-components';
import { PlanetDetails } from '../sw-components';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './planets-page.css';


const PlanetsPage = ( { history, match } ) => {

	const { id } = match.params;


		if (id === undefined) {

				return (
					<ErrorBoundry>
						<Row 
							left={<PlanetList onItemSelected = { (id) => {history.push(id) } } />} 
							right={<p>Please, select something</p>} 
						/>
					</ErrorBoundry>
				);
		}


		else {
			return (
				<ErrorBoundry>
					<Row 
						left={<PlanetList onItemSelected = { (id) => { history.push(id) } } />} 
						right={<PlanetDetails itemId = {id} />} 
					/>
				</ErrorBoundry>
			)
		}
}

export default withRouter(PlanetsPage);