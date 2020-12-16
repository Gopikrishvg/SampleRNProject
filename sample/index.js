import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import storeConfiguration from './src/store/storeConfig';
import {name as appName} from './app.json';

const store = storeConfiguration();
const sample = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => sample);
