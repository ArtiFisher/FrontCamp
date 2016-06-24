let $http;
let $state;
let Post;

class PostsService {
  constructor($resource, $injector) {
    $state = $injector.get('$state');
    Post = $resource('http://localhost:8010/articles/:id', {id: '@id'});
  }

  savePost(post){
    Post.save(post, function(a,b,c){
      $state.go('postlist');
    });
  }

  getPosts(){
    return Post.query();
  }

  getPost(id){
    return Post.get({'id': id});
  }
}

export default PostsService;
