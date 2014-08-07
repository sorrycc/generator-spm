var fs = require('fs');
var join = require('path').join;
var yeoman = require('yeoman-generator');
var util = require('../util');

var PageGenerator = yeoman.generators.Base.extend({

  init: function(mod) {
    this.include = this.getIncludeMode();
    util.addPage.call(this, mod);
  },

  getIncludeMode: function() {
    try {
      var data = fs.readFileSync(join(process.cwd(), 'package.json'), 'utf-8');
      var pkg = JSON.parse(data);
      if (pkg.spm.buildArgs.indexOf('standalone') > -1) {
        return 'standalone';
      }
    } catch(e) {}
  }

});

module.exports = PageGenerator;
