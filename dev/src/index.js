import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />,
	document.getElementById('root'));

// fetch( 'https://swapi.co/api/planet' ) - первоначальный запрос, получаем 200(ОК)
// 	.then((res) => { - на ответ 200(ОК) запрашиваем тело объекта json
// 		return res.json();
// 	}).then((body) => { - обрабатываем тело json
// 		console.log(body);
// 	})