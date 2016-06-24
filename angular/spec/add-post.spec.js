describe('add post state', function() {
  var $rootScope, $controller, $state, $injector, myServiceMock, state = 'addpost';

  beforeEach(function () {
    module('app');
    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache, _$controller_) {
      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      $controller = _$controller_;
    })
    $state.go(state);
  });

  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/addPost');
  });

  it('should change state', function() {
    $rootScope.$digest();
    expect($state.current.name).toEqual(state);
  });
});