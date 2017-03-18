// @simplefatty

/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
const webpack = require('webpack');
const helpers = require('./helpers');
const path = require('path');
const pkg = require('../package.json');

const AssetsPlugin = require('assets-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

/*
 * Webpack Configuration
 */


module.exports = function(options) {
    isProd = options.env === 'production';

    return {
        // for faster builds use 'eval'
        devtool: 'source-map',
        // cache: false,

        // our angular app
        entry: {
            'polyfills': './src/polyfills.ts',
            'vendor': './src/vendor.ts',
            'app': './src/app/index.ts',
        },
        /*
         * Options affecting the resolving of modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve
         */
        resolve: {
            /*
             * An array of extensions that should be used to resolve modules.
             *
             * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
             */
            extensions: ['.ts', '.js', '.json', '.css', '.html'],

            // An array of directory names to be resolved to the current directory
            modules: [helpers.rootNode('src'), 'node_modules'],

        },
        /*
         * Options affecting the resolving of modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve
         */
        module: {
            rules: [
                // Support for .ts files.
                {
                    test: /\.ts$/,
                    loaders: [
                        'awesome-typescript-loader',
                        'angular2-template-loader'
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },

                // Support for *.json files.
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
                },

                // support for .html antd .css as raw text
                {
                    test: /\.html$/,
                    loader: 'raw-loader',
                    exclude: [helpers.root('app/index.html')]
                },

                // support for fonts
                {
                    test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                    loader: 'file-loader?name=dist/[name]-[hash].[ext]'
                },

                // support for svg icons
                {
                    test: /\.svg/,
                    loader: 'svg-url-loader'
                }
            ]
        },
        plugins: [

            // new AssetsPlugin({
            //     path: helpers.root('src/app/dist'),
            //     filename: 'webpack-assets.json',
            //     prettyPrint: true
            // }),
            /*
             * Plugin: ForkCheckerPlugin
             * Description: Do type checking in a separate process, so webpack don't need to wait.
             *
             * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
             */
            // new ForkCheckerPlugin(),
            // Plugin: CommonsChunkPlugin
            // Description: Shares common code between the pages.
            // It identifies common modules and put them into a commons chunk.
            //
            // See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
            // See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
            new webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'polyfills'], minChunks: Infinity }),
            // Plugin: CopyWebpackPlugin
            // Description: Copy files and directories in webpack.
            //
            // Copies project static assets.
            //
            // See: https://www.npmjs.com/package/copy-webpack-plugin
            new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets' },
                { from: 'src/app/main.js', to: './' }
            ]),
            // Plugin: GenerateJsonPlugin
            // Description: Generate json file in webpack.
            //
            // Generate json file.
            //
            // See: https://www.npmjs.com/package/generate-json-webpack-plugin
            new GenerateJsonPlugin('package.json', {
                name: pkg.name,
                version: pkg.version,
                author: pkg.author,
                main: "main.js"
            })
        ],
        /*
         * Include polyfills or mocks for various node stuff
         * Description: Node configuration
         *
         * See: https://webpack.github.io/docs/configuration.html#node
         */
        node: {
            global: true,
            progress: false,
            crypto: 'empty',
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    };
}