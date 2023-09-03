import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/ContactForm/Store.jsx';
import App from './App';
import Navigation from './components/Navigation';
import RegisterForm from './components/Auth/RegisterForm';
import LoginForm from './components/Auth/LoginForm';
import ContactPage from './components/Contacts/ContactPage';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/contacts" component={ContactPage} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
