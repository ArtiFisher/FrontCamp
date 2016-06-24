class AddPostComponent {
  constructor() {
    this.templateUrl = '/src/add-post/add-post.html';
    this.controllerAs = 'addPost';
    this.controller = function($scope){
      $scope.post = {};
    }
    this.bindings = {
      callback: '<'
    };
  }

  static createInstance() {
      AddPostComponent.instance = new AddPostComponent();
      return AddPostComponent.instance;
  }
}

export default AddPostComponent;
