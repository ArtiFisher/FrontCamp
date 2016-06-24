describe('postlist state', function() {
  var $rootScope, $controller, $state, stateName = 'postlist';

  beforeEach(function () {
    module('app');
    inject(function(_$rootScope_, _$state_, _$componentController_) {
      $rootScope = _$rootScope_;
      $state = _$state_;
      $controller = _$componentController_;
    })
    $state.go(stateName);
    $rootScope.$digest();
  });

  it('should respond to URL', function() {
    expect($state.href(stateName, {id: 1})).toEqual('#/');
  });

  it('should change state', function() {
    expect($state.current.name).toEqual(stateName);
  });

  // it('should change state to post details', function() {
  // 	var ctrl = $controller('posts');
  // 	console.log(ctrl.list, ctrl.addPost, ctrl.selectPost);
  //   expect($state.current.name).toEqual('postdetails');
  // });

  // it('should change state to adding post', function() {
  // 	var ctrl = $controller('posts');
  // 	ctrl.addPost();
  // 	console.log(ctrl.list, ctrl.addPost, ctrl.selectPost);
  //   expect($state.current.name).toEqual('addpost');
  // });
});