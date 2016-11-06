import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import Home from './containers/home/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

//needed according to material-ui document
//http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin();


const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Home />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
