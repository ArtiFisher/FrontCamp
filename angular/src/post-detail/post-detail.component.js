// import PostsController from './posts.controller.js';
// import template from './posts.html';

class PostDetailComponent {
  constructor() {
    // this.template = `<div>text: {{posts.text}}</div>`;
    this.templateUrl = '/src/post-detail/post-detail.html';
    // this.template = template;
    // this.template = `<div ng-repeat="post in posts.list">{{post.text}}</div>`;

    // this.controller = PostsController;
    this.controllerAs = 'postDetail';
    this.bindings = {
      post: '<',
      postClick: '&'
    };
  }

  static createInstance() {
      PostDetailComponent.instance = new PostDetailComponent();
      return PostDetailComponent.instance;
  }
}

export default PostDetailComponent;
