import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import routes from './routes'
import store from './ducks/store'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

function App() {
  return (
    // <Provider store={store}>
      <HashRouter>
        <Nav />
        {routes}
      </HashRouter>
    //</Provider>
  );
}

export default App;
