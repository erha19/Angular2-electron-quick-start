const helpers = require('./helpers');
const metadata = {
    title: 'Angular2 Electron',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    HMR: helpers.hasProcessFlag('hot'),
    isDevServer: helpers.isWebpackDevServer(),
    ENV: process.env.NODE_ENV
}
exports.metadata = metadata;