import {createStore, applyMiddleware, compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import allreducers from '../reducer/index'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
  }
   
const persistedReducer = persistReducer(persistConfig, allreducers)

export default () => {
    const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
    const persistor = persistStore(store);
  
  
    return { store, persistor };
  };