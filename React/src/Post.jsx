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
    myFetch(`http://localhost:8080/api/${this.props.params.postId}`, (data) => this.setState({post: data}));
  }

  componentWillReceiveProps(next){
    if(next.params.postId != this.props.params.postId){
      myFetch(`http://localhost:8080/api/${next.params.postId}`, (data) => this.setState({post: data}));
    }
  }

  render() {
      return (
          <div>
              {this.state.post.author}
              {this.state.post.title}
              {this.state.post.text}
          </div>
      );
  }
}
