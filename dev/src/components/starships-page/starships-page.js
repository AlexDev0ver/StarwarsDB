import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipList } from '../sw-components';
import { StarshipDetails } from '../sw-components';
import Row from '../row';
import ErrorBoundry from '../error-boundry';


const StarshipsPage = ( { history, match } ) => {

	const { id } = match.params;


		if (id === undefined) {

				return (
					<ErrorBoundry>
						<Row 
							left={<StarshipList onItemSelected = { (id) => {history.push(id) } } />} 
							right={<p>Please, select something</p>} 
						/>
					</ErrorBoundry>
				);
		}


		else {
			return (
				<ErrorBoundry>
					<Row 
						left={<StarshipList onItemSelected = { (id) => { history.push(id) } } />} 
						right={<StarshipDetails itemId = {id} />} 
					/>
				</ErrorBoundry>
			)
		}
}

export default withRouter(StarshipsPage);