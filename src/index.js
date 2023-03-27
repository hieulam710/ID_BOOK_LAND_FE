import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Fragment } from 'react';
import BookDetail from './pages/BookDetailPage/BookDetali';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <Router>
  <Fragment>
    <BookDetail/>
  </Fragment>
 </Router>
);