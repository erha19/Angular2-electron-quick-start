# Angular 2 electron starterkit featuring webpack

This is a starter of angular (2 and above) and electron.Its a working demo of [electron] with [angular] using [Webpack], [ngrx]

[![Build Status](https://travis-ci.org/simplefatty/Angular2-electron-quick-start.svg?branch=master)](https://travis-ci.org/simplefatty/Angular2-electron-quick-start)
[![dependcy](https://david-dm.org/simplefatty/Angular2-electron-quick-start.svg)](https://david-dm.org/simplefatty/Angular2-electron-quick-start)
[![dev dependcy](https://david-dm.org/simplefatty/Angular2-electron-quick-start/dev-status.svg)](https://david-dm.org/simplefatty/Angular2-electron-quick-start?type=dev)

==================
## Run the example

```bash
$ npm install
$ npm start
```

You can also run `npm run server:dev` to start a webpack-dev-server to debug you code on browser.

When you use Linux or OSX , you need to change the command in `package.json`,just change `set` to `export`.

## Packaging

The app has support for packaging using 'electron-packager'

```bash
$ npm run package -- --all
```

Will run the package for OSX. You can also provide additional options to the package command such as

*  --name : The package name
*  --all : Will packaget the application to all the platforms
*  --arch : Arches to be provided
*  --icon : The icon for the app

## License

[MIT]

[Webpack]: http://webpack.github.io
[MIT]: http://markdalgleish.mit-license.org
[angular2]: http://angular.io
[electron]: http://electron.atom.io/
[ngrx]: https://github.com/ngrx/store
[material2]: https://github.com/angular/material2
[electron-packager]: https://github.com/electron-userland/electron-packager
