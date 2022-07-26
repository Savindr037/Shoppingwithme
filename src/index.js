import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

////////
import store from './store';
import { Provider } from "react-redux";

import { store_persistor } from './store';
import { PersistGate} from 'redux-persist/integration/react';

// console.warn("store data", store)
///////


ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={store_persistor}>
      <App />
      </PersistGate>
    </Provider>,

  document.getElementById('root')
)
