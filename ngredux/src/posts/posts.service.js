// import template from './posts.html';
let $http;
let PostResource;

class PostsService {
  constructor($resource) {
    // $http = $injector.get('$http');
    // PostResource = $resource('/data.json', {postId: '@id'})
    PostResource = $resource('http://localhost:8000/articles/:id', {id: '@id'})
    // PostResource = $resource('/data', {postId: '@id'})
  }

  // var User = $resource('/user/:userId', {userId:'@id'});
  // User.get({userId:123}, function(user) {
  //   user.abc = true;
  //   user.$save();
  // });

  getData(){
    //add, delete, get, query
    return PostResource.query();
    // return $http.get('/data.json').then((response) => response.data);
  }

  getItem(id){
    return PostResource.get({'id':id});
  }
}

export default PostsService;
