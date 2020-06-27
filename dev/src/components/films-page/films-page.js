import React from 'react';
import { withRouter } from 'react-router-dom';

import { FilmsList } from '../sw-components';
import { FilmDetails } from '../sw-components';
import Row from '../row';
import ErrorBoundry from '../error-boundry';


const FilmPage = ( { history, match } ) => {

	const { id } = match.params;


		if (id === undefined) {

				return (
					<ErrorBoundry>
						<Row 
							left={<FilmsList onItemSelected = { (id) => {history.push(id) } } />} 
							right={<p>Please, select something</p>} 
						/>
					</ErrorBoundry>
				);
		}


		else {
			return (
				<ErrorBoundry>
					<Row 
						left={<FilmsList onItemSelected = { (id) => { history.push(id) } } />} 
						right={<FilmDetails itemId = {id} />} 
					/>
				</ErrorBoundry>
			)
		}
}

export default withRouter(FilmPage);