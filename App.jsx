import React from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './src/components/AppNavigation';
import {store} from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
