import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
export const store = createStoreWithMiddleware(reducers)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
