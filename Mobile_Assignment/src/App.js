import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Resource from './component/Resource';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Resource />
    </Provider>
  );
};

export default App;
