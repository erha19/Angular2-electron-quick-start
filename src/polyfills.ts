// Polyfills
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)

// import 'ie-shim'; // Internet Explorer
// import 'es6-shim';
// import 'es6-promise';
// import 'es7-reflect-metadata';

// Prefer CoreJS over the polyfills above
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone.js';
//Error['stackTraceLimit'] = Infinity;

import 'zone.js/dist/long-stack-trace-zone';

// RxJS
// to include every operator uncomment
// import 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
