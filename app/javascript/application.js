import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../javascript/react/src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Greeting} />
      </Router>
    </Provider>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);