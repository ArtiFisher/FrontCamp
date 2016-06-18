import PostsController from './posts.controller.js';
// import template from './posts.html';

class PostsComponent {
  constructor() {
    // this.template = `<div>text: {{posts.text}}</div>`;
    this.templateUrl = '/src/posts/posts.html';
    // this.template = template;
    // this.template = `<div ng-repeat="post in posts.list">{{post.text}}</div>`;

    this.controller = PostsController;
    this.controllerAs = 'posts';
  }

  static createInstance() {
      PostsComponent.instance = new PostsComponent();
      return PostsComponent.instance;
  }
}

export default PostsComponent;
