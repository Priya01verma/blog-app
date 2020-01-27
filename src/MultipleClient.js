import {combineReducers, createStore} from 'redux';

const userReducer =( state ={} , actions) =>{
    switch(actions.type){
        case 'CHANGE_NAME':{
            state.name = actions.value;
            break;
        }case 'CHANGE_AGE':{
            state.age = actions.value;
            break;
        }
    }
    return state;
}
const blogReducer =(state =[], actions) =>{
    if(actions.type === 'ADD_BLOGS'){
       // console.log(actions.value)
        state.blog = [...state,...actions.value];
    }
    return state;
}

const selectedBlogReducer =(state={},actions) =>{
    if(actions.type === 'SELECTED_BLOGS'){
        // console.log(actions.value)
        state.userSelectedBlog = {...state,...actions.value};
     }
     return state;
}
const reducer = combineReducers({
    user: userReducer,
    blog: blogReducer,
    userSelectedBlog: selectedBlogReducer
})

const store = createStore(reducer)

store.subscribe(() =>{
        console.log('store changed ',store.getState())
})
store.dispatch({type:'CHANGE_NAME',value: 'Priya Verma'})
store.dispatch({type:'CHANGE_AGE',value: 23})
store.dispatch({type:'CHANGE_NAME',value: 'Dfghfh Verma'})
store.dispatch({type:'CHANGE_AGE',value: 22})
export default store;