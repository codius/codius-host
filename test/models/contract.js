var path     = require('path');
var Contract = require(path.join(__dirname, '../..')).Contract;
var assert   = require('assert');

describe('Contracts Database Model', function() {
  var contract;

  it('should persist a contract to the database', function(done) {

    new Contract().save().then(function(record) {
      contract = record;
      assert(contract.id);
      done();
    });
  });

  after(function(done) {
    contract.destroy().then(function() {
      done();
    });
  });
});

