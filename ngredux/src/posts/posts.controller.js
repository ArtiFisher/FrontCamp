let $state;
let $ngRedux;

class PostsController {
  constructor(postsService, $injector, $scope){
    $state = $injector.get('$state');
    $ngRedux = $injector.get('$ngRedux');
    // console.log(postsService.getData);
    this.text = 'text from posts ctrl';
    this.list = postsService.getData();
    console.log(this.list);

    let unsubscribe = $ngRedux.subscribe(() => {
      let state = $ngRedux.getState();
      this.paymentType = state.paymentType;
    });

    $scope.$on('destroy', unsubscribe);
  }

  increaseClicks(post){
    post.counter = (post.counter + 1) || 0;
  }

  selectPost(post){
    // debugger;
    $ngRedux.dispatch({
      type:'CHANGE_PAYMENT_TYPE',
      name:'post.text'
    });
    // $state.go('postdetails', {id: post['_id']});
    // this.post = post;
  }
}

export default PostsController;
