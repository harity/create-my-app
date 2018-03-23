// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import { counter } from './action1'

export default combineReducers({counter});

