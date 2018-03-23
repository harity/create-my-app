import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import Router from './router/router';
import reducers from './redux1/reducer'

const store = createStore(reducers,applyMiddleware(thunk));

ReactDom.render(
	(<Provider store={store}>
		<Router />
	</Provider>), 
	document.getElementById('root')
)
