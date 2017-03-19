# Angular 2 electron starterkit featuring webpack

This is a starter of angular (2 and above) and electron.Its a working demo of [electron] with [angular] using [Webpack], [ngrx]

[![Build Status](https://travis-ci.org/simplefatty/Angular2-electron-quick-start.svg?branch=master)](https://travis-ci.org/simplefatty/Angular2-electron-quick-start)
[![dependcy](https://david-dm.org/simplefatty/Angular2-electron-quick-start.svg)](https://david-dm.org/simplefatty/Angular2-electron-quick-start)
[![dev dependcy](https://david-dm.org/simplefatty/Angular2-electron-quick-start/dev-status.svg)](https://david-dm.org/simplefatty/Angular2-electron-quick-start?type=dev)

==================
## Quick start

```bash
git clone https://github.com/simplefatty/Angular2-electron-quick-start.git
```
Install dependencies

```bash
cd Angular2-electron-quick-start
npm install
```
Run the example
```bash
npm start
```

Hot reload on electron
```bash
npm run watch:electron
```
You can also run `npm run server:dev` to start a webpack-dev-server to debug you code on browser.


When you use Linux or OSX , you need to change the command in `package.json`,just change `set` to `export`.

## DevTools

Toggle DevTools:

* OSX: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

## Packaging(For test)

The app has support for packaging using 'electron-packager'

```bash
$ npm run package -- --all
```

Will run the package for OSX. You can also provide additional options to the package command such as

*  --name : The package name
*  --all : Will packaget the application to all the platforms
*  --arch : Arches to be provided
*  --icon : The icon for the app

## Generate Installer

Modify [electron-builder.yml](./electron-builder.yml) to edit package info.

For a full list of options see: https://github.com/electron-userland/electron-builder/wiki/Options.

Create a package for OSX, Windows and Linux
```
npm run pack
```

Or target a specific platform
```
npm run pack:mac
npm run pack:win
npm run pack:linux
```

## Tests

```
npm run test
```

## License

[MIT]

[Webpack]: http://webpack.github.io
[MIT]: http://markdalgleish.mit-license.org
[angular2]: http://angular.io
[electron]: http://electron.atom.io/
[ngrx]: https://github.com/ngrx/store
[material2]: https://github.com/angular/material2
[electron-packager]: https://github.com/electron-userland/electron-packager