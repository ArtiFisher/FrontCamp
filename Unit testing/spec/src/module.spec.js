let Model = require('../../src/model.js');
let Store = {
  save: jasmine.createSpy()
};
Model = new Model(Store);
describe('model component', function(){
  it('should init storage', function(){
    expect(Model.storage).toBe(Store);
  });

  it('should init storage', function(){
    // expect(Model.storage).toBe(Store);
    let title = 'Test title';
    let callback = function(){

    }
    Model.create(title, callback); 

    expect(Store.save).toHaveBeenCalledWith(jasmine.objectContaining({
      title: title
    }), callback);
  });
})
