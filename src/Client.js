import {createStore} from 'redux';

const reducer = function(state,action){
    if(action.type ==='INC'){
        return state + action.value;
    }
    if(action.type ==='DEC'){
        return state - action.value;
    }
    return state;
}
const store = createStore(reducer,0)

store.subscribe(() =>{
        console.log('store changed ',store.getState())
})
store.dispatch({type:'INC',value: 1})
store.dispatch({type:'INC',value: 11})
store.dispatch({type:'INC',value: 56})
store.dispatch({type:'INC',value: 22})
store.dispatch({type:'DEC',value: 55})
export default store;