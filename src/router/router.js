import React from 'react';
import {
	BrowserRouter, 
	Route, 
	Redirect,
	Switch
	} from 'react-router-dom';

import App from '../App';
import Login from '../login/index'

export default class Router extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={App} ></Route>
					<Route path='/login' component={Login} ></Route>
					<Redirect to='/' />{/*路径不匹配上面的配置的任何路劲都会跳转到指定页面，exact 完全匹配*/}
				</Switch>
			</BrowserRouter>
		)
	}
}

