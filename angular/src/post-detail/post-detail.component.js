class PostDetailComponent {
  constructor() {
    this.templateUrl = '/src/post-detail/post-detail.html';
    this.controllerAs = 'postDetail';
    this.bindings = {
      post: '<'
    };
  }

  static createInstance() {
      PostDetailComponent.instance = new PostDetailComponent();
      return PostDetailComponent.instance;
  }
}

export default PostDetailComponent;
