import React,{Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { InputItem, WhiteSpace } from 'antd-mobile'
import './index.css';

@withRouter//withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入
@connect(
	state=>({num:state.counter})
)
export default class Login extends Component{
	handleclick(){
		this.props.history.push('/')
	}
	componentDidMount(){
		axios.get('/data')
	  .then(function(response){
	    console.log(response);
	  })
	}
	render(){
		return(
			<div>
				<h1>{this.props.num}</h1>
				<WhiteSpace />
				<InputItem clear autoFocus >用户名</InputItem>
		        <WhiteSpace />
				<InputItem clear type="password" >密码</InputItem>
				<span onClick={this.handleclick.bind(this)}>xxx</span>
      		</div>
		)
	}
}