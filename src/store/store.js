import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";

import rootReducer from './rootReducer';
function load(){
    let state;
    try{
        state = localStorage.getItem("state");
        if(typeof state === String)
        {
            state = JSON.parse(state);//convert to like an object
        }
    }catch(error){
        console.error(`${error}`);
    }
    return state || undefined;
};

let store = createStore(rootReducer,load(),compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

function save(){
    try{
        localStorage.setItem("state",JSON.stringify(store.getState()));
    }catch(error){
        console.log(`${error}`);
    }
};
store.subscribe(() => save());
export default store;