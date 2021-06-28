import React from 'react';
import ReactDOM from 'react-dom';
import ConfigStore from './redux/store/ConfigStore';
import App from './App';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


const { store, persistor } = ConfigStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


