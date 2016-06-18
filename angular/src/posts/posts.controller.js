let $state;

class PostsController {
  constructor(postsService, $injector){
    $state = $injector.get('$state');
    // console.log(postsService.getData);
    this.text = 'text from posts ctrl';
    this.list = postsService.getData();
    console.log(this.list);
  }

  increaseClicks(post){
    post.counter = (post.counter + 1) || 0;
  }

  selectPost(post){
    // debugger;
    $state.go('postdetails', {id: post['_id']});
    this.post = post;
  }
}

export default PostsController;
