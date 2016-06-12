import React from "react";
import {Link, Route, Router, browserHistory } from 'react-router';
import myFetch from "./fetch.js";

export default class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    myFetch('http://localhost:8080/api/', (data) => this.setState({posts: data}));
  }

  render() {
      return (
        <div>
          <ul>
              {this.state.posts.map((post, index) => {
                  return <Link to={`/${index}`} key={index}>{ post.author }</Link>
              })}
          </ul>
          {this.props.children}
        </div>


      );
  }
}
