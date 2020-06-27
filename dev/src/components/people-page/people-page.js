import React from 'react';
import { withRouter } from 'react-router-dom';

import { PersonList } from '../sw-components';
import { PersonDetails } from '../sw-components';
import Row from '../row';
import ErrorBoundry from '../error-boundry';


const PeoplePage = ( { history, match } ) => {

	const { id } = match.params;


		if (id === undefined) {

				return (
					<ErrorBoundry>
						<Row 
							left={<PersonList onItemSelected = { (id) => {history.push(id) } } />} 
							right={<p>Please, select something</p>} 
						/>
					</ErrorBoundry>
				);
		}


		else {
			return (
				<ErrorBoundry>
					<Row 
						left={<PersonList onItemSelected = { (id) => { history.push(id) } } />} 
						right={<PersonDetails itemId = {id} />} 
					/>
				</ErrorBoundry>
			)
		}
}

export default withRouter(PeoplePage);