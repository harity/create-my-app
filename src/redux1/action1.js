const ADD = '加';
const REMOVE = '减';

export function counter(state=10,action){
	switch(action.type){
		case ADD:
			return state + 1
		case REMOVE:
			return state - 1
		default:
			return state
	}
}

export function addnum(){
	return {type:ADD}
}
export function removenum(){
	return {type:REMOVE}
}
export function addASYNC(){
	return dispatch=>{
		setTimeout(()=>{
			dispatch(addnum())
		}, 2000)
	}
}