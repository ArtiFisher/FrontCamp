var Todo = require('../../src/app.js');
var Helpers = require('../../src/helpers.js');


describe('something', function(){
  let todo;

  beforeEach(() => {
    spyOn(Helpers, '$on');
    todo = new Todo('this is test name');

  });

  it('should inititalize the app properly', function(){
    expect(todo.storage).toBeDefined();
    expect(todo.model).toBeDefined();
    expect(todo.template).toBeDefined();
    expect(todo.view).toBeDefined();
    expect(todo.controller).toBeDefined();
  })
});
