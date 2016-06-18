import angular from 'angular';
import 'angular-mocks';

angular.module('app-mock', ['ngMockE2E'])
.run(($httpBackend) => {
  let data = [{
    "text": "111"
  },
  {
    "text": "2223"
  }];
  $httpBackend.whenGET(/\.html/).passThrough();
  $httpBackend.whenGET(/\.json/).passThrough();
  $httpBackend.whenGET('/data').respond(data);
  $httpBackend.whenGET(/data\/\w+$/).respond(function(method, url, params){
    var result = data[params.id];
    return [200, result];
  });

})
// angular.module('app').requires.push('app-mock');
