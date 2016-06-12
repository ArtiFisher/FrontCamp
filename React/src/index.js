let React = require('react')
let ReactDOM = require('react-dom');
import Post from './Post.jsx';
import Posts from './Posts.jsx';
import {Link, Route, Router, browserHistory } from 'react-router';

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={Posts}>
    <Route path="/:postId" component={Post} />
  </Route>
  </Router>, document.getElementById('react'));

  // class HelloWorld extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       name: 'O'
  //     };
  //   }
  //
  //   componentDidMount() {
  //     this.setState({
  //       name: this.state.name += '222'
  //     })
  //   }
  //
  //   render() {
  //     return (<h1>Hello, world, {this.props.helloProp}, {this.state.name}</h1>);
  //   }
  // };
  // ReactDOM.render(<HelloWorld helloProp="new user"/>, document.getElementById('react'));
