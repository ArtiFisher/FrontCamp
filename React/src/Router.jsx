let React = require('react')
let ReactDOM = require('react-dom');
import {Link, Route, Router, browserHistory } from 'react-router';
import Add from './Add.jsx';
import Post from './Post.jsx';
import Posts from './Posts.jsx';

module.exports = <Router history={browserHistory}>
  <Route path="/">
    <Route path="/articles" component={Posts}>
      <Route path="/articles/:postId" component={Post} />
      <Route path="/add" component={Add} />
    </Route>
  </Route>
</Router>