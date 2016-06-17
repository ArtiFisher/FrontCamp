import React from "react";
import myFetch from "./fetch.js";

export default class Post extends React.Component {
  constructor(){
    super();
    this.state = {
      post: {}
    }
  }

  componentWillMount() {
    myFetch(`http://localhost:8080/articles/${this.props.params.postId}`, (data) => this.setState({post: data}));
  }

  componentWillReceiveProps(next){
    if(next.params.postId != this.props.params.postId){
      myFetch(`http://localhost:8080/articles/${next.params.postId}`, (data) => this.setState({post: data}));
    }
  }

  render() {
      return (
          <div>
              <h1>{this.state.post.title}</h1>
              <p>{this.state.post.content}</p>
              <h4>{this.state.post.author}</h4>
          </div>
      );
  }
}
