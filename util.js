var join = require('path').join;
var util = module.exports = {};

util.addMod = function(mod) {
  var base = join(__dirname, 'app/templates/complex');
  this.mod = mod;
  this.template(join(base, 'mod.css'), 'mods/'+mod+'/index.css');
  this.template(join(base, 'mod.js'), 'mods/'+mod+'/index.js');
};

util.addPage = function(page) {
  var base = join(__dirname, 'app/templates/complex');
  this.page = page;
  this.template(join(base, 'page.css'), 'pages/'+page+'.css');
  this.template(join(base, 'page.js'), 'pages/'+page+'.js');
  if (this.include === 'standalone') {
    this.template(join(base, 'page.html'), 'pages/'+page+'.html');
  } else {
    this.template(join(base, 'page_with_seajs.html'), 'pages/'+page+'.html');
  }
};
