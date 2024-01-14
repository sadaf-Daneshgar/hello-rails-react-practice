import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../javascript/react/src/redux/store';
import { fetchGreetings } from '../javascript/react/src/redux/greetings/greetingsSlice';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" component={Greeting} />
      </Router>
    </BrowserRouter>
  );
}

store.dispatch(fetchGreetings());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);