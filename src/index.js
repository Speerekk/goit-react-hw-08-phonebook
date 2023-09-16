import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
