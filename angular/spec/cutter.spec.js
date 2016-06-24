describe('cutter filter', function() {
  var $filter;

  beforeEach(function () {
    module('app');
    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('cuts 10 by default', function() {
    var cutter = $filter('cutter');
    expect(cutter("0123456789asfweqxc")).toEqual("0123456789");
  });

  it('cuts given number', function() {
    var cutter = $filter('cutter');
    expect(cutter("0123456789asfweqxc", 12)).toEqual("0123456789as");
  });
});