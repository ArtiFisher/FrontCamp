describe('post details state', function() {
  var $rootScope, $state, stateName = 'postdetails';

  beforeEach(function () {
    module('app');
    inject(function(_$rootScope_, _$state_) {
      $rootScope = _$rootScope_;
      $state = _$state_;
    })
    $state.go(stateName);
  });

  it('should respond to URL', function() {
    expect($state.href(stateName, {id: 1})).toEqual('#/post/1');
  });

  it('should change state', function() {
    $rootScope.$digest();
    expect($state.current.name).toEqual(stateName);
  });
});