var expect = require('chai').expect;

describe('random-lastName: ', function () {

  var randomName = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(randomName().split(' ')).to.have.length(2);
      expect(randomName({ middleName: true }).split(' ')).to.have.length(3);
      expect(randomName({ middleName: 'Powuku' }).split(' ')).to.have.length(3);
    }
  });
});
