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

  addArticle(article){
    this.setState({posts: this.state.posts.concat(article)})
  }

  componentWillMount() {
    myFetch('http://localhost:8080/articles', (data) => this.setState({posts: data}));
  }

  render() {
      return (
        <div>
          <Link to={`/add`}>Add article</Link>
          <ul>
              {
                this.state.posts.map((post, index) => {
                  return <li key={`/${post._id}`}><Link to={`/articles/${post._id}`}>{ post.title }</Link></li>;
                })
              }
          </ul>
          {this.props.children && React.cloneElement(this.props.children, {
              onNewArticle: this.addArticle.bind(this)
            })}
        </div>
      );
  }
}