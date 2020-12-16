import {createStore, combineReducers} from 'redux';
import infoReducer from './reducers/reducer';

const rootReducer = combineReducers({
  storeInfo: infoReducer,
});

const storeConfiguration = () => {
  return createStore(rootReducer);
};

export default storeConfiguration;
