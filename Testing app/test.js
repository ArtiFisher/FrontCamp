'use strict'

describe('top stories', function(){
  let app,
    container,
    dropdown;

  beforeEach(() => {
    container = document.createElement('div');
    dropdown = document.createElement('select');
    app = new Main(container, dropdown, 'ed43227ea7d2b47a3757c4234e3e9c06:2:74941862');
  });

  it('app should be inititalized properly', function(){
    expect(app.model).toBeDefined();
    expect(app.view).toBeDefined();
    expect(app.mediator).toBeDefined();
  });

  it('should call request on message', function(){
    spyOn(app.model, 'request');
    app.mediator.send('new theme', 'technology');
    expect(app.model.request).toHaveBeenCalledWith('technology');
  });

  it('should not call request on wrong message', function(){
    spyOn(app.model, 'request');
    app.mediator.send('abrakadabra', 'technology');
    expect(app.model.request).not.toHaveBeenCalled();
  });

  it('should call display on message', function(){
    spyOn(app.view, 'display');
    app.mediator.send('items', 'content');
    expect(app.view.display).toHaveBeenCalled();
  });

  it('should not call display on wrong message', function(){
    spyOn(app.view, 'display');
    app.mediator.send('abrakadabra', 'content');
    expect(app.view.display).not.toHaveBeenCalled();
  });

  it('should create items on display', function(){
    let obj1 = {
      url:'url1',
      title:'title1',
      abstract:'abstract1',
      byline:'byline1'
    };
    spyOn(app.view, 'createItem');
    app.view.display([obj1]);
    expect(app.view.createItem).toHaveBeenCalledWith(obj1);
  });

  it('should create correct item', function(){
    let obj1 = {
      url:'url1',
      title:'title1',
      abstract:'abstract1',
      byline:'byline1'
    },
    	expected = `<section class="item">
		        <h2 class="title"><a href="url1">title1</a></h2>
		        <article class="content">
		          <p class="text">abstract1</p>
		        </article>
		        <div class="info">
		          <span class="author">byline1</span>
		        </div>
		      </section>`,
    	result = app.view.createItem(obj1);
    expect(result).toMatch(expected);
  });

  it('should get correct item from factory', function(){
    spyOn(app.model, 'request');
    app.mediator.send('new theme', 'technology');
    expect(app.model.request).toHaveBeenCalledWith('technology');
  });
});
