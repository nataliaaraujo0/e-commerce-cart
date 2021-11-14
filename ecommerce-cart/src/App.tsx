import React from 'react';
import { Provider } from 'react-redux';
import Catalog from './components/Catalog';


import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Catalog />
      </div>
    </Provider>
  );
}

export default App;
