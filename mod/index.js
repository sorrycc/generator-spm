var yeoman = require('yeoman-generator');
var util = require('../util');

var ModGenerator = yeoman.generators.Base.extend({

  init: function(mod) {
    util.addMod.call(this, mod);
  }

});

module.exports = ModGenerator;
