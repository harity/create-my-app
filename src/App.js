import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addnum , removenum , addASYNC } from './redux1/action1';
import {Link} from 'react-router-dom'

@connect(
	state=>({num:state.counter}),
	{ addnum , removenum , addASYNC }
)
export default class App extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.num}</h1>
				<button onClick={this.props.addnum}>加</button>
				<button onClick={this.props.removenum}>减</button>
				<button onClick={this.props.addASYNC}>过一会在加</button>
				<Link to='/login' >tiaoz</Link>
			</div>
		)
	}
}