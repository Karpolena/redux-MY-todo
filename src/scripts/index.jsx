import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './containers/App';
// import './../scss/main.scss';
// import reducer from './reducers';

const initialState = {
    name: 'JavaScript',
    id: 3
};

function todo(state = initialState, action){
    if (action.type === 'ADD_TODO') {
        return [
            ...state, action.payload 
        ];
    }
    return state;
}


const store = createStore(todo);

 store.subscribe(() => {
    console.log(store.getState());
 })
 store.dispatch({ type: 'ADD_TODO',
                  payload: {
                      name: 'react' ,
                      id: 1
                  } 
                });
                store.dispatch({ type: 'ADD_TODO',
                  payload: {
                      name: 'redux' ,
                      id: 2
                  } 
                });

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
