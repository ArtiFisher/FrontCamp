import React from "react";
let ReactDOM = require('react-dom');
import myFetch from "./fetch.js";
import Posts from './Posts.jsx';
import {Link, Route, Router, browserHistory } from 'react-router';

export default class Add extends React.Component {
  constructor(props, context){
    super();
    this.state = {
      author: '',
      title: '',
      content: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    myFetch('http://localhost:8080/articles/add', (data) => {
      this.props.onNewArticle(data);
      browserHistory.push('/articles/' + data['_id']);
    }, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST', body: JSON.stringify(this.state) });
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
      return (
        <form id="inputForm" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" id="author" onChange={this.handleChange.bind(this)} name="author" placeholder="author" required autocomplete="off" value={this.state.author}/>
          <input type="text" id="title" onChange={this.handleChange.bind(this)} name="title" placeholder="title" required autocomplete="off" value={this.state.title}/>
          <textarea type="text" id="content" onChange={this.handleChange.bind(this)} name="content" placeholder="content" required autocomplete="off" value={this.state.content}></textarea>
          <input type="submit" id="button" value="Add article"/>
        </form>
      );
  }
}