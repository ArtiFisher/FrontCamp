import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import AppController from './app.controller.js';
import PostsComponent from './posts/posts.component.js';
import PostDetail from './post-detail/post-detail.component.js';
import PostsService from './posts/posts.service.js';

angular.module('app', ['ngResource', 'ui.router'])
  .controller('appController', AppController)
  .component('posts', PostsComponent.createInstance())
  .component('postDetail', PostDetail.createInstance())
  .service('postsService', PostsService)
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('postlist', {
      url: "/",
      template: "<posts></posts>"
    }).state('postdetails', {
      url: "/post/:id",
      template: "<post-detail post='post'></post-detail>",
      controller: function($scope, postsService, $stateParams){
        $scope.post = postsService.getItem($stateParams.id);
      }
    })
  })
  // .directive('postsdir', () => PostsComponent.createInstance());
