import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store = {store}>
      <div className="App container-fluid">
        <header className="App-header">
          <MovieList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
