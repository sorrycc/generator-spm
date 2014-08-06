# generator-spm

A SPM Project generator for Yeoman.

## Install

```bash
$ npm install yo -g
$ npm install generator-spm -g
```

## Usage

Init project.

```bash
$ yo spm
```

Run.

```bash
$ npm install spm-server -g
$ spm-server
$ open http://localhost:8000
```

## Options

### Include Mode

* relative
* all
* standalone

Notice: [seajs](http://seajs.org/) will be included in mode `relative` and `all`.

### Project Type

Simple

```
- index.js
- index.css
- index.html
- package.json
```

Complex

```
+ mods
    + modA
        - index.js
        - index.css
        - index.tpl
    + modB
        - index.js
+ pages
    - pageA.html
    - pageA.js
    - pageA.css
- package.json
```
