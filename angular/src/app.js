import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import PostsComponent from './posts/posts.component.js';
import PostDetail from './post-detail/post-detail.component.js';
import AddPostComponent from './add-post/add-post.component.js';
import PostsService from './posts/posts.service.js';
import cutFilter from './filters/cutter.filter.js';

angular.module('app', ['ngResource', 'ui.router'])
  .component('posts', PostsComponent.createInstance())
  .component('postDetail', PostDetail.createInstance())
  .component('addPost', AddPostComponent.createInstance())
  .service('postsService', PostsService)
  .filter('cutter', cutFilter)
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('postlist', {
      url: "/",
      template: "<posts></posts>"
    }).state('postdetails', {
      url: "/post/:id",
      template: "<post-detail post='post'></post-detail>",
      controller: function($scope, postsService, $stateParams){
        $scope.post = postsService.getPost($stateParams.id);
      }
    }).state('addpost', {
      url: "/addPost",
      template: "<add-post callback='callback'></add-post>",
      controller: function($scope, postsService){
        $scope.callback = function(post){
          postsService.savePost(post);
        }
      }
    })
  })
  // .directive('postsdir', () => PostsComponent.createInstance());
