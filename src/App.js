import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import rootReducer from './reducers';
import Stack from './Routers';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);
persistor.purge();

class StudentBudget extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Stack />
        </PersistGate>
      </Provider>
    );
  }
}

export default StudentBudget;
