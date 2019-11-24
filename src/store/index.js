import { createStore, combineReducers } from 'redux'

import { reducer } from './reducers/reducers'

import { changeTitle } from './actions/actions';

export const allReducers = combineReducers({
  state: reducer
});

export const store = createStore(allReducers);
let unsubscribe = store.subscribe(()=>{
  //console.log(store.getState())

});
store.dispatch(changeTitle("首页"));
unsubscribe();
