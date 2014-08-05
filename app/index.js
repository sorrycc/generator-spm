var util = require('util');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var extend = require('extend');
var superb = require('superb');
var spawn = require('win-spawn');

var SPMGenerator = yeoman.generators.Base.extend({

  init: function() {
    this.pkg = require('../package');
    this.on('end', function() {
    });
  },

  askFor: function() {
    var done = this.async();

    this.log(yosay(
      'Welcome to the ' + superb() + ' spm generator!'
    ));

    var prompts = [
      {
        name: 'name',
        message: 'Project Name',
        default: this.appname
      },
      {
        name: 'version',
        message: 'Project Version',
        default: '0.1.0'
      },
      {
        name: 'include',
        message: 'Include Mode',
        type: 'list',
        default: 'standalone',
        choices: [
          'relative',
          'all',
          'standalone'
        ]
      },
      {
        name: 'dependencies',
        message: 'Dependencies'
      },
      {
        name: 'type',
        message: 'Project Type',
        type: 'list',
        default: 'simple',
        choices: [
          'simple'
        ]
      }
    ];

    this.prompt(prompts, function (props) {
      extend(this, props);

      done();
    }.bind(this));
  },

  app: function() {
    this.template('simple/_package.json', 'package.json');
  },

  projectfiles: function() {
    switch (this.type) {
      case 'simple':
        this.copy('simple/index.css', 'index.css');
        this.copy('simple/index.js', 'index.js');
        this.copy('simple/index.html', 'index.html');
        break;
      default:
        break;
    }
  },

  install: function() {
    var done = this.async();

    if (this.dependencies.trim() !== '') {
      var deps = this.dependencies.split(/\s+/);
      var args = ['install', '--save'].concat(deps);
      var install = spawn('spm', args, {stdio: 'inherit', customFds: [0, 1, 2]});
      install.on('close', done);
    } else {
      done();
    }
  }
});

module.exports = SPMGenerator;
