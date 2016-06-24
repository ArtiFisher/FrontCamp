let $state;

class PostsController {
  constructor(postsService, $injector){
    $state = $injector.get('$state');
    this.list = postsService.getPosts();
  }

  addPost(){
    $state.go('addpost', {});
  }

  selectPost(post){
    $state.go('postdetails', {id: post['_id']});
    this.post = post;
  }
}

export default PostsController;
